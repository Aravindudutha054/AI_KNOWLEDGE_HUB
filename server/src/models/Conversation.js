import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(

    {

        employee: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        department: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Department",

            required: true

        },

        title: {

            type: String,

            default: "New Chat"

        },

        lastMessageAt: {

            type: Date,

            default: Date.now

        }

    },

    {

        timestamps: true

    }

);

conversationSchema.index({

    employee: 1,

    lastMessageAt: -1

});

export default mongoose.model(

    "Conversation",

    conversationSchema

);
