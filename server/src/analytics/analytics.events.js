import analyticsRepository from "./analytics.repository.js";

class AnalyticsEvents {
    async log({
        employee,
        department,
        type,
        resourceId = null,
        resourceType = null,
        metadata = {},
    }) {
        return analyticsRepository.logEvent({
            employee,
            department,
            type,
            resourceId,
            resourceType,
            metadata,
        });
    }
}

export default new AnalyticsEvents();