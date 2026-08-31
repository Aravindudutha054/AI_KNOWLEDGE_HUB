import * as api from "../api/employee.api";

export const getEmployees = async (

    page = 1,

    search = ""

) => {

    const response = await api.getEmployees(

        page,

        search

    );

    return response.data.data;

};

export const createEmployee = async employee => {

    const response = await api.createEmployee(employee);

    return response.data.data;

};

export const updateEmployee = async (

    id,

    employee

) => {

    const response = await api.updateEmployee(

        id,

        employee

    );

    return response.data.data;

};

export const deleteEmployee = async id => {

    await api.deleteEmployee(id);

};