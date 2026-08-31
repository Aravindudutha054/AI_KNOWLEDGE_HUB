import * as chatService from "../services/chat.service.js";

export const askAI = async (req, res) => {

    try {

        console.log("========== CHAT ==========");
        console.log("Body:", req.body);
        console.log("User:", req.user.fullName);
        console.log("Department:", req.user.department.code);

        const result = await chatService.askAI({

            conversationId: req.body.conversationId,

            question: req.body.question,

            user: req.user

        });

        res.json(result);

    } catch (error) {

        console.error("CHAT ERROR");
        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
