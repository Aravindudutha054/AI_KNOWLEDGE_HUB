import * as api from "../api/documentStats.api";

export const getDocumentStats = async () => {

    const response =

        await api.getDocumentStats();

    return response.data.data;

};
