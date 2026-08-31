export function validateAnalyticsEvent(req, res, next) {

    const {

        type

    } = req.body;

    if (!type) {

        return res.status(400).json({

            success: false,

            message: "Event type is required."

        });

    }

    next();

}