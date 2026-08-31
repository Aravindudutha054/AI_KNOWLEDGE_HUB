import DocumentRow from "../DocumentRow/DocumentRow";
import EmptyDocuments from "../EmptyDocuments";

import styles from "./DocumentTable.module.css";

export default function DocumentTable({

    documents = [],

    loading = false,

    onPreview,

    onDownload,

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

    if (documents.length === 0) {

        return (

            <EmptyDocuments />

        );

    }

    return (

        <div className={styles.wrapper}>

            <table className={styles.table}>

                <thead>

                    <tr>

                        <th>Document</th>

                        <th>Type</th>

                        <th>Size</th>

                        <th>Uploaded By</th>

                        <th>Uploaded</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documents.map(document => (

                            <DocumentRow

                                key={document._id}

                                document={document}

                                onPreview={onPreview}

                                onDownload={onDownload}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}