import Department from "../src/models/Department.js";
import { departments } from "./seedData.js";

export async function seedDepartments() {
    console.log("\n🌱 Seeding Departments...\n");

    const departmentMap = {};

    for (const department of departments) {

        let existingDepartment = await Department.findOne({
            code: department.code
        });

        if (!existingDepartment) {

            existingDepartment = await Department.create({
                name: department.name,
                code: department.code,
                description: department.description,
                status: "Active"
            });

            console.log(`✅ Created Department : ${department.name}`);

        } else {

            console.log(`ℹ️  Department Already Exists : ${department.name}`);

        }

        departmentMap[department.code] = existingDepartment;
    }

    console.log("\n✅ Department seeding completed.\n");

    return departmentMap;
}