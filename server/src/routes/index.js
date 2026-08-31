import { Router } from "express";
import employeeRoutes from "./employee.routes.js";
import authRoutes from "./auth.routes.js";
import departmentRoutes from "./department.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import documentRoutes from "./document.routes.js";
import chatRoutes from "./chat.routes.js";
import analyticsRoutes from "./analytics.routes.js";
import pipelineRoutes from "./pipeline.routes.js";
import logsRoutes from "./logs.routes.js";
import employeeDashboardRoutes from "./employeeDashboard.routes.js";
//import analyticsRoutes from "./analytics/analytics.routes.js";


const router = Router();

router.use("/auth", authRoutes);
router.use(

    "/dashboard",

    dashboardRoutes

);

router.use(
    "/employee/dashboard",
    employeeDashboardRoutes
);

router.use(

    "/logs",

    logsRoutes

);

router.use(

    "/api/analytics",

    analyticsRoutes

);

router.use(

    "/pipeline",

    pipelineRoutes

);
router.use(

    "/analytics",

    analyticsRoutes

);
router.use("/documents", documentRoutes);
router.use("/chat", chatRoutes);
router.use(

    "/employees",

    employeeRoutes

);

router.use(

    "/departments",

    departmentRoutes

);

router.get(

    "/health",

    (req, res) => {

        res.json({

            success: true,

            message: "API Running"

        });

    }

);

export default router;