import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();

import app from "./app.js";

import connectDB from "./config/mongodb.js";

app.use(
    "/uploads",
    express.static(
        path.join(process.cwd(), "src", "uploads")
    )
);

/* =========================================
   Database
========================================= */

await connectDB();

/* =========================================
   Server
========================================= */

const PORT = process.env.PORT || 5000;

app.listen(

    PORT,

    () => {

        console.log(

            `Server running on port ${PORT}`

        );

    }

);