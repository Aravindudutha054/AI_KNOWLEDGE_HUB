import asyncHandler from "../middleware/asyncHandler.js";
import * as conversationService from "../services/conversation.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const createConversation = asyncHandler(

    async (req, res) => {

        const conversation = await conversationService.createConversation(

            req.user._id,

            req.user.department?._id || req.user.department

        );

        successResponse(

            res,

            "Conversation created",

            {

                _id: conversation._id,

                title: conversation.title,

                employee: conversation.employee,

                department: conversation.department

            },

            201

        );

    }

);

export const getConversations = asyncHandler(

    async (req, res) => {

        const conversations = await conversationService.getConversations(

            req.user._id

        );

        successResponse(

            res,

            "Conversations fetched",

            conversations.map(conversation => ({

                _id: conversation._id,

                title: conversation.title,

                lastMessageAt: conversation.lastMessageAt

            }))

        );

    }

);

export const getMessages = asyncHandler(

    async (req, res) => {

        const messages = await conversationService.getMessages(

            req.params.id

        );

        successResponse(
    res,
    "Messages fetched",
    messages.map(message => ({
        _id: message._id,
        role: message.role,
        content: message.content,
        sources: message.sources,
        responseTime: message.responseTime,
        createdAt: message.createdAt
    }))
);

    }

);
