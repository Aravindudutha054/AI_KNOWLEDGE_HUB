import Document from "../models/Document.js";

export const getPipeline = async (departmentId) => {

    const documents = await Document.find({
        department: departmentId
    })
        .populate("uploadedBy", "fullName")
        .sort({ createdAt: -1 });

    const summary = {
        uploaded: documents.length,
        processing: documents.filter(d => d.status === "Processing").length,
        indexed: documents.filter(d => d.status === "Indexed").length,
        failed: documents.filter(d => d.status === "Failed").length,
        queue: documents.filter(d => d.status === "Uploaded").length
    };

    return {
        summary,
        documents
    };
};