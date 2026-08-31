import Employee from "../models/Employee.js";
import Document from "../models/Document.js";

export const getDashboardStats = async (departmentId) => {

    const [

        employeeCount,

        documents,

        indexed,

        processing,

        failed

    ] = await Promise.all([

        Employee.countDocuments({

            department: departmentId

        }),

        Document.find({

            department: departmentId

        }),

        Document.countDocuments({

            department: departmentId,

            status: "Indexed"

        }),

        Document.countDocuments({

            department: departmentId,

            status: "Processing"

        }),

        Document.countDocuments({

            department: departmentId,

            status: "Failed"

        })

    ]);

    const totalDocuments = documents.length;

    const storage = documents.reduce(

        (total, document) =>

            total + (document.fileSize || 0),

        0

    );

    const pdf = documents.filter(

        document =>

            document.mimeType === "application/pdf"

    ).length;

    const docx = documents.filter(

        document =>

            document.mimeType?.includes("word")

    ).length;

    const txt = documents.filter(

        document =>

            document.mimeType === "text/plain"

    ).length;

    return {

        employeeCount,

        totalDocuments,

        indexed,

        processing,

        failed,

        storage,

        pdf,

        docx,

        txt

    };

};