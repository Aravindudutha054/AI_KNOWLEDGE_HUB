import { AI_SERVICE } from "../config/ai.js";

class AIService {

    async indexDocument(payload) {

        const response = await fetch(

            `${AI_SERVICE.BASE_URL}/index`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payload)

            }

        );

        if (!response.ok) {

            throw new Error(

                "Indexing service unavailable"

            );

        }

        return response.json();

    }

    async askQuestion(payload) {

        const response = await fetch(

            `${AI_SERVICE.BASE_URL}/chat`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payload)

            }

        );

        if (!response.ok) {

            throw new Error(

                "Chat service unavailable"

            );

        }

        return response.json();

    }

}

export default new AIService();