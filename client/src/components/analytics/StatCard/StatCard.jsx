import { motion } from "framer-motion";

import styles from "./StatCard.module.css";

export default function StatCard({

    icon,

    title,

    value,

    change,

    positive = true

}) {

    return (

        <motion.div

            className={styles.card}

            whileHover={{

                y: -4

            }}

            transition={{

                duration: .2

            }}

        >

            <div className={styles.icon}>

                {icon}

            </div>

            <div className={styles.content}>

                <span className={styles.title}>

                    {title}

                </span>

                <h2>

                    {value}

                </h2>

                <span

                    className={

                        positive

                            ? styles.positive

                            : styles.negative

                    }

                >

                    {change}

                </span>

            </div>

        </motion.div>

    );

}