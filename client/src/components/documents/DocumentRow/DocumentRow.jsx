import {
    FileText,
    Eye,
    Download,
    Trash2
} from "lucide-react";

import styles from "./DocumentRow.module.css";

export default function DocumentRow({

    document,

    onPreview,

    onDownload,

    onDelete

}) {

    const extension =
        document.name
            ?.split(".")
            .pop()
            ?.toUpperCase() || "FILE";

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

    const uploadedBy =
        document.uploadedBy?.fullName ||
        document.uploadedBy?.name ||
        "IT Admin";

    const statusClass = {

        Indexed: styles.indexed,

        Processing: styles.processing,

        Failed: styles.failed

    };

    return (

        <tr>

            {/* Document */}

            <td>

                <div className={styles.document}>

                    <div className={styles.icon}>

                        <FileText size={20} />

                    </div>

                    <div>

                        <h4>

                            {document.name}

                        </h4>

                        <small>

                            {extension}

                        </small>

                    </div>

                </div>

            </td>

            {/* File Type */}

            <td>

                {extension}

            </td>

            {/* File Size */}

            <td>

                {

                    document.fileSize

                        ? `${(document.fileSize / 1024 / 1024).toFixed(2)} MB`

                        : "--"

                }

            </td>

            {/* Uploaded By */}

            <td>

                {uploadedBy}

            </td>

            {/* Upload Date */}

            <td>

                {uploadedAt}

            </td>

            {/* Status */}

            <td>

                <span

                    className={`${styles.status} ${statusClass[document.status] || styles.processing}`}

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

                            onPreview?.(document)

                        }

                    >

                        <Eye size={16} />

                    </button>

                    <button

                        title="Download"

                        onClick={() =>

                            onDownload?.(document)

                        }

                    >

                        <Download size={16} />

                    </button>

                    <button

                        title="Delete"

                        className={styles.delete}

                        onClick={() =>

                            onDelete?.(document)

                        }

                    >

                        <Trash2 size={16} />

                    </button>

                </div>

            </td>

        </tr>

    );

}