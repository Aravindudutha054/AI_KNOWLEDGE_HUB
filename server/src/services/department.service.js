import Employee from "../models/Employee.js";
import Document from "../models/Document.js";
import Conversation from "../models/Conversation.js";
import Department from "../models/Department.js";

export const getDepartments = async () => {

    return await Department

        .find()

        .populate(

            "admin",

            "fullName email"

        );

};

export const getDepartmentById = async (id) => {

    return await Department

        .findById(id)

        .populate(

            "admin",

            "fullName email"

        );

};

export const createDepartment = async (data) => {

    return await Department.create(data);

};

export const updateDepartment = async (

    id,

    data

) => {

    return await Department.findByIdAndUpdate(

        id,

        data,

        {

            new: true,

            runValidators: true

        }

    );

};

export const deleteDepartment = async (id) => {

    return await Department.findByIdAndDelete(id);

};

export const getDepartmentDashboard = async () => {

    const departments = await Department.find().sort({

        name: 1

    });

    const result = await Promise.all(

        departments.map(async department => {

            const [

                employeeCount,

                documentCount,

                conversationCount

            ] = await Promise.all([

                Employee.countDocuments({

                    department: department._id

                }),

                Document.countDocuments({

                    department: department._id

                }),

                Conversation.countDocuments({

                    department: department._id

                })

            ]);

            return {

                _id: department._id,

                name: department.name,

                code: department.code,

                description: department.description,

                employeeCount,

                documentCount,

                conversationCount,

                createdAt: department.createdAt

            };

        })

    );

    return result;

};