import { Router } from "express";

import auth from "../middleware/auth.js";
import { trackEvent } from "../analytics/analytics.middleware.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

router.post(
    "/login",
    trackEvent(ANALYTICS_EVENT_TYPES.LOGIN),
    authController.login
);

router.post(
    "/logout",
    auth,
    authController.logout
);

router.get(
    "/me",
    auth,
    authController.getCurrentUser
);

export default router;