import { motion } from "framer-motion";

import styles from "./AIPerformance.module.css";

export default function AIPerformance({

    performance

}) {

    return (

        <motion.div

            className={styles.card}

            initial={{ opacity:0,y:20 }}

            animate={{ opacity:1,y:0 }}

            transition={{ duration:.4 }}

        >

            <h3>

                AI Performance

            </h3>

            <div className={styles.grid}>

                {

                    Object.entries(performance || {}).map(([label, value]) => (

                        <div

                            key={label}

                            className={styles.metric}

                        >

                            <h2>

                                {value}

                            </h2>

                            <span>

                                {label}

                            </span>

                        </div>

                    ))

                }

            </div>

        </motion.div>

    );

}