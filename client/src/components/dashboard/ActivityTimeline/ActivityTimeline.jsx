import { motion } from "framer-motion";

import {
    Upload,
    FileEdit,
    BadgeCheck,
    Bell
} from "lucide-react";

import styles from "./ActivityTimeline.module.css";

const iconMap = {

    upload: Upload,

    edit: FileEdit,

    approved: BadgeCheck,

    announcement: Bell

};

const colorMap = {

    upload: "#10B981",

    edit: "#2563EB",

    approved: "#8B5CF6",

    announcement: "#F59E0B"

};

export default function ActivityTimeline({

    activities = [],

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.timeline}>

                {

                    Array.from({

                        length:4

                    }).map((_,index)=>(

                        <div

                            key={index}

                            className={styles.item}

                        >

                            <div className={styles.marker}>

                                <div className={styles.icon}></div>

                                <div className={styles.line}></div>

                            </div>

                            <div className={styles.content}>

                                <div className={styles.skeletonTitle}></div>

                                <div className={styles.skeletonMeta}></div>

                            </div>

                        </div>

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.timeline}>

            {

                activities.map((activity,index)=>{

                    const Icon=

                        iconMap[activity.type] ||

                        Upload;

                    const color=

                        colorMap[activity.type] ||

                        "#2563EB";

                    return(

                        <motion.div

                            key={activity.id}

                            initial={{

                                opacity:0,

                                x:-20

                            }}

                            animate={{

                                opacity:1,

                                x:0

                            }}

                            transition={{

                                delay:index*.08,

                                duration:.45

                            }}

                            className={styles.item}

                        >

                            <div className={styles.marker}>

                                <div

                                    className={styles.icon}

                                    style={{

                                        background:`${color}15`,

                                        color

                                    }}

                                >

                                    <Icon size={18}/>

                                </div>

                                {

                                    index !==

                                    activities.length-1 &&

                                    <div

                                        className={styles.line}

                                    />

                                }

                            </div>

                            <div className={styles.content}>

                                <h4>

                                    {activity.title}

                                </h4>

                                <div className={styles.meta}>

                                    <span className={styles.department}>

                                        {

                                            activity.department

                                        }

                                    </span>

                                    <span className={styles.separator}>

                                        •

                                    </span>

                                    <span className={styles.time}>

                                        {

                                            activity.time

                                        }

                                    </span>

                                </div>

                                <div className={styles.status}>

                                    <span

                                        className={styles.statusDot}

                                        style={{

                                            background:color

                                        }}

                                    />

                                    {

                                        activity.status ||

                                        "Completed"

                                    }

                                </div>

                            </div>

                        </motion.div>

                    );

                })

            }

        </div>

    );

}