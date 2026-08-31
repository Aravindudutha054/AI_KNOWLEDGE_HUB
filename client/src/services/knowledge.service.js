import { getDocuments } from "../api/document.api";

export const getKnowledgeDocumentsList = async () => {

    const { data } = await getDocuments();

    return data.data;

};