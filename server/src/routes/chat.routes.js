import { Router } from "express";

import auth from "../middleware/auth.js";
import { trackEvent } from "../analytics/analytics.middleware.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";

import * as chatController from "../controllers/chat.controller.js";

const router = Router();

router.use(auth);

router.post(

    "/",

    trackEvent(

        ANALYTICS_EVENT_TYPES.AI_CHAT,

        (req, body) => ({

            promptLength: req.body.question?.length || 0,

            responseLength: body.data.answer?.length || 0,

            citations: body.data.sources?.length || 0

        })

    ),

    chatController.askAI

);

export default router;
