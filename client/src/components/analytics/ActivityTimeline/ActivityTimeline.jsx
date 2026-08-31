import { motion } from "framer-motion";

import {

    Clock3,

    MessageSquare,

    Search,

    FileText,

    Download

} from "lucide-react";

import styles from "./ActivityTimeline.module.css";

const iconMap = {
    chat: MessageSquare,
    search: Search,
    document: FileText,
    download: Download
};

export default function ActivityTimeline({

    timeline = []

}) {

    return (

        <motion.div

            className={styles.card}

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .4 }}

        >

            <div className={styles.header}>

                <h3>

                    Activity Timeline

                </h3>

                <Clock3 size={18}/>

            </div>

            <div className={styles.timeline}>

                {

                    timeline.map((item, index) => {

                        const Icon = iconMap[item.type] || MessageSquare;
                        const timelineKey = `${item._id || item.id || item.type || "timeline"}-${index}`;

                        return (

                            <div

                                key={timelineKey}

                                className={styles.item}

                            >

                                <div className={styles.icon}>

                                    <Icon size={18}/>

                                </div>

                                <div className={styles.content}>

                                    <h4>

                                        {item.title || item.type}

                                    </h4>

                                    <span>

                                        {item.time || item.createdAt}

                                    </span>

                                </div>

                            </div>

                        );

                    })

                }

            </div>

        </motion.div>

    );

}