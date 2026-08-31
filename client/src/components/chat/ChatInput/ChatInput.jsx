import { useState } from "react";
import { SendHorizonal } from "lucide-react";

import * as chatService from "../../../services/chat.service";

import styles from "./ChatInput.module.css";

export default function ChatInput({

    messages,

    setMessages,

    selectedConversation,

    loading,

    setLoading,

    onConversationTitleChange

}) {

    const [question, setQuestion] = useState("");

    const handleSend = async () => {

        if (!selectedConversation) {

            alert("Please create or select a conversation first.");

            return;

        }

        if (!question.trim() || loading) return;

        const userMessage = {

            id: Date.now(),

            role: "user",

            content: question

        };

        setMessages(previous => [

            ...previous,

            userMessage

        ]);

        setLoading(true);

        const currentQuestion = question;

        setQuestion("");

        try {

            const result = await chatService.askAI({

                conversationId: selectedConversation,

                question: currentQuestion

            });

            if (!result) {

                throw new Error("No response returned.");

            }

            // ⭐ Update conversation title immediately
            if (

                result.conversation_title &&

                onConversationTitleChange

            ) {

                onConversationTitleChange(

                    selectedConversation,

                    result.conversation_title

                );

            }

            const assistantMessage = {

                id: Date.now() + 1,

                role: "assistant",

                content: result.answer,

                sources: result.sources,

                responseTime: result.response_time

            };

            setMessages(previous => [

                ...previous,

                assistantMessage

            ]);

        }

        catch (error) {

            console.error(error);

            setMessages(previous => [

                ...previous,

                {

                    id: Date.now(),

                    role: "assistant",

                    content: "Something went wrong while generating the answer."

                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };

    const handleKeyDown = event => {

        if (

            event.key === "Enter" &&

            !event.shiftKey

        ) {

            event.preventDefault();

            handleSend();

        }

    };

    return (

        <div className={styles.container}>

            <textarea

                rows={1}

                placeholder="Ask anything about your department..."

                value={question}

                onChange={event =>

                    setQuestion(event.target.value)

                }

                onKeyDown={handleKeyDown}

            />

            <button

                disabled={loading || !question.trim()}

                onClick={handleSend}

            >

                {

                    loading

                        ? "..."

                        : <SendHorizonal size={18} />

                }

            </button>

        </div>

    );

}