import { Router } from "express";

import auth from "../middleware/auth.js";

import authorize from "../middleware/authorize.js";

import {

    ROLES

} from "../constants/roles.js";

import * as departmentController from "../controllers/department.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/dashboard",

    departmentController.getDepartmentDashboard

);

router.get(

    "/",

    departmentController.getDepartments

);

router.get(

    "/:id",

    departmentController.getDepartment

);

router.post(

    "/",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    departmentController.createDepartment

);

router.put(

    "/:id",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    departmentController.updateDepartment

);

router.delete(

    "/:id",

    authorize(

        ROLES.ADMIN,
        ROLES.SUPER_ADMIN

    ),

    departmentController.deleteDepartment

);

export default router;