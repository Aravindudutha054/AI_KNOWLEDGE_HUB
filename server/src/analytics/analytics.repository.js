import mongoose from "mongoose";
import AnalyticsEvent from "../models/AnalyticsEvent.js";

class AnalyticsRepository {

    /**
     * Create analytics event
     */
    async logEvent(event) {

        return AnalyticsEvent.create(event);

    }

    /**
     * Count events
     */
    async countEvents(filter = {}) {

        return AnalyticsEvent.countDocuments(filter);

    }

    /**
     * Recent events
     */
    async findEvents(filter = {}, options = {}) {

        return AnalyticsEvent.find(filter)

            .sort(options.sort || { createdAt: -1 })

            .limit(options.limit || 0)

            .populate(options.populate || [])

            .lean();

    }

    /**
     * Generic aggregation
     */
    async aggregate(pipeline) {

        return AnalyticsEvent.aggregate(pipeline);

    }

    /**
     * Total employees
     */
    async getTotalEmployees(EmployeeModel) {

        return EmployeeModel.countDocuments();

    }

    /**
     * Total documents
     */
    async getTotalDocuments(DocumentModel) {

        return DocumentModel.countDocuments();

    }

    /**
     * Total AI chats
     */
    async getTotalAIChats() {

        return AnalyticsEvent.countDocuments({

            type: "AI_CHAT"

        });

    }

    /**
     * Total searches
     */
    async getTotalSearches() {

        return AnalyticsEvent.countDocuments({

            type: "SEARCH"

        });

    }

    /**
     * Department usage
     */
    async getDepartmentUsage() {

        return AnalyticsEvent.aggregate([

            {

                $group: {

                    _id: "$department",

                    events: {

                        $sum: 1

                    }

                }

            },

            {

                $lookup: {

                    from: "departments",

                    localField: "_id",

                    foreignField: "_id",

                    as: "department"

                }

            },

            {

                $unwind: "$department"

            },

            {

                $project: {

                    _id: 0,

                    department: "$department.name",

                    events: 1

                }

            },

            {

                $sort: {

                    events: -1

                }

            }

        ]);

    }

    /**
     * Most active employees
     */
    async getTopEmployees(limit = 10) {

        return AnalyticsEvent.aggregate([

            {

                $group: {

                    _id: "$employee",

                    events: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    events: -1

                }

            },

            {

                $limit: limit

            },

            {

                $lookup: {

                    from: "employees",

                    localField: "_id",

                    foreignField: "_id",

                    as: "employee"

                }

            },

            {

                $unwind: "$employee"

            },

            {

                $project: {

                    _id: 0,

                    employee: "$employee.fullName",

                    events: 1

                }

            }

        ]);

    }

    /**
     * Daily event counts
     */
    async getDailyCounts(employeeId, type, days = 7) {

        const startDate = new Date();

        startDate.setDate(startDate.getDate() - days);

        return AnalyticsEvent.aggregate([

            {
                $match: {
                    employee: new mongoose.Types.ObjectId(employeeId),
                    type,
                    createdAt: {
                        $gte: startDate
                    }
                }
            },

            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$createdAt"
                        }
                    },
                    total: {
                        $sum: 1
                    }
                }
            },

            {
                $sort: {
                    "_id": 1
                }
            }

        ]);

    }

    /**
     * Top searched keywords
     */
    async getTopSearches(employeeId, limit = 5) {

        return AnalyticsEvent.aggregate([

            {
                $match: {
                    employee: new mongoose.Types.ObjectId(employeeId),
                    type: "SEARCH"
                }
            },

            {
                $group: {
                    _id: "$metadata.query",
                    count: {
                        $sum: 1
                    }
                }
            },

            {
                $sort: {
                    count: -1
                }
            },

            {
                $limit: limit
            }

        ]);

    }

    /**
     * Top viewed documents
     */
    async getTopViewedDocuments(employeeId, limit = 5) {

        return AnalyticsEvent.aggregate([

            {
                $match: {
                    employee: new mongoose.Types.ObjectId(employeeId),
                    type: "DOCUMENT_VIEW"
                }
            },

            {
                $group: {
                    _id: "$resourceId",
                    views: {
                        $sum: 1
                    }
                }
            },

            {
                $sort: {
                    views: -1
                }
            },

            {
                $limit: limit
            },

            {
                $lookup: {
                    from: "documents",
                    localField: "_id",
                    foreignField: "_id",
                    as: "document"
                }
            },

            {
                $unwind: "$document"
            },

            {
                $project: {

                    _id: "$document._id",

                    title: "$document.name",

                    views: 1,

                    downloads: {

                        $literal: 0

                    }

                }
            }

        ]);

    }

    /**
     * Department category usage
     */
    async getKnowledgeCategories(departmentId) {

        return AnalyticsEvent.aggregate([

            {
                $match: {
                    department: new mongoose.Types.ObjectId(departmentId),
                    type: "DOCUMENT_VIEW"
                }
            },

            {
                $lookup: {
                    from: "documents",
                    localField: "resourceId",
                    foreignField: "_id",
                    as: "document"
                }
            },

            {
                $unwind: "$document"
            },

            {
                $group: {

                    _id: "$document.category",

                    value: {
                        $sum: 1
                    }

                }
            },

            {
                $project: {

                    _id: 0,

                    name: "$_id",

                    value: 1

                }
            },

            {
                $sort: {
                    value: -1
                }
            }

        ]);

    }

    /**
     * Timeline
     */
    async getActivityTimeline(employeeId, limit = 10) {

        const events = await AnalyticsEvent.find({

            employee: employeeId

        })

        .sort({

            createdAt: -1

        })

        .limit(limit)

        .lean();

        return events.map(event => ({

            _id: event._id,

            type: event.type.toLowerCase(),

            title: event.type.replaceAll("_", " "),

            time: new Date(event.createdAt).toLocaleString()

        }));

    }

}

export default new AnalyticsRepository();