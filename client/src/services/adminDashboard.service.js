import * as api from "../api/adminDashboard.api";

export const getDashboard = async () => {
    const response = await api.getDashboard();
    return response.data.data;
};