import { Router } from "express";

import auth from "../middleware/auth.js";
import { trackEvent } from "../analytics/analytics.middleware.js";
import { ANALYTICS_EVENT_TYPES } from "../analytics/analytics.constants.js";

import authorize from "../middleware/authorize.js";

import upload from "../middleware/upload.js";

import {

    ROLES

} from "../constants/roles.js";

import * as documentController from "../controllers/document.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/",

    auth,

    trackEvent(

        ANALYTICS_EVENT_TYPES.SEARCH,

        (req) => ({

            query: req.query.search || ""

        })

    ),

    documentController.getDocuments

);

router.get(

    "/stats",

    auth,

    documentController.getDocumentStats

);

router.get(

    "/:id",

    trackEvent(

        ANALYTICS_EVENT_TYPES.DOCUMENT_VIEW,

        (req) => ({

            resourceId: req.params.id,

            resourceType: "Document"

        })

    ),

    documentController.getDocument

);

router.get(

    "/:id/download",

    trackEvent(

        ANALYTICS_EVENT_TYPES.DOCUMENT_DOWNLOAD,

        (req) => ({

            resourceId: req.params.id,

            resourceType: "Document"

        })

    ),

    documentController.downloadDocument

);

router.post(

    "/",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    upload.single("file"),

    documentController.uploadDocument

);

router.delete(

    "/:id",

    authorize(

        ROLES.ADMIN,

        ROLES.SUPER_ADMIN

    ),

    documentController.deleteDocument

);

export default router;