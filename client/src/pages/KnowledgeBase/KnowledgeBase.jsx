import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import KnowledgeLayout from "../../components/knowledge/KnowledgeLayout";
import KnowledgeHome from "../../components/knowledge/KnowledgeHome";

export default function KnowledgeBase() {

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

    const [category, setCategory] = useState("All");

    const [department, setDepartment] = useState("All");

    /* ==========================================================
       DATA
    ========================================================== */

    const [documents, setDocuments] = useState([]);

    const [recentDocuments, setRecentDocuments] = useState([]);

    const [popularDocuments, setPopularDocuments] = useState([]);

    const [loading, setLoading] = useState(true);

    /* ==========================================================
       INITIAL LOAD
    ========================================================== */

    useEffect(() => {

        loadKnowledgeBase();

    }, []);

    /* ==========================================================
       LOAD MOCK DATA
    ========================================================== */

    const loadKnowledgeBase = () => {

        setLoading(true);

        setTimeout(() => {

            const docs = [

                {
                    id: 1,
                    title: "Employee Handbook.pdf",
                    department: "Human Resources",
                    category: "Policies",
                    fileType: "PDF",
                    updatedAt: "Today",
                    uploadedBy: "HR Team",
                    size: "2.4 MB",
                    downloads: 42
                },

                {
                    id: 2,
                    title: "VPN Setup Guide.pdf",
                    department: "Information Technology",
                    category: "Guides",
                    fileType: "PDF",
                    updatedAt: "Yesterday",
                    uploadedBy: "IT Team",
                    size: "1.8 MB",
                    downloads: 87
                },

                {
                    id: 3,
                    title: "Leave Policy.docx",
                    department: "Human Resources",
                    category: "Policies",
                    fileType: "DOCX",
                    updatedAt: "Monday",
                    uploadedBy: "HR Team",
                    size: "540 KB",
                    downloads: 61
                },

                {
                    id: 4,
                    title: "IT Security Policy.pdf",
                    department: "Information Technology",
                    category: "Security",
                    fileType: "PDF",
                    updatedAt: "2 Days Ago",
                    uploadedBy: "Security Team",
                    size: "3.2 MB",
                    downloads: 124
                },

                {
                    id: 5,
                    title: "Finance SOP.pdf",
                    department: "Finance",
                    category: "SOP",
                    fileType: "PDF",
                    updatedAt: "Last Week",
                    uploadedBy: "Finance Team",
                    size: "4.1 MB",
                    downloads: 35
                },

                {
                    id: 6,
                    title: "Company Guidelines.pdf",
                    department: "Administration",
                    category: "Guides",
                    fileType: "PDF",
                    updatedAt: "Last Week",
                    uploadedBy: "Admin Team",
                    size: "5.6 MB",
                    downloads: 70
                }

            ];

            setDocuments(docs);

            setRecentDocuments(docs.slice(0, 3));

            setPopularDocuments(

                [...docs]

                    .sort(

                        (a, b) =>

                            b.downloads - a.downloads

                    )

                    .slice(0, 3)

            );

            setLoading(false);

        }, 600);

    };

    /* ==========================================================
       FILTERED DOCUMENTS
    ========================================================== */

    const filteredDocuments = useMemo(() => {

        return documents.filter((document) => {

            const matchesSearch =

                document.title

                    .toLowerCase()

                    .includes(

                        search.toLowerCase()

                    );

            const matchesCategory =

                category === "All"

                    ||

                document.category === category;

            const matchesDepartment =

                department === "All"

                    ||

                document.department === department;

            return (

                matchesSearch

                &&

                matchesCategory

                &&

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
       ACTIONS
    ========================================================== */

    const handleOpenDocument = (document) => {

        console.log("Open", document);

    };

    const handleDownload = (document) => {

        console.log("Download", document);

    };

    /* ==========================================================
       UI
    ========================================================== */

    return (

        <DashboardLayout>

            <KnowledgeLayout>

                <KnowledgeHome

                    user={user}

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

            </KnowledgeLayout>

        </DashboardLayout>

    );

}