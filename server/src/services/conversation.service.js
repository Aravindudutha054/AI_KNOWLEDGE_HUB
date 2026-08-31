import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

export const createConversation = async (

    employee,
    department

) => {

    return await Conversation.create({

        employee,

        department,

        title: "New Chat"

    });

};

export const getConversations = async (

    employee

) => {

    return await Conversation

        .find({

            employee

        })

        .sort({

            lastMessageAt: -1

        });

};

export const getConversation = async (

    id

) => {

    return await Conversation.findById(id);

};

export const getMessages = async (

    conversationId

) => {

    return await Message

        .find({

            conversation: conversationId

        })

        .sort({

            createdAt: 1

        });

};

export const saveMessage = async (

    data

) => {

    return await Message.create(data);

};

export const updateConversation = async (

    id,

    data

) => {

    return await Conversation.findByIdAndUpdate(

        id,

        data,

        {

            new: true

        }

    );

};
