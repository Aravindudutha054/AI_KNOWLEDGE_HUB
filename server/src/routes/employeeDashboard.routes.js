import express from "express";

import auth from "../middleware/auth.js";

import * as employeeDashboardController
from "../controllers/employeeDashboard.controller.js";

const router = express.Router();

router.use(auth);

router.get(
    "/",
    employeeDashboardController.getDashboard
);

export default router;