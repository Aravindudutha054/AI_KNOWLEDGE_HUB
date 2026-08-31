import {
    Eye,
    Download,
    Trash2,
    FileText
} from "lucide-react";

import styles from "./DocumentRow.module.css";

export default function DocumentRow({

    document,

    onPreview,

    onDownload,

    onDelete

}) {

    const uploadedBy = document.uploadedBy?.fullName || "—";

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

    const type =

        document.mimeType === "application/pdf"

            ? "PDF"

            : document.mimeType?.includes("word")

            ? "DOCX"

            : "FILE";

    const uploadedAt = new Date(

        document.createdAt

    ).toLocaleDateString(

        "en-IN",

        {

            day: "2-digit",

            month: "short",

            year: "numeric"

        }

    );

    return (

        <tr>

            {/* Document */}

            <td>

                <div className={styles.document}>

                    <div className={styles.icon}>

                        <FileText size={18} />

                    </div>

                    <span>

                        {document.name}

                    </span>

                </div>

            </td>

            {/* Size */}

            <td>

                {formatFileSize(document.fileSize)}

            </td>

            {/* Type */}

            <td>

                {type}

            </td>

            {/* Uploaded By */}

            <td>

                {uploadedBy}

            </td>

            {/* Date */}

            <td>

                {uploadedAt}

            </td>

            {/* Status */}

            <td>

                <span

                    className={`${styles.status} ${
                        document.status === "Indexed"

                            ? styles.active

                            : styles.processing
                    }`}

                >

                    {document.status}

                </span>

            </td>

            {/* Actions */}

            <td>

                <div className={styles.actions}>

                    <button

                        title="Preview"

                        onClick={() =>

                            onPreview?.(

                                document

                            )

                        }

                    >

                        <Eye size={16} />

                    </button>

                    <button

                        title="Download"

                        onClick={() =>

                            onDownload?.(

                                document

                            )

                        }

                    >

                        <Download size={16} />

                    </button>

                    <button

                        title="Delete"

                        className={styles.delete}

                        onClick={() =>

                            onDelete?.(

                                document

                            )

                        }

                    >

                        <Trash2 size={16} />

                    </button>

                </div>

            </td>

        </tr>

    );

}