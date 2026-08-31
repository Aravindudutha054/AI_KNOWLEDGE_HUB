const authorize = (...roles) => {

    return (

        req,

        res,

        next

    ) => {

        console.log("Allowed Roles:", roles);
        console.log("User Role:", req.user?.role);

        if (

            !roles.includes(req.user.role)

        ) {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }

        next();

    };

};

export default authorize;