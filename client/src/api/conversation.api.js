import axios from "axios";

const API = axios.create({
    baseURL:
        process.env.REACT_APP_API_URL ||
        "http://localhost:5000/api"
});

API.interceptors.request.use(config=>{

    const token=

        localStorage.getItem("token");

    if(token){

        config.headers.Authorization=

            `Bearer ${token}`;

    }

    return config;

});

export const getConversations=()=>

    API.get("/conversations");

export const createConversation=()=>

    API.post("/conversations");

export const getMessages=id=>

    API.get(`/conversations/${id}/messages`);