import { motion } from "framer-motion";

import {
    MessageSquare,
    Clock,
    ArrowRight
} from "lucide-react";

import styles from "./RecentChats.module.css";

export default function RecentChats({

    chats = [],

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

                                    <MessageSquare size={20} />

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

                chats.map((chat, index) => (

                    <motion.div

                        key={chat.id}

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

                            <div className={styles.icon}>

                                <MessageSquare size={20} />

                            </div>

                            <div className={styles.content}>

                                <h4>

                                    {chat.title}

                                </h4>

                                <div className={styles.meta}>

                                    <span className={styles.department}>

                                        {

                                            chat.department ||

                                            "Information Technology"

                                        }

                                    </span>

                                    <span className={styles.separator}>

                                        •

                                    </span>

                                    <span className={styles.time}>

                                        <Clock size={13} />

                                        {

                                            chat.time ||

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

                            className={styles.continueButton}

                            onClick={() =>

                                onOpen?.(chat)

                            }

                        >

                            <span>

                                Continue

                            </span>

                            <ArrowRight size={16} />

                        </motion.button>

                    </motion.div>

                ))

            }

        </div>

    );

}