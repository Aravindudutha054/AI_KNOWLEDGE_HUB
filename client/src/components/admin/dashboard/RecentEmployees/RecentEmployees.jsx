import styles from "./RecentEmployees.module.css";

export default function RecentEmployees({

    employees

}) {

    return (

        <div className={styles.card}>

            <div className={styles.header}>

                <h3>

                    Recent Employees

                </h3>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Employee ID</th>

                        <th>Department</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        employees.map(employee => (

                            <tr key={employee._id}>

                                <td>

                                    {employee.fullName}

                                </td>

                                <td>

                                    {employee.employeeId}

                                </td>

                                <td>

                                    {

                                        employee.department?.name

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}