import { motion } from "framer-motion";

import {

    BrainCircuit,

    Database,

    FileText,

    Boxes,

    MessageSquare,

    Activity,

    CheckCircle2

} from "lucide-react";

import styles from "./AIStatus.module.css";

export default function AIStatus({

    status,

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.container}>

                <div className={styles.skeleton}></div>

                <div className={styles.skeleton}></div>

                <div className={styles.skeleton}></div>

            </div>

        );

    }

    if (!status) return null;

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <div>

                    <h2>

                        AI System Status

                    </h2>

                    <p>

                        Enterprise RAG Pipeline

                    </p>

                </div>

                <span className={styles.online}>

                    Online

                </span>

            </div>

            <div className={styles.grid}>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <BrainCircuit size={20} />

                    <div>

                        <h4>LLM</h4>

                        <span>{status.model}</span>

                    </div>

                </motion.div>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <Database size={20} />

                    <div>

                        <h4>Vector DB</h4>

                        <span>{status.vectorDatabase}</span>

                    </div>

                </motion.div>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <Boxes size={20} />

                    <div>

                        <h4>Embeddings</h4>

                        <span>{status.embeddings}</span>

                    </div>

                </motion.div>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <FileText size={20} />

                    <div>

                        <h4>Indexed Docs</h4>

                        <span>

                            {status.documentsIndexed}

                        </span>

                    </div>

                </motion.div>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <MessageSquare size={20} />

                    <div>

                        <h4>Queries Today</h4>

                        <span>

                            564

                        </span>

                    </div>

                </motion.div>

                <motion.div

                    whileHover={{ y: -2 }}

                    className={styles.card}

                >

                    <Activity size={20} />

                    <div>

                        <h4>Pipeline</h4>

                        <span>

                            Healthy

                        </span>

                    </div>

                </motion.div>

            </div>

            <div className={styles.footer}>

                <CheckCircle2 size={18} />

                <span>

                    AI Retrieval System Operational

                </span>

            </div>

        </div>

    );

}