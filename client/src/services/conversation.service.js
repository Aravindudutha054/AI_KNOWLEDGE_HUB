import * as api from "../api/conversation.api";

export const getConversations=async()=>{

    const response=

        await api.getConversations();

    return response.data.data;

};

export const createConversation=async()=>{

    const response=

        await api.createConversation();

    return response.data.data;

};

export const getMessages=async(id)=>{

    const response=

        await api.getMessages(id);

    return response.data.data;

};
