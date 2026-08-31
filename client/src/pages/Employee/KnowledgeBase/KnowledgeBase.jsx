import { useEffect, useMemo, useState } from "react";

import KnowledgeHome from "../../../components/knowledge/KnowledgeHome";
import PreviewModal from "../../../components/documents/PreviewModal";

import * as knowledgeService from "../../../services/knowledge.service";

export default function KnowledgeBase() {

    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedDocument, setSelectedDocument] = useState(null);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");

    /* ==========================================================
       LOAD KNOWLEDGE
    ========================================================== */

    const loadKnowledge = async () => {

        try {

            setLoading(true);

            const data =
                await knowledgeService.getKnowledgeDocumentsList();

            const normalizedDocuments = data.map(document => ({

                id: document._id,

                _id: document._id,

                title: document.name,

                fileName: document.originalName,

                department: document.department?.name,

                category: "General",

                fileType:
                    document.mimeType
                        ?.split("/")
                        ?.pop()
                        ?.toUpperCase() || "FILE",

                uploadedBy:
                    document.uploadedBy?.fullName,

                updatedAt:
                    new Date(document.updatedAt)
                        .toLocaleDateString(),

                createdAt: document.createdAt,

                size: document.fileSize,

                status: document.status,

                fileUrl: document.fileUrl,

                downloads: 0,

                original: document

            }));

            setDocuments(normalizedDocuments);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadKnowledge();

    }, []);

    /* ==========================================================
       FILTER DOCUMENTS
    ========================================================== */

    const filteredDocuments = useMemo(() => {

        return documents.filter(document => {

            const matchesSearch =
                search === "" ||

                document.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                document.fileName
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCategory =
                category === "" ||
                document.category === category;

            const matchesDepartment =
                department === "" ||
                document.department === department;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesDepartment
            );

        });

    }, [

        documents,

        search,

        category,

        department

    ]);

    /* ==========================================================
       SORT
    ========================================================== */

    const recentDocuments = useMemo(() => {

        return [...filteredDocuments]

            .sort(

                (a, b) =>

                    new Date(b.createdAt) -
                    new Date(a.createdAt)

            )

            .slice(0, 5);

    }, [filteredDocuments]);

    const popularDocuments = useMemo(() => {

        return [...filteredDocuments]

            .sort(

                (a, b) =>

                    b.downloads - a.downloads

            )

            .slice(0, 5);

    }, [filteredDocuments]);

    /* ==========================================================
       ACTIONS
    ========================================================== */

    const handleOpenDocument = document => {

        setSelectedDocument(document);

    };

    const handleDownload = document => {

        window.open(document.fileUrl, "_blank");

    };

    /* ==========================================================
       UI
    ========================================================== */

    return (
        <>

            <KnowledgeHome

                user={null}

                loading={loading}

                search={search}

                category={category}

                department={department}

                documents={filteredDocuments}

                recentDocuments={recentDocuments}

                popularDocuments={popularDocuments}

                onSearch={setSearch}

                onCategoryChange={setCategory}

                onDepartmentChange={setDepartment}

                onOpenDocument={handleOpenDocument}

                onDownload={handleDownload}

            />

            <PreviewModal

                document={selectedDocument}

                onClose={() => setSelectedDocument(null)}

                onDownload={handleDownload}

            />

        </>
    );

}