import asyncHandler from "../middleware/asyncHandler.js";

import * as employeeService from "../services/employee.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

export const getEmployees = asyncHandler(

    async (

        req,

        res

    ) => {

        const page =

            Number(req.query.page) || 1;

        const limit =

            Number(req.query.limit) || 10;

        const search =

            req.query.search || "";

        const result =

            await employeeService.getEmployeesPaginated(

                req.user.department._id,

                page,

                limit,

                search

            );

        successResponse(

            res,

            "Employees fetched",

            result

        );

    }

);

export const getEmployee = asyncHandler(

    async (

        req,

        res

    ) => {

        const employee =

            await employeeService.getEmployeeById(

                req.params.id,

                req.user.department._id

            );

        successResponse(

            res,

            "Employee fetched successfully",

            employee

        );

    }

);

export const createEmployee = asyncHandler(

    async (

        req,

        res

    ) => {

        console.log(req.body);

        const employee =
    await employeeService.createEmployee(

        {

            ...req.body,

            department: req.user.department._id

        },

        req.user

    );

        successResponse(

            res,

            "Employee created successfully",

            employee,

            201

        );

    }

);

export const updateEmployee = asyncHandler(

    async (

        req,

        res

    ) => {

        const employee = await employeeService.getEmployeeById(

            req.params.id,

            req.user.department._id

        );

        if (!employee) {

            throw new Error("Employee not found");

        }

        if (

            employee.department._id.toString() !==

            req.user.department._id.toString()

        ) {

            throw new Error("Unauthorized");

        }

        const updatedEmployee =
    await employeeService.updateEmployee(

        req.params.id,

        req.user.department._id,

        {

            ...req.body,

            department: req.user.department._id

        },

        req.user

    );

        successResponse(

            res,

            "Employee updated successfully",

            updatedEmployee

        );

    }

);

export const deleteEmployee = asyncHandler(

    async (

        req,

        res

    ) => {

        const employee = await employeeService.getEmployeeById(

            req.params.id,

            req.user.department._id

        );

        if (!employee) {

            throw new Error("Employee not found");

        }

        if (

            employee.department._id.toString() !==

            req.user.department._id.toString()

        ) {

            throw new Error("Unauthorized");

        }

        await employeeService.deleteEmployee(

    req.params.id,

    req.user.department._id,

    req.user

);

        successResponse(

            res,

            "Employee deleted successfully"

        );

    }

);