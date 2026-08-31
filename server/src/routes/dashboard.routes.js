import { Router } from "express";

import auth from "../middleware/auth.js";

import * as controller from "../controllers/dashboard.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/",

    controller.getDashboard

);

export default router;