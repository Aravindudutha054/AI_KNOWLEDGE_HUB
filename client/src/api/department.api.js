import apiClient from "./axios";

export const getDepartmentDashboard = async () => {
    return apiClient.get("/departments/dashboard");
};
