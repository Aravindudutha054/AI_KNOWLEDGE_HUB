import styles from "./StatusChart.module.css";

export default function StatusChart({ stats }) {
    return (
        <div className={styles.card}>
            <h3>Document Status</h3>

            <div className={styles.item}>
                <span>Indexed</span>
                <strong>{stats?.indexed ?? 0}</strong>
            </div>

            <div className={styles.item}>
                <span>Processing</span>
                <strong>{stats?.processing ?? 0}</strong>
            </div>

            <div className={styles.item}>
                <span>Failed</span>
                <strong>{stats?.failed ?? 0}</strong>
            </div>
        </div>
    );
}