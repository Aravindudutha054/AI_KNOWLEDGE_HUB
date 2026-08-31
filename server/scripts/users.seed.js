import bcrypt from "bcryptjs";

import User from "../src/models/User.js";
import Employee from "../src/models/Employee.js";
import Department from "../src/models/Department.js";

import { users } from "./seedData.js";

export async function seedUsers(departmentMap) {

    console.log("\n🌱 Seeding Users...\n");

    for (const userData of users) {

        const existingUser = await User.findOne({
            employeeId: userData.employeeId
        });

        if (existingUser) {
            console.log(`ℹ️  User Already Exists : ${userData.employeeId}`);
            continue;
        }

        let department = null;

        if (userData.department) {

            const departmentCode = (() => {
                switch (userData.department) {
                    case "Finance":
                        return "FIN";
                    case "Marketing":
                        return "MKT";
                    case "Operations":
                        return "OPS";
                    case "Legal":
                        return "LEG";
                    case "Compliance":
                        return "CMP";
                    case "Support":
                        return "SUP";
                    default:
                        return userData.department.toUpperCase();
                }
            })();

            department = departmentMap[departmentCode]?._id || null;
        }

        const hashedPassword = await bcrypt.hash(
            userData.password,
            10
        );

        const user = await User.create({

            employeeId: userData.employeeId,

            fullName: userData.fullName,

            email: userData.email,

            password: hashedPassword,

            role: userData.role,

            department,

            designation: userData.designation,

            isActive: true

        });

        console.log(`✅ User Created : ${user.employeeId}`);

        if (user.role !== "super_admin") {

            const employee = await Employee.create({

                user: user._id,

                employeeId: user.employeeId,

                department,

                designation: user.designation,

                joiningDate: new Date(),

                employmentType: "Full Time",

                status: "Active"

            });

            console.log(`   ↳ Employee Created : ${employee.employeeId}`);

            if (user.role === "admin") {

                await Department.findByIdAndUpdate(
                    department,
                    {
                        admin: user._id
                    }
                );

                console.log(
                    `   ↳ Assigned as Department Admin`
                );
            }
        }
    }

    console.log("\n✅ User seeding completed.\n");
}