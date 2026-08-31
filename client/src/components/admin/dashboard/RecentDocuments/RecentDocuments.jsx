import styles from "./RecentDocuments.module.css";

export default function RecentDocuments({

    documents

}) {

    return (

        <div className={styles.card}>

            <div className={styles.header}>

                <h3>

                    Recent Documents

                </h3>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Department</th>

                        <th>Uploaded By</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documents.map(document => (

                            <tr key={document._id}>

                                <td>

                                    {document.originalName}

                                </td>

                                <td>

                                    {

                                        document.department?.name

                                    }

                                </td>

                                <td>

                                    {

                                        document.uploadedBy?.fullName

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