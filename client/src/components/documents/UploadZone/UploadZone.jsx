import { useRef, useState } from "react";

import { motion } from "framer-motion";

import {

    UploadCloud,

    FileText,

    X,

    CheckCircle

} from "lucide-react";

import styles from "./UploadZone.module.css";

const supportedFormats = [

    ".pdf",

    ".doc",

    ".docx",

    ".xls",

    ".xlsx",

    ".ppt",

    ".pptx"

];

export default function UploadZone({

    uploading = false,

    onUpload

}) {

    const inputRef = useRef(null);

    const [dragging, setDragging] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);

    const processFiles = (files) => {

        const validFiles = Array.from(files);

        setSelectedFiles(validFiles);

        onUpload?.(validFiles);

    };

    const handleBrowse = (event) => {

        processFiles(event.target.files);

    };

    const handleDrop = (event) => {

        event.preventDefault();

        setDragging(false);

        processFiles(event.dataTransfer.files);

    };

    const removeFile = (index) => {

        setSelectedFiles(previous =>

            previous.filter((_, i) => i !== index)

        );

    };

    return (

        <div className={styles.wrapper}>

            <motion.div

                whileHover={{ scale: 1.01 }}

                className={`${styles.zone} ${dragging ? styles.dragging : ""}`}

                onClick={() => inputRef.current.click()}

                onDragOver={(event) => {

                    event.preventDefault();

                    setDragging(true);

                }}

                onDragLeave={() => setDragging(false)}

                onDrop={handleDrop}

            >

                <UploadCloud

                    size={54}

                    className={styles.uploadIcon}

                />

                <h2>

                    Upload Department Documents

                </h2>

                <p>

                    Drag & Drop documents here or click to browse.

                </p>

                <button

                    type="button"

                    className={styles.browseButton}

                >

                    Browse Files

                </button>

                <input

                    ref={inputRef}

                    hidden

                    multiple

                    type="file"

                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"

                    onChange={handleBrowse}

                />

                <div className={styles.supported}>

                    Supported:

                    {

                        supportedFormats.map(format => (

                            <span

                                key={format}

                            >

                                {format}

                            </span>

                        ))

                    }

                </div>

            </motion.div>

            {

                selectedFiles.length > 0 && (

                    <div className={styles.files}>

                        {

                            selectedFiles.map((file, index) => (

                                <motion.div

                                    key={index}

                                    initial={{

                                        opacity: 0,

                                        y: 10

                                    }}

                                    animate={{

                                        opacity: 1,

                                        y: 0

                                    }}

                                    className={styles.fileCard}

                                >

                                    <div className={styles.left}>

                                        <FileText size={20} />

                                        <div>

                                            <h4>

                                                {file.name}

                                            </h4>

                                            <p>

                                                {(file.size / 1024 / 1024).toFixed(2)} MB

                                            </p>

                                        </div>

                                    </div>

                                    <div className={styles.right}>

                                        {

                                            uploading

                                                ?

                                                <span className={styles.uploading}>

                                                    Uploading...

                                                </span>

                                                :

                                                <CheckCircle

                                                    className={styles.success}

                                                    size={20}

                                                />

                                        }

                                        <button

                                            type="button"

                                            onClick={(event) => {

                                                event.stopPropagation();

                                                removeFile(index);

                                            }}

                                        >

                                            <X size={18} />

                                        </button>

                                    </div>

                                </motion.div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}