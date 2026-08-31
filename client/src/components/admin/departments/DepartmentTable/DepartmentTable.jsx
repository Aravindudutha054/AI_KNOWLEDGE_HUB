import DepartmentRow from "../DepartmentRow";
import EmptyDepartments from "../EmptyDepartments";

import styles from "./DepartmentTable.module.css";

export default function DepartmentTable({

    departments = [],

    loading = false,

    onEdit,

    onDelete

}) {

    if (loading) {

        return (

            <div className={styles.wrapper}>

                {

                    Array.from({ length: 5 }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        />

                    ))

                }

            </div>

        );

    }

    if (departments.length === 0) {

        return <EmptyDepartments />;

    }

    return (

        <div className={styles.wrapper}>

            <table className={styles.table}>

                <thead>

                    <tr>

                        <th>Department</th>

                        <th>Description</th>

                        <th>Employees</th>

                        <th>Documents</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        departments.map((department) => (

                            <DepartmentRow

                                key={department.id}

                                department={department}

                                onEdit={onEdit}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}