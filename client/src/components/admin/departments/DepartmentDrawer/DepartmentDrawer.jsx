import { X } from "lucide-react";

import styles from "./DepartmentDrawer.module.css";

export default function DepartmentDrawer({ open, department, onClose }) {
    if (!open || !department) {
        return null;
    }

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <aside className={styles.drawer}>
                <button className={styles.close} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.header}>
                    <h2>{department.name}</h2>
                    <span className={styles.code}>{department.code}</span>
                </div>

                <p className={styles.description}>{department.description || "No description available."}</p>

                <div className={styles.stats}>
                    <div>
                        <strong>{department.employeeCount ?? 0}</strong>
                        <span>Employees</span>
                    </div>
                    <div>
                        <strong>{department.documentCount ?? 0}</strong>
                        <span>Documents</span>
                    </div>
                    <div>
                        <strong>{department.conversationCount ?? 0}</strong>
                        <span>Conversations</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
