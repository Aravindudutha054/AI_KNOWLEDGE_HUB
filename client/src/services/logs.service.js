import * as logsApi from "../api/logs.api";

export const getLogs = async () => {

    const response =

        await logsApi.getLogs();

    return response.data.data;

};

export const getLog = async id => {

    const response =

        await logsApi.getLog(id);

    return response.data.data;

};