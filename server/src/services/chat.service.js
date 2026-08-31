import axios from "axios";

import analyticsEvents from "../analytics/analytics.events.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";
import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
import { generateConversationTitle } from "../utils/conversationTitle.js";
import { logActivity } from "./activityLogger.service.js";
import { AI_SERVICE } from "../config/ai.js";

export const askAI = async ({
    conversationId,
    question,
    user
}) => {

    try {

        console.log("Conversation ID:", conversationId);
        console.log("Question:", question);
        console.log("Department:", user.department.code);

        // Save user message
        await Message.create({
            conversation: conversationId,
            role: "user",
            content: question
        });

        // Update conversation title if it's a new chat
        const conversation = await Conversation.findById(conversationId);

        if (conversation && conversation.title === "New Chat") {
            const title = generateConversationTitle(question);

            await Conversation.findByIdAndUpdate(
                conversationId,
                {
                    title
                }
            );
        }

        // Call AI Service
        const response = await axios.post(
            `${AI_SERVICE.BASE_URL}/chat`,
            {
                conversationId,
                question,
                department: user.department.code
            }
        );

        console.log("AI Response:", response.data);

        // FastAPI response
        const ai = response.data.data;

        // Save AI response
        await Message.create({
            conversation: conversationId,
            role: "assistant",
            content: ai.answer,
            responseTime: ai.response_time,
            sources: ai.sources || []
        });

        // Log analytics
        await analyticsEvents.log({
            employee: user._id,
            department: user.department._id,
            type: ANALYTICS_EVENT_TYPES.AI_CHAT,
            metadata: {
                question,
                answerLength: ai.answer?.length || 0,
                sources: ai.sources?.length || 0
            }
        });

        // Activity log
        await logActivity({
            module: "Chat",
            action: "Ask AI",
            target: question,
            details: "AI response generated",
            performedBy: user._id,
            department: user.department._id,
            status: "Success"
        });

        // Update conversation timestamp
        await Conversation.findByIdAndUpdate(
            conversationId,
            {
                lastMessageAt: new Date()
            }
        );

        // Return response to frontend
        return {
            success: true,
            message: "Answer generated successfully",
            data: {
                ...ai,
                conversationId
            }
        };

    } catch (error) {

        console.error("========== CHAT ERROR ==========");
        console.error("Status:", error.response?.status);
        console.error("Response:", error.response?.data);
        console.error("Message:", error.message);
        console.error(error.stack);
        console.error("================================");

        throw error;
    }
};