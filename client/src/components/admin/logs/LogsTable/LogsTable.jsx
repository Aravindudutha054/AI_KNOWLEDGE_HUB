import LogRow from "../LogRow";

import styles from "./LogsTable.module.css";

export default function LogsTable({

    logs

}) {

    return (

        <div className={styles.tableWrapper}>

            <table className={styles.table}>

                <thead>

                    <tr>

                        <th>Time</th>

                        <th>User</th>

                        <th>Module</th>

                        <th>Action</th>

                        <th>Target</th>

                        <th>Status</th>

                        <th>Details</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        logs.length === 0

                        ?

                        (

                            <tr>

                                <td

                                    colSpan="7"

                                    className={styles.empty}

                                >

                                    No activity logs found.

                                </td>

                            </tr>

                        )

                        :

                        (

                            logs.map(log => (

                                <LogRow

                                    key={log._id}

                                    log={log}

                                />

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}