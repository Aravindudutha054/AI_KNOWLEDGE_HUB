import { Router } from "express";

import auth from "../middleware/auth.js";

import * as controller from "../controllers/conversation.controller.js";

const router = Router();

router.use(auth);

router.get(

    "/",

    controller.getConversations

);

router.post(

    "/",

    controller.createConversation

);

router.get(

    "/:id/messages",

    controller.getMessages

);

export default router;
