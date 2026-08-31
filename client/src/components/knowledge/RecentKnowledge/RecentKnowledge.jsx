import { Clock } from "lucide-react";

import DocumentList from "../DocumentList";

import styles from "./RecentKnowledge.module.css";

export default function RecentKnowledge({
    documents,
    onOpen,
    onDownload
}){
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Clock size={18} />
                <h3>
                    Recently Added
                </h3>
            </div>

            <DocumentList
                documents={documents}
                onOpen={onOpen}
                onDownload={onDownload}
            />
        </section>
    );
}