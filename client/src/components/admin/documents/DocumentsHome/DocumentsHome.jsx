import { motion } from "framer-motion";

import DocumentToolbar from "../DocumentToolbar";
import DocumentTable from "../DocumentTable";
import UploadDocumentModal from "../UploadDocumentModal";
import PreviewModal from "../PreviewModal";
import EmptyDocuments from "../EmptyDocuments";
import DocumentStats from "../DocumentStats";

import styles from "./DocumentsHome.module.css";

const container = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: 0.08

        }

    }

};

const item = {

    hidden: {

        opacity: 0,

        y: 20

    },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: 0.4

        }

    }

};

export default function DocumentsHome({

    documents,

    stats,

    loading,

    search,

    status,

    fileType,

    showModal,

    selectedDocument,

    onSearch,

    onStatusChange,

    onFileTypeChange,

    onUpload,

    onPreview,

    onDownload,

    onDelete,

    onSave,

    onClose,

    onClosePreview

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.container}

        >

            <motion.div

                variants={item}

                className={styles.header}

            >

                <div>

                    <h1>Document Management</h1>

                    <p>Upload and manage department documents.</p>

                </div>

                <div className={styles.departmentBanner}>

                    <div>

                        <h2>Information Technology</h2>

                        <p>Department Knowledge Repository</p>

                    </div>

                </div>

            </motion.div>

            <motion.div variants={item}>

                <DocumentStats stats={stats} />

            </motion.div>

            <motion.div variants={item}>

                <DocumentToolbar

                    search={search}

                    status={status}

                    fileType={fileType}

                    onSearch={onSearch}

                    onStatusChange={onStatusChange}

                    onFileTypeChange={onFileTypeChange}

                    onUpload={onUpload}

                />

            </motion.div>

            <motion.div variants={item}>

                {

                    documents.length > 0

                        ? (

                            <DocumentTable

                                documents={documents}

                                loading={loading}

                                onPreview={onPreview}

                                onDownload={onDownload}

                                onDelete={onDelete}

                            />

                        )

                        : (

                            <EmptyDocuments onUpload={onUpload} />

                        )

                }

            </motion.div>

            {

                showModal && (

                    <UploadDocumentModal

                        document={null}

                        onSave={onSave}

                        onClose={onClose}

                    />

                )

            }

            {

                selectedDocument && (

                    <PreviewModal

                        document={selectedDocument}

                        url={selectedDocument.fileUrl}

                        onClose={onClosePreview}

                        onDownload={onDownload}

                    />

                )

            }

        </motion.div>

    );

}
