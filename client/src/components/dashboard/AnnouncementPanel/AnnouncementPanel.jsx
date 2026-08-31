import { motion } from "framer-motion";

import {
    Megaphone,
    ShieldAlert,
    CalendarDays,
    FileText,
    ArrowRight
} from "lucide-react";

import styles from "./AnnouncementPanel.module.css";

const iconMap = {

    maintenance: Megaphone,

    holiday: CalendarDays,

    security: ShieldAlert,

    policy: FileText

};

const colorMap = {

    maintenance: "#2563EB",

    holiday: "#10B981",

    security: "#EF4444",

    policy: "#8B5CF6"

};

export default function AnnouncementPanel({

    announcements = [],

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

                                <div className={styles.icon}></div>

                                <div className={styles.content}>

                                    <div className={styles.skeletonTitle}></div>

                                    <div className={styles.skeletonTime}></div>

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

                announcements.map((item, index) => {

                    const Icon =

                        iconMap[item.type] ||

                        Megaphone;

                    const color =

                        colorMap[item.type] ||

                        "#2563EB";

                    return (

                        <motion.div

                            key={item.id}

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

                                duration: .45

                            }}

                            className={styles.item}

                        >

                            <div className={styles.left}>

                                <div

                                    className={styles.icon}

                                    style={{

                                        background: `${color}15`,

                                        color

                                    }}

                                >

                                    <Icon size={20} />

                                </div>

                                <div className={styles.content}>

                                    <h4>

                                        {item.title}

                                    </h4>

                                    <p>

                                        {item.time}

                                    </p>

                                </div>

                            </div>

                            <motion.button

                                whileHover={{

                                    x: 4

                                }}

                                whileTap={{

                                    scale: .96

                                }}

                                className={styles.viewButton}

                                onClick={() =>

                                    onOpen?.(item)

                                }

                            >

                                <span>

                                    View

                                </span>

                                <ArrowRight size={16} />

                            </motion.button>

                        </motion.div>

                    );

                })

            }

        </div>

    );

}