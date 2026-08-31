import { motion } from "framer-motion";

import {

    FileText,

    ArrowRight,

    Download

} from "lucide-react";

import styles from "./DocumentList.module.css";

export default function DocumentList({

    documents = [],

    onOpen,

    onDownload

}){

    return(

        <div className={styles.list}>

            {

                documents.map(document=>(

                    <motion.div

                        key={document.id}

                        whileHover={{x:4}}

                        className={styles.item}

                    >

                        <div className={styles.left}>

                            <div className={styles.icon}>

                                <FileText size={18}/>

                            </div>

                            <div className={styles.info}>

                                <h4>

                                    {document.title}

                                </h4>

                                <p>

                                    {document.department?.name || "—"}

                                </p>

                            </div>

                        </div>

                        <div className={styles.actions}>

                            <button

                                onClick={()=>

                                    onOpen?.(document)

                                }

                            >

                                <ArrowRight size={16}/>

                            </button>

                            <button

                                onClick={()=>

                                    onDownload?.(document)

                                }

                            >

                                <Download size={16}/>

                            </button>

                        </div>

                    </motion.div>

                ))

            }

        </div>

    );

}