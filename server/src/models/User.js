import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        fullName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: [
                "super_admin",
                "admin",
                "employee"
            ],
            default: "employee"
        },

        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            default: null
        },

        designation: {
            type: String,
            default: ""
        },

        isActive: {
            type: Boolean,
            default: true
        },

        lastLogin: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);