import { motion } from "framer-motion";

import {
    FileText,
    ArrowRight,
    Clock
} from "lucide-react";

import styles from "./RecentDocuments.module.css";

export default function RecentDocuments({

    documents = [],

    loading = false,

    onOpen

}) {

    if (loading) {

        return (

            <div className={styles.list}>

                {

                    Array.from({

                        length: 4

                    }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.item}

                        >

                            <div className={styles.left}>

                                <div className={styles.icon}>

                                    <FileText size={20} />

                                </div>

                                <div className={styles.content}>

                                    <div className={styles.skeletonTitle}></div>

                                    <div className={styles.skeletonMeta}></div>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.list}>

            {

                documents.map((doc, index) => (

                    <motion.div

                        key={doc.id}

                        initial={{

                            opacity: 0,

                            x: -20

                        }}

                        animate={{

                            opacity: 1,

                            x: 0

                        }}

                        transition={{

                            delay: index * .08,

                            duration: .4

                        }}

                        className={styles.item}

                    >

                        <div className={styles.left}>

                            <div className={styles.icon}>

                                <FileText size={20} />

                            </div>

                            <div className={styles.content}>

                                <h4>

                                    {doc.name || doc.title}

                                </h4>

                                <div className={styles.meta}>

                                    <span className={styles.department}>

                                        {

                                            doc.department ||

                                            "Information Technology"

                                        }

                                    </span>

                                    <span className={styles.separator}>

                                        •

                                    </span>

                                    <span className={styles.time}>

                                        <Clock size={13} />

                                        {

                                            doc.updated ||

                                            "Just now"

                                        }

                                    </span>

                                </div>

                            </div>

                        </div>

                        <motion.button

                            whileHover={{

                                x: 4

                            }}

                            whileTap={{

                                scale: .96

                            }}

                            className={styles.openButton}

                            onClick={() =>

                                onOpen?.(doc)

                            }

                        >

                            <span>

                                Open

                            </span>

                            <ArrowRight size={16} />

                        </motion.button>

                    </motion.div>

                ))

            }

        </div>

    );

}