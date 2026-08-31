import { Router } from "express";

import auth from "../middleware/auth.js";

import authorize from "../middleware/authorize.js";

import {

    ROLES

} from "../constants/roles.js";

import * as employeeController from "../controllers/employee.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/",

    employeeController.getEmployees

);

router.get(

    "/:id",

    employeeController.getEmployee

);

router.post(

    "/",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    employeeController.createEmployee

);

router.put(

    "/:id",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    employeeController.updateEmployee

);

router.delete(
    "/:id",
    authorize(
        ROLES.ADMIN,
        ROLES.SUPER_ADMIN
    ),
    employeeController.deleteEmployee
);

export default router;