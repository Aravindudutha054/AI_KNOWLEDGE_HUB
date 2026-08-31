import { Flame } from "lucide-react";

import DocumentList from "../DocumentList";

import styles from "./PopularKnowledge.module.css";

export default function PopularKnowledge({
    documents,
    onOpen,
    onDownload
}){
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Flame size={18} />
                <h3>
                    Most Popular
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