import { motion } from "framer-motion";

import {

    Search,

    TrendingUp

} from "lucide-react";

import styles from "./SearchInsights.module.css";

export default function SearchInsights({

    searches = []

}) {

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

                        const searchLabel = typeof item === "string"

                            ? item

                            : typeof item?.query === "string"

                                ? item.query

                                : typeof item?._id === "string"

                                    ? item._id

                                    : typeof item?.title === "string"

                                        ? item.title

                                        : `Search ${index + 1}`;

                        const countText = typeof item === "object" && item && typeof item.count === "number"

                            ? ` (${item.count})`

                            : "";

                        return (

                            <div

                                key={`${searchLabel}-${index}`}

                                className={styles.item}

                            >

                                <Search size={16}/>

                                <span>

                                    {searchLabel}{countText}

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