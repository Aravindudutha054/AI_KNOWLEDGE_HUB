import PipelineRow from "../PipelineRow";

import styles from "./PipelineTable.module.css";

export default function PipelineTable({

    documents = []

}) {

    return (

        <div className={styles.wrapper}>

            <table className={styles.table}>

                <thead>

                    <tr>

                        <th>Document</th>

                        <th>Uploaded By</th>

                        <th>Chunks</th>

                        <th>Extraction</th>

                        <th>Embedding</th>

                        <th>Vector DB</th>

                        <th>Status</th>

                        <th>Updated</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documents.length === 0

                            ? (

                                <tr>

                                    <td

                                        colSpan="9"

                                        className={styles.empty}

                                    >

                                        No pipeline records found.

                                    </td>

                                </tr>

                            )

                            : (

                                documents.map(document => (

                                    <PipelineRow

                                        key={document._id}

                                        document={document}

                                    />

                                ))

                            )

                    }

                </tbody>

            </table>

        </div>

    );

}