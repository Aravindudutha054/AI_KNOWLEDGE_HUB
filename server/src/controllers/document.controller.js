import asyncHandler from "../middleware/asyncHandler.js";
import analyticsEvents from "../analytics/analytics.events.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";
import ApiError from "../utils/ApiError.js";
import path from "path";

import * as documentService from "../services/document.service.js";

import {

    successResponse

} from "../utils/apiResponse.js";

const buildFileUrl = (req, filePath) => {
    if (!filePath) return null;

    const relativePath = path
        .normalize(filePath)
        .replace(/^src[\\/]/, "")
        .replace(/[\\/]/g, "/");

    const protocol =
        req.headers["x-forwarded-proto"]?.split(",")[0] ||
        req.protocol;

    return `${protocol}://${req.get("host")}/${relativePath}`;
};

export const getDocuments = asyncHandler(
    async (req, res) => {
        const documents =
            await documentService.getDocuments(
                req.user.department._id
            );
        const payload = documents.map(document => {
            const item = document.toObject();
            item.fileUrl =
                buildFileUrl(
                    req,
                    item.filePath
                );
            delete item.filePath;
            return item;
        });
        successResponse(
            res,
            "Documents fetched successfully",
            payload
        );
    }
);

export const uploadDocument = asyncHandler(

    async (req, res) => {

        const file = req.file;

        const document = await documentService.uploadAndIndexDocument(

    {

        name: req.body.name,

        originalName: file.originalname,

        department: req.user.department._id,

        uploadedBy: req.user._id,

        fileName: file.filename,

        filePath: file.path,

        mimeType: file.mimetype,

        fileSize: file.size

    },

    req.user.department,

    req.user

);

        await analyticsEvents.log({

            employee: req.user._id,

            department: req.user.department._id,

            type: ANALYTICS_EVENT_TYPES.DOCUMENT_UPLOAD,

            resourceId: document._id,

            resourceType: "Document"

        });

        successResponse(

            res,

            "Document uploaded successfully",

            document,

            201

        );

    }

);

export const getDocument = asyncHandler(

    async (req, res) => {

        const document = await documentService.getDocument(

            req.params.id,

            req.user.department._id

        );

        if (!document) {

            throw new ApiError(

                404,

                "Document not found"

            );

        }

        await analyticsEvents.log({

            employee: req.user._id,

            department: req.user.department._id,

            type: ANALYTICS_EVENT_TYPES.DOCUMENT_VIEW,

            resourceId: document._id,

            resourceType: "Document"

        });

        const payload = document.toObject();

        payload.fileUrl = buildFileUrl(req, payload.filePath);

        delete payload.filePath;

        successResponse(

            res,

            "Document fetched successfully",

            payload

        );

    }

);

export const downloadDocument = asyncHandler(

    async (req, res) => {

        const document = await documentService.getDocument(

            req.params.id,

            req.user.department._id

        );

        if (!document) {

            throw new ApiError(

                404,

                "Document not found"

            );

        }

        await analyticsEvents.log({

            employee: req.user._id,

            department: req.user.department._id,

            type: ANALYTICS_EVENT_TYPES.DOCUMENT_DOWNLOAD,

            resourceId: document._id,

            resourceType: "Document"

        });

        return res.download(document.filePath, document.originalName);

    }

);

export const deleteDocument = asyncHandler(

    async (req, res) => {

        await documentService.deleteDocument(

    req.params.id,

    req.user

);

        await analyticsEvents.log({

            employee: req.user._id,

            department: req.user.department._id,

            type: ANALYTICS_EVENT_TYPES.DOCUMENT_DELETE,

            resourceId: req.params.id,

            resourceType: "Document"

        });

        successResponse(

            res,

            "Document deleted successfully"

        );

    }

);

export const getDocumentStats = asyncHandler(

    async (req, res) => {

        const stats = await documentService.getDocumentStats(

            req.user.department._id

        );

        successResponse(

            res,

            "Document statistics fetched.",

            stats

        );

    }

);