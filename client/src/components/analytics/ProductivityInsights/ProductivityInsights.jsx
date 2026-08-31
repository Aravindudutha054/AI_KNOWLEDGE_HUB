import { motion } from "framer-motion";

import {

    CheckCircle2

} from "lucide-react";

import styles from "./ProductivityInsights.module.css";

export default function ProductivityInsights({

    insights = []

}) {

    return (

        <motion.div

            className={styles.card}

            initial={{ opacity:0,y:20 }}

            animate={{ opacity:1,y:0 }}

            transition={{ duration:.4 }}

        >

            <h3>

                Productivity Insights

            </h3>

            <div className={styles.list}>

                {

                    insights.map((item, index) => (

                        <div

                            key={item.title || item || index}

                            className={styles.item}

                        >

                            <CheckCircle2 size={18}/>

                            <span>

                                {item.title || item}

                            </span>

                        </div>

                    ))

                }

            </div>

        </motion.div>

    );

}