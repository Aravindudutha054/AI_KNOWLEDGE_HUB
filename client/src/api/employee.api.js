import axios from "axios";

const API = axios.create({
    baseURL:
        process.env.REACT_APP_API_URL ||
        "http://localhost:5000/api"
});

API.interceptors.request.use(config => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

export const getEmployees = (

    page,

    search

) =>

    API.get(

        `/employees?page=${page}&search=${search}`

    );

export const createEmployee = data =>

    API.post("/employees", data);

export const updateEmployee = (id, data) =>

    API.put(`/employees/${id}`, data);

export const deleteEmployee = id =>

    API.delete(`/employees/${id}`);