import { useEffect, useState } from "react";

import * as conversationService from "../../../services/conversation.service";

import ConversationSidebar from "../ConversationSidebar/ConversationSidebar";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatInput from "../ChatInput/ChatInput";
import EmptyState from "../EmptyState/EmptyState";

import styles from "./AskAIHome.module.css";

export default function AskAIHome() {

    const [

        conversations,

        setConversations

    ] = useState([]);

    const [

        selectedConversation,

        setSelectedConversation

    ] = useState(null);

    const [

        messages,

        setMessages

    ] = useState([]);

    const [

        loading,

        setLoading

    ] = useState(false);

    useEffect(() => {

        loadConversations();

    }, []);

    const loadConversations = async () => {

        try {

            const data = await conversationService.getConversations();

setConversations(data);

if (data.length > 0) {
    setSelectedConversation(data[0]._id);

    const messages = await conversationService.getMessages(data[0]._id);

    setMessages(messages);
}

        }

        catch (error) {

            console.error(error);

        }

    };

    const handleNewConversation = async () => {

        try {

            const conversation =

                await conversationService.createConversation();

            setConversations(previous => [

                conversation,

                ...previous

            ]);

            setSelectedConversation(

                conversation._id

            );

            setMessages([]);

        }

        catch(error){

            console.error(error);

        }

    };

    const handleConversationClick = async (

        conversation

    ) => {

        try{

            setSelectedConversation(

                conversation._id

            );

            const messages =

                await conversationService.getMessages(

                    conversation._id

                );

            setMessages(messages);

        }

        catch(error){

            console.error(error);

        }

    };

    const handleConversationTitleChange = (
    conversationId,
    title
) => {

    setConversations(previous =>
        previous.map(conversation =>
            conversation._id === conversationId
                ? {
                    ...conversation,
                    title
                }
                : conversation
        )
    );

};

    return (

        <div className={styles.layout}>

            <ConversationSidebar

                conversations={conversations}

                selectedConversation={selectedConversation}

                onSelect={handleConversationClick}

                onNewConversation={handleNewConversation}

            />

            <div className={styles.container}>

                <ChatHeader />

                {

                    messages.length === 0

                        ?

                        <EmptyState />

                        :

                        <ChatMessages

                            messages={messages}

                            loading={loading}

                        />

                }

                <ChatInput

                    messages={messages}

                    setMessages={setMessages}

                    selectedConversation={selectedConversation}

                    loading={loading}

                    setLoading={setLoading}

                    onConversationTitleChange={
        handleConversationTitleChange
    }


                />

            </div>

        </div>

    );

}