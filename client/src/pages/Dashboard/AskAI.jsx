import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AskAIHome from "../../components/chat/AskAIHome/AskAIHome";
import * as conversationService from "../../services/conversation.service";

export default function AskAI() {

    const [conversations, setConversations] = useState([]);

    const [selectedConversation, setSelectedConversation] = useState(null);

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const handleSelectConversation = async (conversation) => {

        const messages =

            await conversationService.getMessages(

                conversation._id

            );

        setSelectedConversation(

            conversation._id

        );

        setMessages(messages);

    };

    useEffect(() => {

        const loadConversations = async () => {

            const data =

                await conversationService.getConversations();

            setConversations(data);

            if (data.length) {

                setSelectedConversation(data[0]._id);

            }

        };

        loadConversations();

    }, []);

    const handleNewConversation = async () => {

        const conversation =

            await conversationService.createConversation();

        setConversations(previous =>

            [

                conversation,

                ...previous

            ]

        );

        setSelectedConversation(

            conversation._id

        );

        setMessages([]);

    };

    return (

        <DashboardLayout>

            <AskAIHome

                conversations={conversations}

                selectedConversation={selectedConversation}

                onSelectConversation={handleSelectConversation}

                onNewConversation={handleNewConversation}

                messages={messages}

                setMessages={setMessages}

                loading={loading}

                setLoading={setLoading}

            />

        </DashboardLayout>

    );

}