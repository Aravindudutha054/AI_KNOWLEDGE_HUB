import {

    FileText,

    Loader,

    CheckCircle,

    XCircle,

    Clock3

} from "lucide-react";

import PipelineCard from "../PipelineCard";

import styles from "./PipelineOverview.module.css";

export default function PipelineOverview({

    summary

}) {

    const cards = [

        {

            title:"Uploaded",

            value:summary?.uploaded ?? 0,

            subtitle:"Total Documents",

            icon:FileText

        },

        {

            title:"Processing",

            value:summary?.processing ?? 0,

            subtitle:"Currently Running",

            icon:Loader

        },

        {

            title:"Indexed",

            value:summary?.indexed ?? 0,

            subtitle:"AI Ready",

            icon:CheckCircle

        },

        {

            title:"Failed",

            value:summary?.failed ?? 0,

            subtitle:"Need Attention",

            icon:XCircle

        },

        {

            title:"Queue",

            value:summary?.queue ?? 0,

            subtitle:"Waiting",

            icon:Clock3

        }

    ];

    return(

        <div className={styles.grid}>

            {

                cards.map(card=>(

                    <PipelineCard

                        key={card.title}

                        {...card}

                    />

                ))

            }

        </div>

    );

}