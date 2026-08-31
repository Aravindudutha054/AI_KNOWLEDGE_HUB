import { motion } from "framer-motion";

import {
    Search,
    TrendingUp
} from "lucide-react";

import styles from "./SearchInsights.module.css";

export default function SearchInsights({

    searches

}) {

    console.log("SearchInsights props:", searches);

    return (

        <motion.div

            className={styles.card}

            initial={{

                opacity: 0,

                y: 20

            }}

            animate={{

                opacity: 1,

                y: 0

            }}

            transition={{

                duration: .4

            }}

        >

            <div className={styles.header}>

                <h3>

                    Search Insights

                </h3>

                <span>

                    Popular Searches

                </span>

            </div>

            <div className={styles.list}>

                {

                    searches.map((item, index) => {

                        console.log("Item:", item);
                        console.log("Item.query:", item?.query, typeof item?.query);

                        return (

                            <div

                                key={index}

                                className={styles.item}

                            >

                                <Search size={16} />

                                <span>
    {item.query?.trim() || "No Search Query"} ({item.count})
</span>

                                <TrendingUp

                                    size={16}

                                    className={styles.trend}

                                />

                            </div>

                        );

                    })

                }

            </div>

        </motion.div>

    );
}