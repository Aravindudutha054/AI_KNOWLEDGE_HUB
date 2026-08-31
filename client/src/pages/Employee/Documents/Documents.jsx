import { useEffect, useState } from "react";

import DocumentsHome from "../../../components/documents/DocumentsHome";

import * as documentService from "../../../services/document.service";

export default function Documents() {

    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [category, setCategory] = useState("");

    const [selectedDocument, setSelectedDocument] = useState(null);

    const loadDocuments = async () => {

        try {

            setLoading(true);

            const data =
                await documentService.getDocuments();

            setDocuments(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadDocuments();

    }, []);

    return (

        <DocumentsHome

            user={null}

            loading={loading}

            uploading={false}
            uploadProgress={0}
            uploadedFiles={[]}

            search={search}
            department={department}
            category={category}

            documents={documents}

            selectedDocument={selectedDocument}

            onSearch={setSearch}
            onDepartmentChange={setDepartment}
            onCategoryChange={setCategory}

            onUpload={() => {}}

            onRefresh={loadDocuments}

            onPreview={setSelectedDocument}

            onDownload={() => {}}

            onRename={() => {}}

            onDelete={() => {}}

            onClosePreview={() => setSelectedDocument(null)}

        />

    );

}