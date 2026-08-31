import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { AI_SERVICE } from "../config/ai.js";

export const indexDocument = async (payload) => {    console.log("Calling AI Service...");    console.log({        document_id: payload.document_id,        document_name: payload.document_name,        department: payload.department,        file_path: payload.file_path    });    const form = new FormData();    form.append(        "document_id",        payload.document_id    );    form.append(        "document_name",        payload.document_name    );    form.append(        "department",        payload.department    );    form.append(        "file",        fs.createReadStream(            payload.file_path        )    );    try {        const response = await axios.post(            `${AI_SERVICE.BASE_URL}/documents/index`,            form,            {                headers: {                    ...form.getHeaders()                },                maxContentLength: Infinity,                maxBodyLength: Infinity            }        );        console.log(            "AI SERVICE RESPONSE:",            response.data        );        return response.data;    } catch (error) {        console.error(            "AI SERVICE ERROR STATUS:",            error.response?.status        );        console.error(            "AI SERVICE ERROR DATA:",            error.response?.data        );        console.error(            "AI SERVICE ERROR HEADERS:",            error.response?.headers        );        throw error;    }};

export const askAI = async (
    conversationId,
    question,
    department
) => {
    const response = await axios.post(
        `${AI_SERVICE.BASE_URL}/chat`,
        {
            conversationId,
            question,
            department
        }
    );

    return response.data;
};