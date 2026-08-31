import api from "./axios";

export const getLogs = () =>

    api.get("/logs");

export const getLog = id =>

    api.get(`/logs/${id}`);