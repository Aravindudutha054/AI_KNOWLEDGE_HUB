import asyncHandler from "../middleware/asyncHandler.js";
import analyticsEvents from "../analytics/analytics.events.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";
import * as authService from "../services/auth.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const login = asyncHandler(async (req, res) => {
    const {
        employeeId,
        password,
        role,
        department
    } = req.body;

    const data = await authService.login(
        employeeId,
        password,
        role,
        department
    );

    await analyticsEvents.log({
        employee: data.user._id,
        department: data.user.department._id,
        type: ANALYTICS_EVENT_TYPES.LOGIN
    });

    successResponse(
        res,
        "Login successful",
        data
    );
});

export const logout = asyncHandler(async (req, res) => {
    await analyticsEvents.log({
        employee: req.user._id,
        department: req.user.department,
        type: ANALYTICS_EVENT_TYPES.LOGOUT
    });

    successResponse(
        res,
        "Logout successful"
    );
});

export const getCurrentUser = asyncHandler(async (req, res) => {
    successResponse(
        res,
        "User fetched successfully",
        req.user
    );
});