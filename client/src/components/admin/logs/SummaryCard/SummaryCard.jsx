import styles from "./SummaryCard.module.css";

export default function SummaryCard({

    title,

    value,

    subtitle,

    icon: Icon

}) {

    return (

        <div className={styles.card}>

            <div className={styles.left}>

                <p className={styles.title}>

                    {title}

                </p>

                <h2>

                    {value}

                </h2>

                <span>

                    {subtitle}

                </span>

            </div>

            <div className={styles.icon}>

                <Icon size={28} />

            </div>

        </div>

    );

}