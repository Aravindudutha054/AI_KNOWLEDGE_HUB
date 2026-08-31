import dotenv from "dotenv";
import mongoose from "mongoose";

import { seedDepartments } from "./departments.seed.js";
import { seedUsers } from "./users.seed.js";

dotenv.config();

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.error("❌ MongoDB Connection Failed");
        console.error(error);

        process.exit(1);
    }
};

const seedDatabase = async () => {

    try {

        console.log("\n====================================");
        console.log(" Enterprise AI Knowledge Hub Seeder ");
        console.log("====================================\n");

        await connectDB();

        const departmentMap = await seedDepartments();

        await seedUsers(departmentMap);

        console.log("\n====================================");
        console.log("✅ Database Seeded Successfully");
        console.log("====================================");

        console.log(`
Departments  : 8
Super Admin  : 1
Admins       : 8
Employees    : 8
Total Users  : 17
        `);

        await mongoose.connection.close();

        console.log("🔌 MongoDB Connection Closed");

        process.exit(0);

    } catch (error) {

        console.error("\n❌ Seeding Failed\n");

        console.error(error);

        await mongoose.connection.close();

        process.exit(1);
    }
};

seedDatabase();