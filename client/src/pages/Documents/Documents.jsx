import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DocumentsLayout from "../../components/documents/DocumentsLayout";
import DocumentsHome from "../../components/documents/DocumentsHome";
import DocumentStats from "../../../components/admin/documents/DocumentStats";
import DocumentToolbar from "../../../components/admin/documents/DocumentToolbar";
import * as documentService from "../../services/document.service";
import * as statsService from "../../../services/documentStats.service";

export default function Documents() {

    /* ==========================================================
       USER
    ========================================================== */

    const [user] = useState({

        id: 1,

        name: "Balaji",

        role: "Employee",

        department: "Information Technology"

    });

    /* ==========================================================
       FILTERS
    ========================================================== */

    const [search, setSearch] = useState("");

    const [department, setDepartment] = useState("All");

    const [category, setCategory] = useState("All");

    const [status, setStatus] = useState("All");

    const [fileType, setFileType] = useState("All");

    const [sort, setSort] = useState("latest");

    /* ==========================================================
       DOCUMENT STATE
    ========================================================== */

    const [documents, setDocuments] = useState([]);

    const [selectedDocument, setSelectedDocument] = useState(null);

    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);

    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showModal, setShowModal] = useState(false);

    /* ==========================================================
       INITIAL LOAD
    ========================================================== */

    useEffect(() => {

        loadDocuments();

    }, []);

    /* ==========================================================
       LOAD DOCUMENTS
    ========================================================== */

    const loadDocuments = async () => {

        setLoading(true);

        try {

            const [

                documents,

                statistics

            ] = await Promise.all([

                documentService.getDocuments(),

                statsService.getDocumentStats()

            ]);

            setDocuments(documents);

            setStats(statistics);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    /* ==========================================================
       FILTERED DOCUMENTS
    ========================================================== */

    const filteredDocuments = useMemo(() => {

        let data = [...documents];

        if (search) {

            data = data.filter(document =>

                (document.originalName || document.name)

                    ?.toLowerCase()

                    .includes(search.toLowerCase())

            );

        }

        if (status !== "All") {

            data = data.filter(document =>

                document.status === status

            );

        }

        if (fileType !== "All") {

            data = data.filter(document =>

                document.mimeType

                    ?.toLowerCase()

                    .includes(fileType.toLowerCase())

            );

        }

        switch (sort) {

            case "name":

                data.sort((a, b) =>

                    a.originalName.localeCompare(

                        b.originalName

                    )

                );

                break;

            case "size":

                data.sort((a, b) =>

                    b.fileSize - a.fileSize

                );

                break;

            case "oldest":

                data.sort((a, b) =>

                    new Date(a.createdAt) -

                    new Date(b.createdAt)

                );

                break;

            default:

                data.sort((a, b) =>

                    new Date(b.createdAt) -

                    new Date(a.createdAt)

                );

        }

        return data;

    }, [

        documents,

        search,

        status,

        fileType,

        sort

    ]);

    /* ==========================================================
       ACTIONS
    ========================================================== */

    const handleUpload = (files) => {
        setUploadedFiles(files);
        setUploading(true);
        setUploadProgress(0);
        let value = 0;
        const timer = setInterval(() => {
            value += 10;
            setUploadProgress(value);
            if (value >= 100) {
                clearInterval(timer);
                setUploading(false);
                setUploadProgress(100);
            }
        }, 200);
    };

    const handleRefresh = () => {
        loadDocuments();
    };

    const handlePreview = (document) => {

        setSelectedDocument(document);

    };

    const handleDownload = (document) => {

        console.log("Download", document);

    };

    const handleRename = (document) => {

        console.log("Rename", document);

    };

    const handleDelete = async (document) => {

        try {

            await documentService.deleteDocument(

                document._id

            );

            loadDocuments();

        } catch (error) {

            console.error(error);

        }

    };

    const handleSave = async (document) => {

        try {

            await documentService.uploadDocument(document);

            await loadDocuments();

            setShowModal(false);

        } catch (error) {

            console.error(error);

        }

    };

    const handleClosePreview = () => {

        setSelectedDocument(null);

    };

    /* ==========================================================
       UI
    ========================================================== */

    return (

        <DashboardLayout>

            <DocumentsLayout>

                <DocumentStats

                    stats={stats}

                />

                <DocumentToolbar

                    search={search}

                    status={status}

                    fileType={fileType}

                    sort={sort}

                    onSearch={setSearch}

                    onStatus={setStatus}

                    onFileType={setFileType}

                    onSort={setSort}

                    onRefresh={loadDocuments}

                />

                <DocumentsHome

                    user={user}

                    loading={loading}

                    uploading={uploading}
                    uploadProgress={uploadProgress}
                    uploadedFiles={uploadedFiles}

                    search={search}

                    department={department}

                    category={category}

                    documents={filteredDocuments}

                    selectedDocument={selectedDocument}

                    onSearch={setSearch}

                    onDepartmentChange={setDepartment}

                    onCategoryChange={setCategory}

                    onUpload={handleUpload}
                    onRefresh={handleRefresh}

                    onPreview={handlePreview}

                    onDownload={handleDownload}

                    onRename={handleRename}

                    onDelete={handleDelete}

                    onClosePreview={handleClosePreview}

                />

            </DocumentsLayout>

        </DashboardLayout>

    );

}