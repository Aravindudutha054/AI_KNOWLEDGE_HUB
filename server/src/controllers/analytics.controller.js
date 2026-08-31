import asyncHandler from "../middleware/asyncHandler.js";

import * as analyticsService from "../services/analytics.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

export const getDashboardStats = asyncHandler(

    async (

        req,

        res

    ) => {

        const stats =

            await analyticsService.getDashboardStats(

                req.user.department._id

            );

        successResponse(

            res,

            "Analytics fetched successfully",

            stats

        );

    }

);