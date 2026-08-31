import Employee from "../models/Employee.js";
import Department from "../models/Department.js";
import Document from "../models/Document.js";
import Conversation from "../models/Conversation.js";

export const getDashboard = async () => {
    console.log("ADMIN DASHBOARD SERVICE");

    const [

        employees,

        departments,

        documents,

        conversations,

        recentEmployees,

        recentDocuments

    ] = await Promise.all([

        Employee.countDocuments(),

        Department.countDocuments(),

        Document.countDocuments(),

        Conversation.countDocuments(),

        Employee.find()

            .populate("department")

            .sort({

                createdAt: -1

            })

            .limit(5),

        Document.find()

            .populate("department")

            .populate(

                "uploadedBy",

                "fullName"

            )

            .sort({

                createdAt: -1

            })

            .limit(5)

    ]);

    const [

        indexedDocuments,

        processingDocuments,

        failedDocuments

    ] = await Promise.all([

        Document.countDocuments({

            status: "Indexed"

        }),

        Document.countDocuments({

            status: "Processing"

        }),

        Document.countDocuments({

            status: "Failed"

        })

    ]);

    return {

        stats: {

            employees,

            departments,

            documents,

            conversations

        },

        recentEmployees,

        recentDocuments,

        pipeline: {

            indexedDocuments,

            processingDocuments,

            failedDocuments

        }

    };

};