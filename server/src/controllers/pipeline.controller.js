import asyncHandler from "../middleware/asyncHandler.js";

import * as pipelineService from "../services/pipeline.service.js";

import {
    successResponse
} from "../utils/apiResponse.js";

export const getPipeline = asyncHandler(

    async (

        req,

        res

    ) => {

        const pipeline = await pipelineService.getPipeline(

            req.user.department._id

        );

        successResponse(

            res,

            "Pipeline fetched successfully",

            pipeline

        );

    }

);