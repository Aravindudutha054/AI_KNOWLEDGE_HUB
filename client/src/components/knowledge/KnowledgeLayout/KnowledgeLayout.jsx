import styles from "./KnowledgeLayout.module.css";

export default function KnowledgeLayout({

    children

}) {

    return (

        <main className={styles.layout}>

            {children}

        </main>

    );

}