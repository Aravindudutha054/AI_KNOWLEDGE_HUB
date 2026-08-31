import EmployeeRow from "../EmployeeRow";
import EmptyEmployees from "../EmptyEmployees";

import styles from "./EmployeeTable.module.css";

export default function EmployeeTable({

    employees = [],

    loading = false,

    onEdit,

    onView,

    onDelete

}) {

    if (loading) {

        return (

            <div className={styles.wrapper}>

                {

                    Array.from({ length: 6 }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        />

                    ))

                }

            </div>

        );

    }

    if (employees.length === 0) {

        return <EmptyEmployees />;

    }

    return (

        <div className={styles.wrapper}>

            <table className={styles.table}>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Department</th>

                        <th>Role</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        employees.map((employee, index) => (

                            <EmployeeRow

                                key={employee._id || employee.id || employee.employeeId || employee.user?.email || employee.user?.fullName || employee.email || index}

                                employee={employee}

                                onEdit={onEdit}

                                onView={onView}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}