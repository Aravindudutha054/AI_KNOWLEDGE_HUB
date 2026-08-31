import { Router } from "express";

import auth from "../middleware/auth.js";

import authorize from "../middleware/authorize.js";

import {

    ROLES

} from "../constants/roles.js";

import * as logsController from "../controllers/logs.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    logsController.getLogs

);

export default router;