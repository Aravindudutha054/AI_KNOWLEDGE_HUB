import asyncHandler from "../middleware/asyncHandler.js";

import * as departmentService from "../services/department.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

export const getDepartments = asyncHandler(

    async (req, res) => {

        const departments =

            await departmentService.getDepartments();

        successResponse(

            res,

            "Departments fetched successfully",

            departments

        );

    }

);

export const getDepartment = asyncHandler(

    async (req, res) => {

        const department =

            await departmentService.getDepartmentById(

                req.params.id

            );

        successResponse(

            res,

            "Department fetched successfully",

            department

        );

    }

);

export const createDepartment = asyncHandler(

    async (req, res) => {

        const department =

            await departmentService.createDepartment(

                req.body

            );

        successResponse(

            res,

            "Department created successfully",

            department,

            201

        );

    }

);

export const updateDepartment = asyncHandler(

    async (req, res) => {

        const department =

            await departmentService.updateDepartment(

                req.params.id,

                req.body

            );

        successResponse(

            res,

            "Department updated successfully",

            department

        );

    }

);

export const deleteDepartment = asyncHandler(

    async (req, res) => {

        await departmentService.deleteDepartment(

            req.params.id

        );

        successResponse(

            res,

            "Department deleted successfully"

        );

    }

);

export const getDepartmentDashboard = asyncHandler(

    async (req, res) => {

        const departments =

            await departmentService.getDepartmentDashboard();

        successResponse(

            res,

            "Departments loaded successfully",

            departments

        );

    }

);