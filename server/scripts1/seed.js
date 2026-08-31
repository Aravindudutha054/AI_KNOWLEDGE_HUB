import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "../src/config/mongodb.js";

import User from "../src/models/User.js";
import Employee from "../src/models/Employee.js";
import Department from "../src/models/Department.js";

dotenv.config();

await connectDB();

try {

    await Employee.deleteMany();

    await User.deleteMany();

    let department = await Department.findOne({

        code: "IT"

    });

    if (!department) {

        department = await Department.create({

            name: "Information Technology",

            code: "IT",

            description: "IT Department"

        });

    }

    /* ======================================================
       Passwords
    ====================================================== */

    const adminPassword = await bcrypt.hash(

        "Admin@123",

        10

    );

    const employeePassword = await bcrypt.hash(

        "Employee@123",

        10

    );

    /* ======================================================
       IT ADMIN
    ====================================================== */

    const adminUser = await User.create({

        employeeId: "ITA001",

        fullName: "IT Admin",

        email: "itadmin@company.com",

        password: adminPassword,

        role: "admin",

        department: department._id,

        isActive: true

    });

    await Employee.create({

        user: adminUser._id,

        employeeId: "ITA001",

        department: department._id,

        designation: "Department Administrator",

        joiningDate: new Date(),

        employmentType: "Full Time",

        status: "Active"

    });

    /* ======================================================
       IT EMPLOYEE
    ====================================================== */

    const employeeUser = await User.create({

        employeeId: "ITE001",

        fullName: "IT Employee",

        email: "itemployee@company.com",

        password: employeePassword,

        role: "employee",

        department: department._id,

        isActive: true

    });

    await Employee.create({

        user: employeeUser._id,

        employeeId: "ITE001",

        department: department._id,

        designation: "Software Engineer",

        joiningDate: new Date(),

        employmentType: "Full Time",

        status: "Active"

    });

    console.log("\n================================");
    console.log("Department Seed Completed");
    console.log("================================");

    console.log("\nADMIN LOGIN");
    console.log("----------------------------");
    console.log("Employee ID : ITA001");
    console.log("Password    : Admin@123");

    console.log("\nEMPLOYEE LOGIN");
    console.log("----------------------------");
    console.log("Employee ID : ITE001");
    console.log("Password    : Employee@123");

    console.log("\nDepartment  : Information Technology");
    console.log("================================\n");

}
catch (error) {

    console.error(error);

}

mongoose.connection.close();