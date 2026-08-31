import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import ChatLayout from "../../components/workspace/ChatLayout";
import ChatHeader from "../../components/workspace/ChatHeader";
import ChatSidebar from "../../components/workspace/ChatSidebar";
import ChatMessages from "../../components/workspace/ChatMessages";
import ChatInput from "../../components/workspace/ChatInput";
import SourcesPanel from "../../components/workspace/SourcesPanel";
import EmptyState from "../../components/workspace/EmptyState";
import {
  createConversation as createBackendConversation,
  getMessages as getConversationMessages,
} from "../../api/conversation.api";
import { askAI } from "../../services/chat.service";

export default function Workspace() {
  /* ==========================================================
       USER STATE
    ========================================================== */

  const [department] = useState("Information Technology");

  const [role] = useState("Employee");

  /* ==========================================================
       CHAT STATE
    ========================================================== */

  const [inputValue, setInputValue] = useState("");

  const [conversations, setConversations] = useState([]);

  const [activeConversationId, setActiveConversationId] = useState(null);

  const [messages, setMessages] = useState([]);

  const [selectedSources, setSelectedSources] = useState([]);

  const [isTyping, setIsTyping] = useState(false);

  /* ==========================================================
       ACTIVE CONVERSATION
    ========================================================== */

  const activeConversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation.id === activeConversationId
    );
  }, [conversations, activeConversationId]);

  const hasMessages = messages.length > 0;

  /* ==========================================================
       UPDATE CONVERSATION
    ========================================================== */

  const updateConversation = (
    conversationId,

    updater
  ) => {
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? updater(conversation)
          : conversation
      )
    );
  };

  /* ==========================================================
       INITIAL CONVERSATION
    ========================================================== */

  useEffect(() => {
    if (conversations.length > 0) return;

    handleNewChat();
  }, []); /* ==========================================================
       NEW CONVERSATION
    ========================================================== */

  const handleNewChat = async () => {
    try {
      const response = await createBackendConversation();

      const conversation = {
        id: response.data._id,

        title: response.data.title,

        department,

        pinned: false,

        createdAt: new Date(),

        updatedAt: new Date(),
      };

      setConversations((previous) => [conversation, ...previous]);

      setActiveConversationId(conversation.id);

      setMessages([]);

      setSelectedSources([]);

      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };

  /* ==========================================================
       SWITCH CONVERSATION
    ========================================================== */

  const switchConversation = async (conversation) => {
    setActiveConversationId(conversation.id);
    setInputValue("");
    setSelectedSources([]);

    try {
      const response = await getConversationMessages(conversation.id);

      setMessages(response.data);
    } catch (error) {
      console.error(error);
      setMessages([]);
    }
  };

  /* ==========================================================
       ADD USER MESSAGE
    ========================================================== */

  const addUserMessage = (content) => {
    const message = {
      id: crypto.randomUUID(),

      role: "user",

      content,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",

        minute: "2-digit",
      }),
    };

    setMessages((previous) => [...previous, message]);

    updateConversation(
      activeConversationId,

      (conversation) => ({
        ...conversation,

        title:
          messages.length === 0
            ? content.slice(0, 40)
            : conversation.title,

        updatedAt: new Date(),
      })
    );
  };

  /* ==========================================================
       ADD AI MESSAGE
    ========================================================== */

  const addAIMessage = (
    content,

    sources,

    responseTime
  ) => {
    const message = {
      id: crypto.randomUUID(),

      role: "assistant",

      content,

      sources,

      responseTime,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",

        minute: "2-digit",
      }),
    };

    setMessages((previous) => [...previous, message]);

    updateConversation(
      activeConversationId,

      (conversation) => ({
        ...conversation,

        updatedAt: new Date(),
      })
    );
  };

  /* ==========================================================
       SEND MESSAGE
    ========================================================== */

  const handleSend = async ({ message }) => {
    const text = message?.trim();

    if (!text || !activeConversationId) return;

    addUserMessage(text);

    setInputValue("");

    setIsTyping(true);

    try {
      const result = await askAI({
        conversationId: activeConversationId,

        question: text,
      });

      addAIMessage(
        result.answer,
        result.sources || [],
        result.response_time
      );

      setSelectedSources(result.sources || []);
    } catch (error) {
      console.error(error);

      addAIMessage(
        "Sorry, I couldn't process that request right now.",
        [],
        0
      );

      setSelectedSources([]);
    } finally {
      setIsTyping(false);
    }
  };

  /* ==========================================================
       CLEAR CONVERSATION
    ========================================================== */

  const handleClearChat = () => {
    setMessages([]);

    updateConversation(
      activeConversationId,

      (conversation) => ({
        ...conversation,

        updatedAt: new Date(),
      })
    );

    setSelectedSources([]);

    setInputValue("");
  };

  /* ==========================================================
       EXPORT CONVERSATION
    ========================================================== */

  const handleExport = () => {
    if (!activeConversation) return;

    const content = messages

      .map((message) => {
        const sender = message.role === "user" ? "You" : "Enterprise AI";

        return `${sender}\n\n${message.content}\n`;
      })

      .join("\n----------------------------------------\n\n");

    const blob = new Blob(
      [content],

      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${activeConversation.title}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  /* ==========================================================
       RENDER
    ========================================================== */

  return (
    <DashboardLayout>
      <ChatLayout>
        <ChatSidebar
          conversations={conversations}
          selectedChat={activeConversation}
          onSelectChat={switchConversation}
          onNewChat={handleNewChat}
        />

        <div>
          <ChatHeader
            department={department}
            role={role}
            onNewChat={handleNewChat}
            onExport={handleExport}
            onClear={handleClearChat}
          />

          {hasMessages ? (
            <ChatMessages messages={messages} isTyping={isTyping} />
          ) : (
            <EmptyState
              department={department}
              onPromptSelect={(prompt) => setInputValue(prompt)}
            />
          )}

          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            loading={isTyping}
          />
        </div>

        <SourcesPanel sources={selectedSources} />
      </ChatLayout>
    </DashboardLayout>
  );
}
