import styles from "./LogRow.module.css";

export default function LogRow({

    log

}) {

    return (

        <tr>

            <td>

                {

                    new Date(

                        log.createdAt

                    ).toLocaleString()

                }

            </td>

            <td>

                {

                    log.performedBy?.fullName ||

                    "-"

                }

            </td>

            <td>

                {log.module}

            </td>

            <td>

                {log.action}

            </td>

            <td>

                {log.target}

            </td>

            <td>

                <span

                    className={

                        log.status === "Success"

                        ?

                        styles.success

                        :

                        styles.failed

                    }

                >

                    {log.status}

                </span>

            </td>

            <td>

                {log.details}

            </td>

        </tr>

    );

}