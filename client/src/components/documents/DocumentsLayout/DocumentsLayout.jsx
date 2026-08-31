import styles from "./DocumentsLayout.module.css";

export default function DocumentsLayout({

    children

}) {

    return (

        <main className={styles.layout}>

            {children}

        </main>

    );

}