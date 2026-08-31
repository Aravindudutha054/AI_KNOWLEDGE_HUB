import axios from "./axios";

export const analyticsApi = {

    getEmployeeAnalytics() {

        return axios.get("/analytics/employee");

    }

};