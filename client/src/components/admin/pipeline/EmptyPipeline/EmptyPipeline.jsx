import {

    Database,

    RotateCcw

} from "lucide-react";

import styles from "./EmptyPipeline.module.css";

export default function EmptyPipeline({

    onRefresh

}) {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <Database size={52} />

            </div>

            <h2>

                No Pipeline Data Found

            </h2>

            <p>

                No documents are available for indexing.
                Upload documents to start the knowledge pipeline.

            </p>

            <button

                className={styles.button}

                onClick={onRefresh}

            >

                <RotateCcw size={18} />

                Refresh Pipeline

            </button>

        </div>

    );

}