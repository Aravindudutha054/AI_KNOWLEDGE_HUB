import Document from "../models/Document.js";
import Conversation from "../models/Conversation.js";
import ActivityLog from "../models/ActivityLog.js";

export const getEmployeeDashboard = async (user) => {

    const departmentId = user.department;

    const [
        documents,
        indexedDocuments,
        conversations,
        recentDocuments,
        recentChats,
        recentActivities
    ] = await Promise.all([

        Document.countDocuments({
            department: departmentId
        }),

        Document.countDocuments({
            department: departmentId,
            status: "Indexed"
        }),

        Conversation.countDocuments({
            createdBy: user._id
        }),

        Document.find({
            department: departmentId
        })
            .populate("uploadedBy", "fullName")
            .populate("department", "name")
            .sort({
                createdAt: -1
            })
            .limit(5),

        Conversation.find({
            createdBy: user._id
        })
            .sort({
                updatedAt: -1
            })
            .limit(5),

        ActivityLog.find({
            department: departmentId
        })
            .populate("performedBy", "fullName")
            .sort({
                createdAt: -1
            })
            .limit(5)
    ]);

    return {

        stats: [

            {
                id: 1,
                title: "Documents",
                value: documents,
                change: `${documents} Available`
            },

            {
                id: 2,
                title: "AI Chats",
                value: conversations,
                change: `${conversations} Conversations`
            },

            {
                id: 3,
                title: "Knowledge Base",
                value: indexedDocuments,
                change: `${indexedDocuments} Indexed`
            },

            {
                id: 4,
                title: "Department Files",
                value: documents,
                change: "Current Department"
            }

        ],

        recentDocuments: recentDocuments.map(doc => ({
            id: doc._id,
            name: doc.originalName || doc.name,
            department: doc.department?.name,
            updated: new Date(doc.updatedAt).toLocaleDateString()
        })),

        recentChats: recentChats.map(chat => ({
            id: chat._id,
            title: chat.title || "New Conversation",
            department: user.department?.name || "",
            time: new Date(chat.updatedAt).toLocaleDateString()
        })),

        activities: recentActivities.map(activity => ({
            id: activity._id,
            type: activity.action.toLowerCase(),
            title: activity.details,
            department: user.department?.name || "",
            status: activity.status,
            time: new Date(activity.createdAt).toLocaleDateString()
        })),

        announcements: []
    };
};