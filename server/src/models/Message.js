import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(

    {

        conversation: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Conversation",

            required: true

        },

        role: {

            type: String,

            enum: [

                "user",

                "assistant"

            ],

            required: true

        },

        content: {

            type: String,

            required: true

        },

        sources: [

            {

                document: String,

                page: Number,

                score: Number

            }

        ],

        responseTime: {

            type: Number,

            default: 0

        }

    },

    {

        timestamps: true

    }

);

messageSchema.index({

    conversation: 1,

    createdAt: 1

});

export default mongoose.model(

    "Message",

    messageSchema

);
