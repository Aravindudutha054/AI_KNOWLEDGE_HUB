import {

    FileText,

    CheckCircle,

    Loader,

    HardDrive

} from "lucide-react";

import styles from "./DocumentStats.module.css";

export default function DocumentStats({

    stats

}) {

    const cards = [

        {

            title: "Total Documents",

            value: stats.total,

            subtitle: "Knowledge files",

            icon: FileText

        },

        {

            title: "Indexed",

            value: stats.indexed,

            subtitle: "Ready for AI",

            icon: CheckCircle

        },

        {

            title: "Processing",

            value: stats.processing,

            subtitle: "Being indexed",

            icon: Loader

        },

        {

            title: "Storage",

            value: `${(stats.storage / 1024 / 1024).toFixed(1)} MB`,

            subtitle: "Department usage",

            icon: HardDrive

        }

    ];

    return (

        <div className={styles.grid}>

            {

                cards.map(card => {

                    const Icon = card.icon;

                    return (

                        <div

                            key={card.title}

                            className={styles.card}

                        >

                            <div className={styles.left}>

                                <span className={styles.title}>

                                    {card.title}

                                </span>

                                <span className={styles.value}>

                                    {card.value}

                                </span>

                                <small>

                                    {card.subtitle}

                                </small>

                            </div>

                            <div className={styles.icon}>

                                <Icon size={24} />

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}