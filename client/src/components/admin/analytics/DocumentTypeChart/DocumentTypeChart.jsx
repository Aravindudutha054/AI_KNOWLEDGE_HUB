import styles from "./DocumentTypeChart.module.css";

export default function DocumentTypeChart({ stats }) {
    return (
        <div className={styles.card}>
            <h3>Document Types</h3>

            <div className={styles.item}>
                <span>PDF</span>
                <strong>{stats?.pdf ?? 0}</strong>
            </div>

            <div className={styles.item}>
                <span>DOCX</span>
                <strong>{stats?.docx ?? 0}</strong>
            </div>

            <div className={styles.item}>
                <span>TXT</span>
                <strong>{stats?.txt ?? 0}</strong>
            </div>
        </div>
    );
}