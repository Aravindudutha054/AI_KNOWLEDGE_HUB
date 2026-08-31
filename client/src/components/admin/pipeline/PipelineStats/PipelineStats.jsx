import {

    FileText,

    Clock3,

    Boxes,

    CheckCircle2

} from "lucide-react";

import styles from "./PipelineStats.module.css";

export default function PipelineStats({

    pipeline = []

}) {

    const indexed = pipeline.filter(

        item => item.vectorStatus === "Indexed"

    ).length;

    const processing = pipeline.filter(

        item => item.status === "Processing"

    ).length;

    const totalChunks = pipeline.reduce(

        (total, item) => total + item.chunks,

        0

    );

    const ready = pipeline.filter(

        item => item.status === "Ready"

    ).length;

    const cards = [

        {

            title:"Indexed Documents",

            value:indexed,

            icon:FileText

        },

        {

            title:"Processing",

            value:processing,

            icon:Clock3

        },

        {

            title:"Total Chunks",

            value:totalChunks,

            icon:Boxes

        },

        {

            title:"Ready",

            value:ready,

            icon:CheckCircle2

        }

    ];

    return(

        <div className={styles.grid}>

            {

                cards.map(card=>{

                    const Icon=card.icon;

                    return(

                        <div

                            key={card.title}

                            className={styles.card}

                        >

                            <div className={styles.icon}>

                                <Icon size={20}/>

                            </div>

                            <div>

                                <h3>

                                    {card.value}

                                </h3>

                                <p>

                                    {card.title}

                                </p>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}