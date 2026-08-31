import * as api from "../api/department.api";

export const getDepartmentDashboard = async () => {
    const response = await api.getDepartmentDashboard();
    return response.data.data;
};
