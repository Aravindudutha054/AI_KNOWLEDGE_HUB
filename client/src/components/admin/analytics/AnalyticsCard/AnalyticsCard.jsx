import styles from "./AnalyticsCard.module.css";

export default function AnalyticsCard({

    title,

    value,

    subtitle,

    icon: Icon

}) {

    return (

        <div className={styles.card}>

            <div className={styles.left}>

                <span className={styles.title}>

                    {title}

                </span>

                <h2 className={styles.value}>

                    {value}

                </h2>

                <small>

                    {subtitle}

                </small>

            </div>

            <div className={styles.icon}>

                <Icon size={26} />

            </div>

        </div>

    );

}