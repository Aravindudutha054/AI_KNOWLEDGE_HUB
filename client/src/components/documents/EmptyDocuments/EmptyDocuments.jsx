import { FolderOpen } from "lucide-react";

import styles from "./EmptyDocuments.module.css";

export default function EmptyDocuments() {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <FolderOpen size={60}/>

            </div>

            <h2>

                No Documents Found

            </h2>

            <p>

                Upload a document or adjust your search filters.

            </p>

        </div>

    );

}