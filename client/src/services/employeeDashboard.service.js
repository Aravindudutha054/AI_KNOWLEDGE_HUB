import * as api from "../api/employeeDashboard.api";

export const getDashboard = async () => {
    const response = await api.getDashboard();
    return response.data.data;
};