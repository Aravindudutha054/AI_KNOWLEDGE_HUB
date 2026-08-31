import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(

    {

        module: {

            type: String,

            required: true

        },

        action: {

            type: String,

            required: true

        },

        target: {

            type: String,

            default: ""

        },

        details: {

            type: String,

            default: ""

        },

        status: {

            type: String,

            enum: [

                "Success",

                "Failed"

            ],

            default: "Success"

        },

        performedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        department: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Department",

            required: true

        }

    },

    {

        timestamps: true

    }

);

activityLogSchema.index({

    department: 1,

    createdAt: -1

});

export default mongoose.model(

    "ActivityLog",

    activityLogSchema

);