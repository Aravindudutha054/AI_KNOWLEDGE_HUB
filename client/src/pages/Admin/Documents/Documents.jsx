import { useEffect, useMemo, useState } from "react";

import DocumentsHome from "../../../components/admin/documents/DocumentsHome/DocumentsHome";
import * as documentService from "../../../services/document.service";

export default function Documents() {

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const [fileType, setFileType] = useState("All");

    const [documents, setDocuments] = useState([]);

    const [stats, setStats] = useState({

        total: 0,

        indexed: 0,

        processing: 0,

        failed: 0,

        storage: 0

    });

    const [selectedDocument, setSelectedDocument] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDocuments();

    }, []);

    const loadDocuments = async () => {

        setLoading(true);

        try {

            const [

                documents,

                statistics

            ] = await Promise.all([

                documentService.getDocuments(),

                documentService.getDocumentStats()

            ]);

            setDocuments(documents);

            setStats(statistics);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const filteredDocuments = useMemo(() => {

        return documents.filter(document =>

            (document.originalName || document.name)
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [documents, search]);

    const handleUpload = () => {

        setSelectedDocument(null);

        setShowModal(true);

    };

    const handlePreview = (document) => {

        documentService.getDocument(document._id)

            .then(setSelectedDocument)

            .catch(error => console.error(error));

    };

    const handleClosePreview = () => {

        setSelectedDocument(null);

    };

    const handleDownload = (selectedDocument) => {

        const downloadUrl = selectedDocument.fileUrl;

        if (downloadUrl) {

            const link = window.document.createElement("a");

            const fileName = selectedDocument.originalName || selectedDocument.name || "document";

            fetch(downloadUrl)
                .then(response => {

                    if (!response.ok) {

                        throw new Error("Failed to download file");

                    }

                    return response.blob();

                })
                .then(blob => {

                    const objectUrl = window.URL.createObjectURL(blob);

                    link.href = objectUrl;

                    link.download = fileName;

                    document.body.appendChild(link);

                    link.click();

                    link.remove();

                    window.URL.revokeObjectURL(objectUrl);

                })
                .catch(error => {

                    console.error(error);

                });

        }

    };

    const handleDelete = async (document) => {

        try {

            await documentService.deleteDocument(

                document._id

            );

            await loadDocuments();

        } catch (error) {

            console.error(error);

        }

    };

    const handleSave = async (document) => {

        try {

            console.log("Uploading...", document);

            await documentService.uploadDocument(document);

            await loadDocuments();

            setShowModal(false);

        } catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ||

                "Upload failed"

            );

        }

    };

    return(

        <DocumentsHome

            documents={filteredDocuments}

            stats={stats}

            loading={loading}

            search={search}

            status={status}

            fileType={fileType}

            showModal={showModal}

            selectedDocument={selectedDocument}

            onSearch={setSearch}

            onStatusChange={setStatus}

            onFileTypeChange={setFileType}

            onUpload={handleUpload}

            onPreview={handlePreview}

            onDownload={handleDownload}

            onDelete={handleDelete}

            onSave={handleSave}

            onClosePreview={handleClosePreview}

            onClose={()=>setShowModal(false)}

        />

    );

}