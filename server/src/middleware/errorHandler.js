const errorHandler = (

    err,

    req,

    res,

    next

) => {

    const status =

        err.statusCode || 500;

    res.status(status).json({

        success: false,

        message: err.message,

        stack:

            process.env.NODE_ENV === "production"

                ? undefined

                : err.stack

    });

};

export default errorHandler;