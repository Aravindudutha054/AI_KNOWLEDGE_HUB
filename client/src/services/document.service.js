import * as api from "../api/document.api";

export const getDocuments = async () => {

    const response = await api.getDocuments();

    return response.data.data;

};

export const getDocumentStats = async () => {

    const response = await api.getDocumentStats();

    return response.data.data;

};

export const getDocument = async id => {

    const response = await api.getDocument(id);

    return response.data.data;

};

export const uploadDocument = async document => {

    const formData = new FormData();

    formData.append(

        "name",

        document.name

    );

    formData.append(

        "file",

        document.file

    );

    for (const pair of formData.entries()) {

        console.log(pair[0], pair[1]);

    }

    const response = await api.uploadDocument(

        formData

    );

    return response.data.data;

};

export const deleteDocument = async id => {

    await api.deleteDocument(id);

};