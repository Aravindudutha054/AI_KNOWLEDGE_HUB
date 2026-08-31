import {
    Server,
    Database,
    Brain,
    Sparkles
} from "lucide-react";

import styles from "./PipelineStatus.module.css";

export default function PipelineStatus() {

    const services = [

        {
            name: "FastAPI",
            status: "Running",
            icon: Server
        },

        {
            name: "ChromaDB",
            status: "Connected",
            icon: Database
        },

        {
            name: "Embedding Model",
            status: "Ready",
            icon: Brain
        },

        {
            name: "Gemini",
            status: "Connected",
            icon: Sparkles
        }

    ];

    return (

        <div className={styles.card}>

            <h3>

                AI Pipeline Status

            </h3>

            {

                services.map(service => {

                    const Icon = service.icon;

                    return (

                        <div

                            key={service.name}

                            className={styles.row}

                        >

                            <div className={styles.left}>

                                <Icon size={18} />

                                <span>

                                    {service.name}

                                </span>

                            </div>

                            <span className={styles.online}>

                                ● {service.status}

                            </span>

                        </div>

                    );

                })

            }

        </div>

    );

}