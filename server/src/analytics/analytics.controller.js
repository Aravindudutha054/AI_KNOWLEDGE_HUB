import analyticsService from "./analytics.service.js";

/**
 * GET /api/analytics/admin
 */
export async function getAdminAnalytics(req, res, next) {

    try {

        const analytics = await analyticsService.getAdminAnalytics();

        return res.json({

            success: true,

            data: analytics

        });

    }

    catch (error) {

        next(error);

    }

}

/**
 * GET /api/employee/analytics
 */
export async function getEmployeeAnalytics(req, res, next) {

    try {

        const employeeId = req.user._id;

        const departmentId = req.user.department;

        const analytics = await analyticsService.getEmployeeAnalytics(

            employeeId,

            departmentId

        );

        return res.status(200).json({

            success: true,

            message: "Employee analytics fetched successfully.",

            data: analytics

        });

    }

    catch (error) {

        next(error);

    }

}

/**
 * POST /api/analytics/event
 *
 * Optional endpoint.
 * Useful for frontend-triggered events.
 */
export async function logAnalyticsEvent(req, res, next) {

    try {

        const employeeId = req.user._id;

        const departmentId = req.user.department;

        const {

            type,

            resourceId = null,

            resourceType = null,

            metadata = {}

        } = req.body;

        await analyticsService.logEvent({

            employee: employeeId,

            department: departmentId,

            type,

            resourceId,

            resourceType,

            metadata

        });

        return res.status(201).json({

            success: true,

            message: "Analytics event logged successfully."

        });

    }

    catch (error) {

        next(error);

    }

}