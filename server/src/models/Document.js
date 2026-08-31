import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(

    {

        name: {

            type: String,

            required: true,

            trim: true

        },

        originalName: {

            type: String,

            required: true

        },

        department: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Department",

            required: true

        },

        uploadedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        fileName: {

            type: String,

            required: true

        },
        storageProvider: {

            type: String,

            enum: [

                "local",

                "b2"

            ],

            default: "local"

        },

        storageKey: {

            type: String,

            default: ""

        },
        filePath: {

            type: String,

            required: true

        },

        storageProvider: {

            type: String,

            enum: [

                "local",

                "b2"

            ],

            default: "local"

        },

        storageKey: {

            type: String,

            default: ""

        },

        mimeType: {

            type: String,

            required: true

        },

        fileSize: {

            type: Number,

            required: true

        },

        status: {

            type: String,

            enum: [

                "Uploaded",

                "Processing",

                "Indexed",

                "Failed"

            ],

            default: "Uploaded"

        },

        processing: {

            textExtracted: {

                type: Boolean,

                default: false

            },

            chunked: {

                type: Boolean,

                default: false

            },

            embedded: {

                type: Boolean,

                default: false

            },

            indexed: {

                type: Boolean,

                default: false

            }

        },

        chunkCount: {

            type: Number,

            default: 0

        },

        vectorCollection: {

            type: String,

            default: ""

        },

        lastIndexedAt: {

            type: Date,

            default: null

        }

    },

    {

        timestamps: true

    }

);

documentSchema.index({

    department: 1

});

documentSchema.index({

    uploadedBy: 1

});

documentSchema.index({

    status: 1

});

export default mongoose.model(

    "Document",

    documentSchema

);