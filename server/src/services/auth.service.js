import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const login = async (

    employeeId,

    password,

    role,

    department

) => {

    const user = await User

        .findOne({

            employeeId

        })

        .populate("department");

    if (!user) {

        throw new Error("Invalid Employee ID");

    }

    const valid = await bcrypt.compare(

        password,

        user.password

    );

    if (!valid) {

        throw new Error("Invalid Password");

    }

    if (user.role !== role) {

        throw new Error("Invalid Role");

    }



    if (user.department.code !== department.toUpperCase()) {

    throw new Error("Invalid Department");

}

    const token = generateToken(user);

    return {

        token,

        user

    };

};