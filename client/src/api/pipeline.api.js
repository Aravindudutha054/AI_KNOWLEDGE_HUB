import api from "./axios";

export const getPipeline = () => {

    return api.get("/pipeline");

};

export const reindexDocument = id => {

    return api.post(`/pipeline/${id}/reindex`);

};

export const reindexAll = () => {

    return api.post("/pipeline/reindex-all");

};