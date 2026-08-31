import styles from "./StorageCard.module.css";

export default function StorageCard({ stats }) {

    const storage =
        ((stats?.storage ?? 0) / 1024 / 1024).toFixed(2);

    return (
        <div className={styles.card}>
            <h3>Storage Usage</h3>

            <h2>{storage} MB</h2>

            <p>Total storage used by documents.</p>
        </div>
    );
}