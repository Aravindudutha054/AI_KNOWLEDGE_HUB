import styles from "./PipelineCard.module.css";

export default function PipelineCard({

    title,

    value,

    subtitle,

    icon: Icon

}) {

    return (

        <div className={styles.card}>

            <div className={styles.top}>

                <div>

                    <p className={styles.title}>

                        {title}

                    </p>

                    <h2>

                        {value}

                    </h2>

                </div>

                <div className={styles.icon}>

                    <Icon size={22} />

                </div>

            </div>

            <p className={styles.subtitle}>

                {subtitle}

            </p>

        </div>

    );

}