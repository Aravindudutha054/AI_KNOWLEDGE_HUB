import mongoose from "mongoose";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";

const analyticsEventSchema = new mongoose.Schema(
    {
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
            index: true,
        },

        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true,
            index: true,
        },

        type: {
    type: String,
    required: true,
    enum: Object.values(ANALYTICS_EVENT_TYPES),
    index: true,
},

        resourceId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },

        resourceType: {
            type: String,
            default: null,
        },

        metadata: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

analyticsEventSchema.index({
    employee: 1,
    type: 1,
    createdAt: -1,
});

analyticsEventSchema.index({
    department: 1,
    createdAt: -1,
});

export default mongoose.model(
    "AnalyticsEvent",
    analyticsEventSchema
);