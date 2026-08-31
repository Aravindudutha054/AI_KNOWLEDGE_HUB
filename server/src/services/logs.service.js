import ActivityLog from "../models/ActivityLog.js";

export const getLogs = async departmentId => {

    return ActivityLog.find({

        department: departmentId

    })

        .populate(

            "performedBy",

            "fullName"

        )

        .sort({

            createdAt: -1

        });

};