import * as api from "../api/analytics.api";

export const getAnalytics = async () => {

    const response = await api.getAnalytics();

    return response.data.data;

};