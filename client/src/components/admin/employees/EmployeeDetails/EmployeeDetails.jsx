import {
    X,
    Mail,
    User,
    Building2,
    Shield,
    CircleCheck
} from "lucide-react";

import styles from "./EmployeeDetails.module.css";

export default function EmployeeDetails({
    employee,
    open,
    onClose,
    onEdit,
    onDelete
}) {
    if (!open || !employee) {
        return null;
    }

    return (
        <>
            <div
                className={styles.overlay}
                onClick={onClose}
            />

            <aside className={styles.drawer}>
                <button
                    className={styles.close}
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <div className={styles.avatar}>
                    {
                        employee.user?.fullName?.charAt(0) ||
                        employee.fullName?.charAt(0) ||
                        "E"
                    }
                </div>

                <h2>
                    {
                        employee.user?.fullName ||
                        employee.fullName
                    }
                </h2>

                <div className={styles.info}>
                    <div>
                        <User size={18}/>
                        <span>
                            {employee.employeeId}
                        </span>
                    </div>

                    <div>
                        <Mail size={18}/>
                        <span>
                            {employee.user?.email}
                        </span>
                    </div>

                    <div>
                        <Building2 size={18}/>
                        <span>
                            {employee.department?.name}
                        </span>
                    </div>

                    <div>
                        <Shield size={18}/>
                        <span>
                            {employee.user?.role}
                        </span>
                    </div>

                    <div>
                        <CircleCheck size={18}/>
                        <span>
                            {employee.status}
                        </span>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button
                        onClick={() => onEdit(employee)}
                    >
                        Edit Employee
                    </button>

                    <button
                        className={styles.delete}
                        onClick={() => onDelete(employee)}
                    >
                        Delete Employee
                    </button>
                </div>
            </aside>
        </>
    );
}
