import { motion } from "framer-motion";

import {
    FileText,
    BrainCircuit,
    BookOpen,
    HardDrive
} from "lucide-react";

import styles from "./StatsCards.module.css";

const iconMap = {

    Documents: FileText,

    "AI Chats": BrainCircuit,

    "AI Queries": BrainCircuit,

    "Knowledge Base": BookOpen,

    "Saved Answers": BookOpen,

    Storage: HardDrive,

    "Department Files": FileText

};

const progressMap = {

    Documents: 82,

    "AI Chats": 74,

    "AI Queries": 74,

    "Knowledge Base": 58,

    "Saved Answers": 58,

    Storage: 68,

    "Department Files": 90

};

export default function StatsCards({

    stats = [],

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.grid}>

                {

                    Array.from({

                        length: 4

                    }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.card}

                        >

                            <div className={styles.skeletonHeader}></div>

                            <div className={styles.skeletonValue}></div>

                            <div className={styles.skeletonText}></div>

                            <div className={styles.skeletonProgress}></div>

                        </div>

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.grid}>

            {

                stats.map((card, index) => {

                    const Icon =

                        iconMap[card.title] ||

                        FileText;

                    const progress =

                        progressMap[card.title] ||

                        60;

                    return (

                        <motion.div

                            key={card.id}

                            initial={{

                                opacity: 0,

                                y: 20

                            }}

                            animate={{

                                opacity: 1,

                                y: 0

                            }}

                            transition={{

                                delay: index * .08,

                                duration: .45

                            }}

                            whileHover={{

                                y: -4

                            }}

                            className={styles.card}

                        >

                            {/* Header */}

                            <div

                                className={styles.header}

                            >

                                <div

                                    className={styles.icon}

                                >

                                    <Icon size={20} />

                                </div>

                                <span>

                                    {card.title}

                                </span>

                            </div>

                            {/* Body */}

                            <div

                                className={styles.body}

                            >

                                <h2>

                                    {card.value}

                                </h2>

                                <p>

                                    {

                                        card.change ||

                                        "Updated Today"

                                    }

                                </p>

                            </div>

                            {/* Progress */}

                            <div

                                className={styles.progress}

                            >

                                <div

                                    className={styles.progressFill}

                                    style={{

                                        width:

                                            `${progress}%`

                                    }}

                                />

                            </div>

                            {/* Footer */}

                            <div

                                className={styles.footer}

                            >

                                <span>

                                    Updated just now

                                </span>

                            </div>

                        </motion.div>

                    );

                })

            }

        </div>

    );

}