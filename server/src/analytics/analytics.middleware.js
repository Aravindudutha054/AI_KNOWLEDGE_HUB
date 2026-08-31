import analyticsEvents from "./analytics.events.js";

export const trackEvent = (type, metadataBuilder = null) => {

    return async (req, res, next) => {

        const originalJson = res.json.bind(res);

        res.json = async (body) => {

            try {

                if (res.statusCode < 400 && req.user) {

                    let metadata = {};

                    if (typeof metadataBuilder === "function") {

                        metadata = metadataBuilder(req, body);

                    }

                    if (metadata === null || metadata === false) {

                        return originalJson(body);

                    }

                    await analyticsEvents.log({

                        employee: req.user._id,

                        department: req.user.department,

                        type,

                        resourceId: metadata.resourceId,

                        resourceType: metadata.resourceType,

                        metadata

                    });

                }

            } catch (err) {

                console.error("Analytics logging failed:", err);

            }

            return originalJson(body);

        };

        next();

    };

};
