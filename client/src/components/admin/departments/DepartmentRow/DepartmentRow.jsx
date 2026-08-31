import {

    Building2,

    Pencil,

    Trash2

} from "lucide-react";

import styles from "./DepartmentRow.module.css";

export default function DepartmentRow({

    department,

    onEdit,

    onDelete

}) {

    return (

        <tr>

            {/* Department */}

            <td>

                <div className={styles.department}>

                    <div className={styles.icon}>

                        <Building2 size={18} />

                    </div>

                    <span>

                        {department.name}

                    </span>

                </div>

            </td>

            {/* Description */}

            <td>

                {department.description}

            </td>

            {/* Employees */}

            <td>

                {department.employeeCount}

            </td>

            {/* Documents */}

            <td>

                {department.documentCount}

            </td>

            {/* Status */}

            <td>

                <span

                    className={`${styles.status} ${
                        department.status === "Active"
                            ? styles.active
                            : styles.inactive
                    }`}

                >

                    {department.status}

                </span>

            </td>

            {/* Actions */}

            <td>

                <div className={styles.actions}>

                    <button

                        onClick={() =>

                            onEdit?.(department)

                        }

                    >

                        <Pencil size={16} />

                    </button>

                    <button

                        className={styles.delete}

                        onClick={() =>

                            onDelete?.(department)

                        }

                    >

                        <Trash2 size={16} />

                    </button>

                </div>

            </td>

        </tr>

    );

}