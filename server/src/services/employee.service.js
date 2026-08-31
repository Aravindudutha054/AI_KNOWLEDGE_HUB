import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { logActivity } from "./activityLogger.service.js";

export const getEmployees = async (departmentId) => {

    return await Employee.find({

        department: departmentId

    })

        .populate("user", "-password")

        .populate("department")

        .populate("manager");

};

export const getEmployeesPaginated = async (

    departmentId,

    page = 1,

    limit = 10,

    search = ""

) => {

    const filter = {

        department: departmentId

    };

    if (search) {

        filter.$or = [

            {

                employeeId: {

                    $regex: search,

                    $options: "i"

                }

            },

            {

                designation: {

                    $regex: search,

                    $options: "i"

                }

            }

        ];

    }

    const skip = (page - 1) * limit;

    const [

        employees,

        total

    ] = await Promise.all([

        Employee.find(filter)

            .populate("user", "-password")

            .populate("department")

            .populate("manager")

            .sort({

                createdAt: -1

            })

            .skip(skip)

            .limit(limit),

        Employee.countDocuments(filter)

    ]);

    return {

        employees,

        total,

        page,

        totalPages: Math.ceil(total / limit)

    };

};

export const getEmployeeById = async (

    id,

    departmentId

) => {

    return await Employee.findOne({

        _id: id,

        department: departmentId

    })

        .populate("user", "-password")

        .populate("department")

        .populate("manager");

};

export const createEmployee = async (

    data,

    currentUser

) => {

    const existing = await User.findOne({

        employeeId: data.employeeId

    });

    if (existing) {

        throw new Error("Employee ID already exists");

    }

    const password = await bcrypt.hash(

        "Employee@123",

        10

    );

    const user = await User.create({

        employeeId: data.employeeId,

        fullName: data.name,

        email: data.email,

        password,

        role: (data.role || "employee").toLowerCase(),

        department: data.department,

        isActive: data.status === "Active"

    });

    const employee = await Employee.create({

        user: user._id,

        employeeId: data.employeeId,

        department: data.department,

        designation: data.designation || "Employee",

        joiningDate: new Date(),

        employmentType: "Full Time",

        status: data.status

    });

    const result = await Employee.findById(employee._id)

        .populate("user", "-password")

        .populate("department")

        .populate("manager");

    await logActivity({

        module: "Employees",

        action: "Create",

        target: result.user.fullName,

        details: `Employee "${result.user.fullName}" created`,

        performedBy: currentUser._id,

        department: currentUser.department._id,

        status: "Success"

    });

    return result;

};export const updateEmployee = async (

    id,

    departmentId,

    data,

    currentUser

) => {

    const employee = await Employee.findOneAndUpdate(

        {

            _id: id,

            department: departmentId

        },

        data,

        {

            new: true,

            runValidators: true

        }

    )

        .populate("user", "-password")

        .populate("department")

        .populate("manager");

    if (!employee) {

        return null;

    }

    await logActivity({

        module: "Employees",

        action: "Update",

        target: employee.user.fullName,

        details: `Employee "${employee.user.fullName}" updated`,

        performedBy: currentUser._id,

        department: currentUser.department._id,

        status: "Success"

    });

    return employee;

};

export const deleteEmployee = async (

    id,

    departmentId,

    currentUser

) => {

    const employee = await Employee.findOne({

        _id: id,

        department: departmentId

    }).populate("user", "-password");

    if (!employee) {

        return null;

    }

    await Employee.findByIdAndDelete(employee._id);

    await User.findByIdAndDelete(employee.user._id);

    await logActivity({

        module: "Employees",

        action: "Delete",

        target: employee.user.fullName,

        details: `Employee "${employee.user.fullName}" deleted`,

        performedBy: currentUser._id,

        department: currentUser.department._id,

        status: "Success"

    });

    return employee;

};