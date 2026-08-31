import multer from "multer";
import path from "path";
import fs from "fs";

const ROOT_UPLOAD = path.join("src", "uploads");

const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        const departmentCode = req.user?.department?.code || "GENERAL";

        const uploadPath = path.join(

            ROOT_UPLOAD,

            departmentCode

        );

        if (!fs.existsSync(uploadPath)) {

            fs.mkdirSync(uploadPath, {

                recursive: true

            });

        }

        callback(

            null,

            uploadPath

        );

    },

    filename: (req, file, callback) => {

        const timestamp = Date.now();

        const safeName = file.originalname

            .replace(/\s+/g, "_")

            .replace(/[^\w.-]/g, "");

        callback(

            null,

            `${timestamp}_${safeName}`

        );

    }

});

const fileFilter = (

    req,

    file,

    callback

) => {

    const allowedTypes = [

        "application/pdf",

        "application/msword",

        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

    ];

    if (

        allowedTypes.includes(file.mimetype)

    ) {

        callback(

            null,

            true

        );

    } else {

        callback(

            new Error(

                "Only PDF, DOC and DOCX files are allowed."

            )

        );

    }

};

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize: 20 * 1024 * 1024

    }

});

export default upload;