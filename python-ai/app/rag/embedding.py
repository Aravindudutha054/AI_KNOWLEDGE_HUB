from google import genai

from app.core.config import GEMINI_API_KEY


class EmbeddingModel:

    client = genai.Client(api_key=GEMINI_API_KEY)

    MODEL = "gemini-embedding-001"

    @classmethod
    def encode(cls, text):

        response = cls.client.models.embed_content(
            model=cls.MODEL,
            contents=text,
            config={
                "task_type": "RETRIEVAL_QUERY"
            }
        )

        return response.embeddings[0].values

    @classmethod
    def encode_batch(cls, texts):

        embeddings = []

        for text in texts:

            response = cls.client.models.embed_content(
                model=cls.MODEL,
                contents=text,
                config={
                    "task_type": "RETRIEVAL_DOCUMENT"
                }
            )

            embeddings.append(
                response.embeddings[0].values
            )

        return embeddings