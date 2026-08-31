import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(

    {

        user: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true,

            unique: true

        },

        employeeId: {

            type: String,

            required: true,

            unique: true,

            trim: true

        },

        department: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Department",

            required: true

        },

        designation: {

            type: String,

            required: true,

            trim: true

        },

        phone: {

            type: String,

            default: ""

        },

        profileImage: {

            type: String,

            default: ""

        },

        manager: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Employee",

            default: null

        },

        joiningDate: {

            type: Date,

            required: true

        },

        employmentType: {

            type: String,

            enum: [

                "Full Time",

                "Part Time",

                "Intern",

                "Contract"

            ],

            default: "Full Time"

        },

        status: {

            type: String,

            enum: [

                "Active",

                "Inactive"

            ],

            default: "Active"

        }

    },

    {

        timestamps: true

    }

);

employeeSchema.index({

    employeeId: 1

});

employeeSchema.index({

    department: 1

});

employeeSchema.index({

    status: 1

});

export default mongoose.model(

    "Employee",

    employeeSchema

);