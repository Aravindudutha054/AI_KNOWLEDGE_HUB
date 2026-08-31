import { useEffect, useState } from "react";

import { X } from "lucide-react";

import styles from "./EmployeeModal.module.css";

const user = JSON.parse(

    localStorage.getItem("user") || "{}"

);

const emptyEmployee = {

    employeeId: "",

    name: "",

    email: "",

    department: user.department?._id || "",

    role: "employee",

    designation: "Software Engineer",

    status: "Active"

};

export default function EmployeeModal({

    employee,

    onSave,

    onClose

}) {

    const [form, setForm] = useState(emptyEmployee);

    useEffect(() => {

        if (employee) {

            setForm({

                employeeId: employee.employeeId || "",

                name:

                    employee.user?.fullName ||

                    employee.name ||

                    "",

                email:

                    employee.user?.email ||

                    employee.email ||

                    "",

                department:

                    employee.department?._id ||

                    employee.department ||

                    "",

                role:

                    employee.user?.role ||

                    employee.role ||

                    "employee",

                designation:

                    employee.designation ||

                    "Software Engineer",

                status:

                    employee.status ||

                    "Active"

            });

        } else {

            setForm(emptyEmployee);

        }

    }, [employee]);

    const handleChange = (event) => {

        const {

            name,

            value

        } = event.target;

        setForm(previous => ({

            ...previous,

            [name]: value

        }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        onSave?.(form);

    };

    return (

        <div className={styles.overlay}>

            <div className={styles.modal}>

                <div className={styles.header}>

                    <h2>

                        {

                            employee

                                ? "Edit Employee"

                                : "Add Employee"

                        }

                    </h2>

                    <button onClick={onClose}>

                        <X size={20} />

                    </button>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className={styles.form}

                >

                    <input

                        name="employeeId"

                        placeholder="Employee ID"

                        value={form.employeeId}

                        onChange={handleChange}

                    />

                    <input

                        name="name"

                        placeholder="Employee Name"

                        value={form.name}

                        onChange={handleChange}

                    />

                    <input

                        name="email"

                        placeholder="Email"

                        value={form.email}

                        onChange={handleChange}

                    />

                    <input

    name="designation"

    placeholder="Designation"

    value={form.designation}

    onChange={handleChange}

/>

                    <input

                        name="department"

                        value={form.department}

                        readOnly

                    />

                    <select

                        name="role"

                        value={form.role}

                        onChange={handleChange}

                    >

                        <option value="employee">

                            Employee

                        </option>

                        <option value="admin">

                            Admin

                        </option>

                    </select>

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                    >

                        <option>

                            Active

                        </option>

                        <option>

                            Inactive

                        </option>

                    </select>

                    <div className={styles.footer}>

                        <button

                            type="button"

                            className={styles.cancel}

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className={styles.save}

                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}