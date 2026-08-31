import { motion } from "framer-motion";

import {

    Upload,

    UserPlus,

    Building2,

    BrainCircuit,

    ShieldCheck,

    AlertTriangle

} from "lucide-react";

import styles from "./ActivityFeed.module.css";

const icons = {

    upload: Upload,

    employee: UserPlus,

    department: Building2,

    ai: BrainCircuit,

    security: ShieldCheck,

    warning: AlertTriangle

};

export default function ActivityFeed({

    activities = [],

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.container}>

                <h2>

                    Activity Feed

                </h2>

                {

                    Array.from({ length: 5 }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        />

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <h2>

                    Activity Feed

                </h2>

                <span>

                    Live Events

                </span>

            </div>

            <div className={styles.timeline}>

                {

                    activities.map((activity, index) => {

                        const Icon =

                            icons[activity.type] ||

                            Upload;

                        return (

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

                                    delay:index*.08

                                }}

                                className={styles.item}

                            >

                                <div className={styles.marker}>

                                    <div className={styles.icon}>

                                        <Icon size={18}/>

                                    </div>

                                    {

                                        index !== activities.length-1 &&

                                        <div className={styles.line}/>

                                    }

                                </div>

                                <div className={styles.content}>

                                    <h4>

                                        {activity.action}

                                    </h4>

                                    <p>

                                        {activity.user}

                                    </p>

                                    <span>

                                        {activity.time}

                                    </span>

                                </div>

                            </motion.div>

                        );

                    })

                }

            </div>

        </div>

    );

}