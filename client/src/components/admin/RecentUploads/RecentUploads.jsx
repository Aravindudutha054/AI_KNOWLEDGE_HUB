import { motion } from "framer-motion";

import {
    FileText,
    Eye,
    CheckCircle2,
    Clock
} from "lucide-react";

import styles from "./RecentUploads.module.css";

export default function RecentUploads({

    uploads = [],

    loading = false,

    onPreview

}) {

    if (loading) {

        return (

            <div className={styles.container}>

                <div className={styles.header}>

                    <h2>

                        Recent Uploads

                    </h2>

                </div>

                {

                    Array.from({ length: 4 }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        />

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <h2>

                    Recent Uploads

                </h2>

                <span>

                    {uploads.length} Documents

                </span>

            </div>

            <div className={styles.list}>

                {

                    uploads.map((document, index) => (

                        <motion.div

                            key={document.id}

                            initial={{

                                opacity:0,

                                x:-20

                            }}

                            animate={{

                                opacity:1,

                                x:0

                            }}

                            transition={{

                                delay:index*.08

                            }}

                            className={styles.item}

                        >

                            <div className={styles.left}>

                                <div className={styles.icon}>

                                    <FileText size={20}/>

                                </div>

                                <div>

                                    <h4>

                                        {document.title}

                                    </h4>

                                    <p>

                                        {document.department?.name || "—"}

                                    </p>

                                    <small>

                                        Uploaded by {document.uploadedBy?.fullName || "—"}

                                    </small>

                                </div>

                            </div>

                            <div className={styles.right}>

                                <div className={styles.status}>

                                    <CheckCircle2

                                        size={16}

                                    />

                                    Indexed

                                </div>

                                <div className={styles.time}>

                                    <Clock size={14}/>

                                    {document.uploadedAt}

                                </div>

                                <button

                                    onClick={()=>

                                        onPreview?.(

                                            document

                                        )

                                    }

                                >

                                    <Eye size={16}/>

                                </button>

                            </div>

                        </motion.div>

                    ))

                }

            </div>

        </div>

    );

}