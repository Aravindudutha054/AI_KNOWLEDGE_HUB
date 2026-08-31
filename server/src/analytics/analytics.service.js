import analyticsRepository from "./analytics.repository.js";
import { ANALYTICS_EVENT_TYPES } from "./analytics.constants.js";

class AnalyticsService {

    /**
     * Log analytics event
     */
    async logEvent(event) {
        return analyticsRepository.logEvent(event);
    }

    /**
     * Employee Analytics Dashboard
     */
    async getEmployeeAnalytics(employeeId, departmentId) {

        const [

            stats,

            usageTrend,

            knowledgeCategories,

            topDocuments,

            searchInsights,

            activityTimeline

        ] = await Promise.all([

            this.getStats(employeeId),

            this.getUsageTrend(employeeId),

            this.getKnowledgeCategories(departmentId),

            this.getTopDocuments(employeeId),

            this.getSearchInsights(employeeId),

            this.getActivityTimeline(employeeId)

        ]);

        return {

            stats,

            usageTrend,

            knowledgeCategories,

            topDocuments,

            searchInsights,

            activityTimeline,

            aiPerformance: this.buildAIPerformance(stats),

            productivityInsights: this.buildProductivityInsights(stats)

        };

    }

    /**
     * Admin Analytics Dashboard
     */
    async getAdminAnalytics() {

        const [

            totalChats,

            totalSearches,

            departmentUsage,

            topEmployees

        ] = await Promise.all([

            analyticsRepository.getTotalAIChats(),

            analyticsRepository.getTotalSearches(),

            analyticsRepository.getDepartmentUsage(),

            analyticsRepository.getTopEmployees()

        ]);

        return {

            overview: {

                totalChats,

                totalSearches

            },

            departmentUsage,

            topEmployees

        };

    }

    /**
     * Dashboard Cards
     */
    async getStats(employeeId) {

        const [

            aiChats,

            searches,

            documentViews,

            downloads,

            logins

        ] = await Promise.all([

            analyticsRepository.countEvents({

                employee: employeeId,

                type: ANALYTICS_EVENT_TYPES.AI_CHAT

            }),

            analyticsRepository.countEvents({

                employee: employeeId,

                type: ANALYTICS_EVENT_TYPES.SEARCH

            }),

            analyticsRepository.countEvents({

                employee: employeeId,

                type: ANALYTICS_EVENT_TYPES.DOCUMENT_VIEW

            }),

            analyticsRepository.countEvents({

                employee: employeeId,

                type: ANALYTICS_EVENT_TYPES.DOCUMENT_DOWNLOAD

            }),

            analyticsRepository.countEvents({

                employee: employeeId,

                type: ANALYTICS_EVENT_TYPES.LOGIN

            })

        ]);

        const estimatedMinutesSaved = aiChats * 4;

        return {

            aiChats,

            searches,

            documentsViewed: documentViews,

            downloads,

            logins,

            timeSaved: Number(

                (estimatedMinutesSaved / 60).toFixed(1)

            )

        };

    }

    /**
     * AI Usage Chart
     */
    async getUsageTrend(employeeId) {

        const trend = await analyticsRepository.getDailyCounts(

            employeeId,

            ANALYTICS_EVENT_TYPES.AI_CHAT,

            7

        );

        return trend.map(item => ({

            day: item._id,

            chats: item.total

        }));

    }

    /**
     * Knowledge Categories
     */
    async getKnowledgeCategories(departmentId) {

        return analyticsRepository.getKnowledgeCategories(

            departmentId

        );

    }

    /**
     * Top Viewed Documents
     */
    async getTopDocuments(employeeId) {

        return analyticsRepository.getTopViewedDocuments(

            employeeId

        );

    }

    /**
     * Search Insights
     */
    async getSearchInsights(employeeId) {

        const searches = await analyticsRepository.getTopSearches(

            employeeId

        );

        return searches.map(item => ({

            query: item._id,

            count: item.count

        }));

    }

    /**
     * Recent Timeline
     */
    async getActivityTimeline(employeeId) {

        return analyticsRepository.getActivityTimeline(

            employeeId

        );

    }

    /**
     * AI Metrics
     */
    buildAIPerformance(stats) {

        return {

            totalChats: stats.aiChats,

            estimatedHoursSaved: stats.timeSaved,

            documentsRead: stats.documentsViewed,

            searchesPerformed: stats.searches,

            downloads: stats.downloads

        };

    }

    /**
     * Productivity Card
     */
    buildProductivityInsights(stats) {

        return [

            {

                title: "AI Conversations",

                value: stats.aiChats

            },

            {

                title: "Searches",

                value: stats.searches

            },

            {

                title: "Documents Viewed",

                value: stats.documentsViewed

            },

            {

                title: "Downloads",

                value: stats.downloads

            },

            {

                title: "Estimated Hours Saved",

                value: stats.timeSaved

            }

        ];

    }

}

export default new AnalyticsService();