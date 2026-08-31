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

const getDocumentType = document => {
    const extension =
        document?.name?.split(".").pop()?.toUpperCase() ||
        document?.fileName?.split(".").pop()?.toUpperCase() ||
        "FILE";

    return extension;
};

export default function PreviewModal({ document, url, onClose, onDownload }) {
    if (!document) return null;

    const fileType = getDocumentType(document);
    const previewUrl = url || document.fileUrl;
    const isPdf = document.mimeType === "application/pdf" || fileType === "PDF";

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
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.96, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onClick={event => event.stopPropagation()}
                >
                    <div className={styles.header}>
                        <div className={styles.titleBlock}>
                            <FileText size={24} />
                            <div>
                                <h2>{document.name}</h2>
                                <span>{fileType}</span>
                            </div>
                        </div>

                        <button type="button" className={styles.closeButton} onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.metaRow}>
                        <div>
                            <span className={styles.metaLabel}>File Size</span>
                            <strong>{formatFileSize(document.fileSize)}</strong>
                        </div>

                        <div>
                            <span className={styles.metaLabel}>Uploaded By</span>
                            <strong>{document.uploadedBy?.fullName || "IT Admin"}</strong>
                        </div>

                        <div>
                            <span className={styles.metaLabel}>Uploaded</span>
                            <strong>{formatDate(document.createdAt)}</strong>
                        </div>

                        <div>
                            <span className={styles.metaLabel}>Status</span>
                            <strong className={statusClass}>
                                <Circle size={10} />
                                {document.status}
                            </strong>
                        </div>
                    </div>

                    <div className={styles.infoGrid}>
                        <div>
                            <Building2 size={16} />
                            <span>{document.department?.name || "Information Technology"}</span>
                        </div>

                        <div>
                            <User size={16} />
                            <span>{document.uploadedBy?.fullName || "IT Admin"}</span>
                        </div>

                        <div>
                            <Calendar size={16} />
                            <span>{formatDate(document.createdAt)}</span>
                        </div>
                    </div>

                    <div className={styles.previewArea}>
                        {isPdf && previewUrl ? (
                            <iframe src={previewUrl} title="Preview" />
                        ) : (
                            <div className={styles.placeholder}>
                                <FileText size={72} />
                                <h3>Preview available in metadata only</h3>
                                <p>Download the file to open it locally.</p>
                            </div>
                        )}
                    </div>

                    <div className={styles.footer}>
                        <button
                            type="button"
                            className={styles.downloadButton}
                            onClick={() => onDownload?.(document)}
                        >
                            <Download size={18} />
                            Download
                        </button>

                        <button type="button" className={styles.closeFooterButton} onClick={onClose}>
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
