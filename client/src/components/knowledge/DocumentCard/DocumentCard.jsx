import { motion } from "framer-motion";

import {

    FileText,

    FileSpreadsheet,

    FileImage,

    FileArchive,

    Download,

    Eye,

    Calendar,

    User,

    Building2,

    Tag

} from "lucide-react";

import styles from "./DocumentCard.module.css";

const fileIcons = {

    PDF: FileText,

    DOCX: FileText,

    DOC: FileText,

    XLSX: FileSpreadsheet,

    XLS: FileSpreadsheet,

    PNG: FileImage,

    JPG: FileImage,

    JPEG: FileImage,

    ZIP: FileArchive

};

export default function DocumentCard({

    document,

    onOpen,

    onDownload

}) {

    const Icon =

        fileIcons[document.fileType] ||

        FileText;

    return (

        <motion.div

            whileHover={{

                y:-6

            }}

            transition={{

                duration:.25

            }}

            className={styles.card}

        >

            {/* ========================= */}
            {/* Header */}
            {/* ========================= */}

            <div className={styles.header}>

                <div className={styles.fileIcon}>

                    <Icon size={24}/>

                </div>

                <span className={styles.type}>

                    {document.fileType}

                </span>

            </div>

            {/* ========================= */}
            {/* Body */}
            {/* ========================= */}

            <div className={styles.body}>

                <h3>

                    {document.title}

                </h3>

                <div className={styles.info}>

                    <span>

                        <Building2 size={14}/>

                        {document.department?.name || "—"}

                    </span>

                    <span>

                        <Tag size={14}/>

                        {document.category}

                    </span>

                    <span>

                        <User size={14}/>

                        {document.uploadedBy?.fullName || "—"}

                    </span>

                    <span>

                        <Calendar size={14}/>

                        {document.updatedAt}

                    </span>

                </div>

            </div>

            {/* ========================= */}
            {/* Footer */}
            {/* ========================= */}

            <div className={styles.footer}>

                <button

                    onClick={()=>

                        onOpen?.(document)

                    }

                    className={styles.primary}

                >

                    <Eye size={16}/>

                    Open

                </button>

                <button

                    onClick={()=>

                        onDownload?.(document)

                    }

                    className={styles.secondary}

                >

                    <Download size={16}/>

                    Download

                </button>

            </div>

        </motion.div>

    );

}