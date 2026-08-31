import { motion } from "framer-motion";

import {

    FileText,

    ExternalLink,

    BookOpen,

    ShieldCheck,

    FolderOpen,

    Star

} from "lucide-react";

import styles from "./SourcesPanel.module.css";

export default function SourcesPanel({

    sources = []

}){

    return(

        <div className={styles.container}>

            <div className={styles.header}>

                <div className={styles.title}>

                    <BookOpen size={20}/>

                    <h2>

                        Sources

                    </h2>

                </div>

                <span className={styles.count}>

                    {sources.length}

                </span>

            </div>

            {

                sources.length===0

                ?

                <div className={styles.empty}>

                    <FolderOpen size={42}/>

                    <h3>

                        No Sources Yet

                    </h3>

                    <p>

                        When the AI generates an answer,
                        the referenced documents will appear
                        here.

                    </p>

                </div>

                :

                <div className={styles.list}>

                    {

                        sources.map(source=>(

                            <motion.div

                                key={source.id}

                                whileHover={{

                                    y:-3

                                }}

                                className={styles.card}

                            >

                                <div className={styles.fileIcon}>

                                    <FileText size={22}/>

                                </div>

                                <div className={styles.info}>

                                    <h4>

                                        {source.title}

                                    </h4>

                                    <p>

                                        Page {source.page}

                                    </p>

                                </div>

                                <button

                                    className={styles.openButton}

                                >

                                    <ExternalLink size={16}/>

                                </button>

                            </motion.div>

                        ))

                    }

                </div>

            }

            <div className={styles.footer}>

                <div className={styles.badge}>

                    <ShieldCheck size={16}/>

                    Verified by RAG

                </div>

                <div className={styles.badge}>

                    <Star size={16}/>

                    Confidence 98%

                </div>

            </div>

        </div>

    );

}