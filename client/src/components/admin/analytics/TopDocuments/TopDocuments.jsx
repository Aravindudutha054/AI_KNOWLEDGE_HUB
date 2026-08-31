import { motion } from "framer-motion";

import {
    FileText,
    Eye,
    Download
} from "lucide-react";

import styles from "./TopDocuments.module.css";

export default function TopDocuments({

    documents

}) {

    return (

        <motion.div

            className={styles.card}

            initial={{

                opacity: 0,

                y: 20

            }}

            animate={{

                opacity: 1,

                y: 0

            }}

            transition={{

                duration: .4

            }}

        >

            <div className={styles.header}>

                <h3>

                    Top Documents

                </h3>

                <span>

                    Most Viewed

                </span>

            </div>

            <div className={styles.list}>

                {

                    documents.map(document => (

                        <div

                            key={document.id}

                            className={styles.item}

                        >

                            <div className={styles.left}>

                                <FileText size={18} />

                                <span>

                                    {document.title}

                                </span>

                            </div>

                            <div className={styles.stats}>

                                <span>

                                    <Eye size={14} />

                                    {document.views}

                                </span>

                                <span>

                                    <Download size={14} />

                                    {document.downloads}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </motion.div>

    );
}
