import { Router } from "express";

import {

    getAdminAnalytics,

    getEmployeeAnalytics,

    logAnalyticsEvent

} from "./analytics.controller.js";

import auth from "../middleware/auth.js";

const router = Router();

/**
 * Admin Dashboard Analytics
 */
router.get(

    "/admin",

    auth,

    getAdminAnalytics

);

/**
 * Employee Dashboard Analytics
 */
router.get(

    "/employee",

    auth,

    getEmployeeAnalytics

);

/**
 * Log Event
 *
 * Optional API
 */
router.post(

    "/event",

    auth,

    logAnalyticsEvent

);

export default router;