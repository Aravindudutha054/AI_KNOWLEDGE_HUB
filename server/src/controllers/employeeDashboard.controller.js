import asyncHandler from "../middleware/asyncHandler.js";
import * as employeeDashboardService from "../services/employeeDashboard.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const getDashboard = asyncHandler(async (req, res) => {

    const dashboard =
        await employeeDashboardService.getEmployeeDashboard(req.user);

    successResponse(
        res,
        "Employee dashboard loaded successfully",
        dashboard
    );

});