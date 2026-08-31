import axios from "axios";

const API = axios.create({
    baseURL:
        process.env.REACT_APP_API_URL ||
        "http://localhost:5000/api"
});

API.interceptors.request.use(config => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getDocuments = () =>

    API.get("/documents");

export const getKnowledgeDocuments = () =>
    API.get("/documents");



export const getDocumentStats = () =>

    API.get("/documents/stats");

export const getDocument = id =>

    API.get(`/documents/${id}`);

export const uploadDocument = formData =>

    API.post(

        "/documents",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

export const deleteDocument = id =>

    API.delete(`/documents/${id}`);