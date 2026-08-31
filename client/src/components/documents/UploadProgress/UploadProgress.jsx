import { motion } from "framer-motion";

import {

    LoaderCircle,

    CheckCircle2,

    FileText

} from "lucide-react";

import styles from "./UploadProgress.module.css";

export default function UploadProgress({

    files = [],

    progress = 65,

    completed = false

}) {

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <div className={styles.title}>

                    {

                        completed

                            ?

                            <CheckCircle2

                                size={22}

                                className={styles.success}

                            />

                            :

                            <LoaderCircle

                                size={22}

                                className={styles.loader}

                            />

                    }

                    <div>

                        <h3>

                            {

                                completed

                                    ?

                                    "Upload Complete"

                                    :

                                    "Uploading Documents"

                            }

                        </h3>

                        <p>

                            {

                                completed

                                    ?

                                    "All files uploaded successfully."

                                    :

                                    "Please wait while documents are uploaded."

                            }

                        </p>

                    </div>

                </div>

                <span className={styles.percent}>

                    {progress}%

                </span>

            </div>

            <div className={styles.progressBar}>

                <motion.div

                    className={styles.progressFill}

                    initial={{

                        width:0

                    }}

                    animate={{

                        width:`${progress}%`

                    }}

                    transition={{

                        duration:.6

                    }}

                />

            </div>

            {

                files.length>0 &&

                <div className={styles.files}>

                    {

                        files.map((file,index)=>(

                            <div

                                key={index}

                                className={styles.file}

                            >

                                <FileText size={16}/>

                                <span>

                                    {file.name}

                                </span>

                            </div>

                        ))

                    }

                </div>

            }

        </div>

    );

}