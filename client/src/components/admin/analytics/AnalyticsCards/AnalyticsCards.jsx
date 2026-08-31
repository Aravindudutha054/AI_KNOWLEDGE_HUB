import {

    Users,

    FileText,

    CheckCircle,

    HardDrive

} from "lucide-react";

import AnalyticsCard from "../AnalyticsCard";

import styles from "./AnalyticsCards.module.css";

export default function AnalyticsCards({

    stats

}) {

    const storage =

        `${(

            stats.storage /

            1024 /

            1024

        ).toFixed(2)} MB`;

    const cards = [

        {

            title:"Employees",

            value:stats.employeeCount,

            subtitle:"Department Members",

            icon:Users

        },

        {

            title:"Documents",

            value:stats.totalDocuments,

            subtitle:"Knowledge Files",

            icon:FileText

        },

        {

            title:"Indexed",

            value:stats.indexed,

            subtitle:"AI Ready",

            icon:CheckCircle

        },

        {

            title:"Storage",

            value:storage,

            subtitle:"Total Usage",

            icon:HardDrive

        }

    ];

    return (

        <div className={styles.grid}>

            {

                cards.map(card=>(

                    <AnalyticsCard

                        key={card.title}

                        {...card}

                    />

                ))

            }

        </div>

    );

}