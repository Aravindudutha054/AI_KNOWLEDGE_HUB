import ActivityLog from "../models/ActivityLog.js";

export const logActivity = async ({

    module,

    action,

    target,

    details,

    status = "Success",

    performedBy,

    department

}) => {

    await ActivityLog.create({

        module,

        action,

        target,

        details,

        status,

        performedBy,

        department

    });

};