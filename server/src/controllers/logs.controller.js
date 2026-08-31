import asyncHandler from "../middleware/asyncHandler.js";

import * as logsService from "../services/logs.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

export const getLogs = asyncHandler(

    async (

        req,

        res

    ) => {

        const logs =

            await logsService.getLogs(

                req.user.department._id

            );

        successResponse(

            res,

            "Logs fetched successfully",

            logs

        );

    }

);