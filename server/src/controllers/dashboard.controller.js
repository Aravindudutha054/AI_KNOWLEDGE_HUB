import asyncHandler from "../middleware/asyncHandler.js";

import * as dashboardService from "../services/dashboard.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

export const getDashboard = asyncHandler(

    async (req, res) => {
    console.log("Dashboard Controller Called");
    console.log("User Role:", req.user.role);


        const dashboard =
    await dashboardService.getDashboard(req.user);

        successResponse(

            res,

            "Dashboard loaded successfully",

            dashboard

        );

    }

);
