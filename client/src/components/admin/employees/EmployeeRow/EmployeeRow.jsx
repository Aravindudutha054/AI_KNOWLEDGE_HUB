import {

    Pencil,

    Trash2

} from "lucide-react";

import styles from "./EmployeeRow.module.css";

export default function EmployeeRow({

    employee,

    onEdit,

    onView,

    onDelete

}) {

    const displayName = employee.user?.fullName || employee.employeeId || "Unknown";

    const displayEmail = employee.user?.email || "—";

    const displayDepartment = employee.department?.name || "—";

    const displayRole = employee.user?.role || "—";

    return (

        <tr onClick={() => onView?.(employee)}>

            {/* Employee ID */}

            <td>

                {employee.employeeId}

            </td>

            {/* Name */}

            <td>

                <div className={styles.user}>

                    <div className={styles.avatar}>

                        {displayName.charAt(0)}

                    </div>

                    <span>

                        {displayName}

                    </span>

                </div>

            </td>

            {/* Email */}

            <td>

                {displayEmail}

            </td>

            {/* Department */}

            <td>

                {displayDepartment}

            </td>

            {/* Role */}

            <td>

                <span className={styles.role}>

                    {displayRole}

                </span>

            </td>

            {/* Status */}

            <td>

                <span

                    className={`${styles.status} ${
                        employee.status === "Active"

                            ? styles.active

                            : styles.inactive
                    }`}

                >

                    {employee.status}

                </span>

            </td>

            {/* Actions */}

            <td>

                <div className={styles.actions}>

                    <button

                        onClick={(event) => {

                            event.stopPropagation();

                            onEdit?.(employee);

                        }}

                    >

                        <Pencil size={16} />

                    </button>

                    <button

                        className={styles.delete}

                        onClick={(event) => {

                            event.stopPropagation();

                            onDelete?.(employee);

                        }}

                    >

                        <Trash2 size={16} />

                    </button>

                </div>

            </td>

        </tr>

    );

}