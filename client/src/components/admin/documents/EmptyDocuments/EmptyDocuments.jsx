import { FileText, Upload } from "lucide-react";

import styles from "./EmptyDocuments.module.css";

export default function EmptyDocuments({

    onUpload

}) {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <FileText size={52} />

            </div>

            <h2>

                No Documents Found

            </h2>

            <p>

                No documents have been uploaded yet.
                Upload your first document to build your department knowledge base.

            </p>

            <button

                className={styles.button}

                onClick={onUpload}

            >

                <Upload size={18} />

                Upload Document

            </button>

        </div>

    );

}