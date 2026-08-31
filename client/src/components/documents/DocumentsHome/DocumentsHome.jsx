import { motion } from "framer-motion";

import UploadZone from "../UploadZone";
import UploadProgress from "../UploadProgress";
import DocumentToolbar from "../DocumentToolbar";
import DocumentTable from "../DocumentTable";
import PreviewModal from "../PreviewModal";
import EmptyDocuments from "../EmptyDocuments";

import styles from "./DocumentsHome.module.css";

const container = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: .08

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

            duration: .45

        }

    }

};

export default function DocumentsHome({

    user,

    loading,

    uploading,
    uploadProgress,
    uploadedFiles,

    search,

    department,

    category,

    documents,

    selectedDocument,

    canUpload = true,
    canRename = true,
    canDelete = true,

    onSearch,

    onDepartmentChange,

    onCategoryChange,

    onUpload,
    onRefresh,

    onPreview,

    onDownload,

    onRename,

    onDelete,

    onClosePreview

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.container}

        >

            {/* ====================================== */}
            {/* Header */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.header}

            >

                <div>

                    <h1>

                        Document Management

                    </h1>

                    <p>

                        Upload, organize and manage department knowledge.

                    </p>

                </div>

            </motion.div>

            {/* ====================================== */}
            {/* Upload */}
            {/* ====================================== */}

            {
    canUpload && uploading && (

        <motion.div variants={item}>

            <UploadZone

                uploading={uploading}

                onUpload={onUpload}

            />

        </motion.div>

    )
}

            {/* ====================================== */}
            {/* Upload Progress */}
            {/* ====================================== */}

            {

                uploading &&

                <motion.div variants={item}>

                    <UploadProgress
                        files={uploadedFiles}
                        progress={uploadProgress}
                        completed={uploadProgress === 100}
                    />

                </motion.div>

            }

            {/* ====================================== */}
            {/* Toolbar */}
            {/* ====================================== */}

            <motion.div

                variants={item}

            >

                <DocumentToolbar

                    search={search}

                    department={department}

                    category={category}

                    onSearch={onSearch}

                    onDepartmentChange={onDepartmentChange}

                    onCategoryChange={onCategoryChange}

                    onRefresh={onRefresh}

                />

            </motion.div>

            {/* ====================================== */}
            {/* Table */}
            {/* ====================================== */}

            <motion.div

                variants={item}

            >

                {

                    documents.length > 0

                        ?

                        <DocumentTable

                            documents={documents}

                            loading={loading}

                            onPreview={onPreview}

                            onDownload={onDownload}

                            onRename={onRename}

                            onDelete={onDelete}

                        />

                        :

                        <EmptyDocuments />

                }

            </motion.div>

            {/* ====================================== */}
            {/* Preview */}
            {/* ====================================== */}

            {

                selectedDocument &&

                <PreviewModal

                    document={selectedDocument}

                    onClose={onClosePreview}

                    onDownload={onDownload}

                />

            }

        </motion.div>

    );

}