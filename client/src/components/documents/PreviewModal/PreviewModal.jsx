import { AnimatePresence, motion } from "framer-motion";

import {
    X,
    FileText,
    Download,
    Circle,
    Calendar,
    User,
    Building2
} from "lucide-react";

import styles from "./PreviewModal.module.css";

const formatFileSize = bytes => {
    if (!bytes) return "--";

    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unit = 0;

    while (size >= 1024 && unit < units.length - 1) {
        size /= 1024;
        unit++;
    }

    return `${size.toFixed(1)} ${units[unit]}`;
};

const formatDate = date => {
    if (!date) return "--";

    return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};

export default function PreviewModal({

    document,

    onClose,

    onDownload

}) {

    if (!document) return null;

    const previewUrl = document.fileUrl;

    const fileType = document.fileType || "FILE";

    const isPdf = fileType === "PDF";

    const statusClass =
        document.status === "Indexed"
            ? styles.indexed
            : document.status === "Processing"
            ? styles.processing
            : styles.failed;

    return (

        <AnimatePresence>

            <motion.div

                className={styles.overlay}

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                exit={{ opacity: 0 }}

                onClick={onClose}

            >

                <motion.div

                    className={styles.modal}

                    initial={{
                        scale: .96,
                        opacity: 0
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1
                    }}

                    exit={{
                        scale: .96,
                        opacity: 0
                    }}

                    transition={{
                        duration: .22
                    }}

                    onClick={e => e.stopPropagation()}

                >

                    {/* Header */}

                    <div className={styles.header}>

                        <div className={styles.titleBlock}>

                            <FileText size={24}/>

                            <div>

                                <h2>

                                    {document.title}

                                </h2>

                                <span>

                                    {fileType}

                                </span>

                            </div>

                        </div>

                        <button

                            type="button"

                            className={styles.closeButton}

                            onClick={onClose}

                        >

                            <X size={20}/>

                        </button>

                    </div>

                    {/* Meta */}

                    <div className={styles.metaRow}>

                        <div>

                            <span className={styles.metaLabel}>

                                File Size

                            </span>

                            <strong>

                                {formatFileSize(document.size)}

                            </strong>

                        </div>

                        <div>

                            <span className={styles.metaLabel}>

                                Uploaded By

                            </span>

                            <strong>

                                {document.uploadedBy?.fullName || "—"}

                            </strong>

                        </div>

                        <div>

                            <span className={styles.metaLabel}>

                                Uploaded

                            </span>

                            <strong>

                                {formatDate(document.createdAt)}

                            </strong>

                        </div>

                        <div>

                            <span className={styles.metaLabel}>

                                Status

                            </span>

                            <strong className={statusClass}>

                                <Circle size={10}/>

                                {document.status}

                            </strong>

                        </div>

                    </div>

                    {/* Information */}

                    <div className={styles.infoGrid}>

                        <div>

                            <Building2 size={16}/>

                            <span>

                                {document.department?.name || "—"}

                            </span>

                        </div>

                        <div>

                            <User size={16}/>

                            <span>

                                {document.uploadedBy?.fullName || "—"}

                            </span>

                        </div>

                        <div>

                            <Calendar size={16}/>

                            <span>

                                {formatDate(document.createdAt)}

                            </span>

                        </div>

                    </div>

                    {/* Preview */}

                    <div className={styles.previewArea}>

                        {

                            isPdf && previewUrl

                                ?

                                <iframe

                                    src={previewUrl}

                                    title={document.title}

                                />

                                :

                                <div className={styles.placeholder}>

                                    <FileText size={72}/>

                                    <h3>

                                        Preview not available

                                    </h3>

                                    <p>

                                        Download this document to view it locally.

                                    </p>

                                </div>

                        }

                    </div>

                    {/* Footer */}

                    <div className={styles.footer}>

                        <button

                            type="button"

                            className={styles.downloadButton}

                            onClick={() => onDownload?.(document)}

                        >

                            <Download size={18}/>

                            Download

                        </button>

                        <button

                            type="button"

                            className={styles.closeFooterButton}

                            onClick={onClose}

                        >

                            Close

                        </button>

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );

}