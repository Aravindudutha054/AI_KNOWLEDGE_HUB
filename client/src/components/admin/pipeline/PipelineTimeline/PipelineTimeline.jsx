import {
    Upload,
    FileSearch,
    Scissors,
    Brain,
    Database,
    CheckCircle2
} from "lucide-react";

import styles from "./PipelineTimeline.module.css";

export default function PipelineTimeline() {

    const steps = [

        {

            title: "Upload",

            icon: Upload

        },

        {

            title: "Extract Text",

            icon: FileSearch

        },

        {

            title: "Chunk",

            icon: Scissors

        },

        {

            title: "Embedding",

            icon: Brain

        },

        {

            title: "ChromaDB",

            icon: Database

        },

        {

            title: "Ready",

            icon: CheckCircle2

        }

    ];

    return (

        <div className={styles.card}>

            <h3>

                Pipeline Timeline

            </h3>

            {

                steps.map((step, index) => {

                    const Icon = step.icon;

                    return (

                        <div

                            key={step.title}

                            className={styles.step}

                        >

                            <div className={styles.icon}>

                                <Icon size={18} />

                            </div>

                            <span>

                                {step.title}

                            </span>

                            {

                                index !== steps.length - 1 &&

                                <div className={styles.line} />

                            }

                        </div>

                    );

                })

            }

        </div>

    );

}