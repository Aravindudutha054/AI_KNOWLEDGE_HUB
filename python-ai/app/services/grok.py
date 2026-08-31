from openai import OpenAI

from app.core.config import GROQ_API_KEY


class GrokService:

    MODEL = "openai/gpt-oss-120b"

    def __init__(self):

        print("Initializing Groq...")
        print("API Key Loaded:", bool(GROQ_API_KEY))
        print("Groq Model:", self.MODEL)

        self.client = OpenAI(
            api_key=GROQ_API_KEY,
            base_url="https://api.groq.com/openai/v1"
        )

        self.last_usage = {
            "prompt_tokens": 0,
            "completion_tokens": 0,
            "total_tokens": 0
        }

    def generate(self, prompt):

        print("Calling Groq...")
        print("Model:", self.MODEL)

        response = self.client.chat.completions.create(

            model=self.MODEL,

            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an enterprise knowledge assistant. "
                        "Answer questions using only the provided enterprise "
                        "knowledge context. If the answer is not present in "
                        "the provided context, clearly say that you could not "
                        "find the information in the enterprise knowledge base."
                    )
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],

            temperature=0

        )

        usage = getattr(response, "usage", None)

        self.last_usage = {
            "prompt_tokens": getattr(
                usage,
                "prompt_tokens",
                0
            ) or 0,

            "completion_tokens": getattr(
                usage,
                "completion_tokens",
                0
            ) or 0,

            "total_tokens": getattr(
                usage,
                "total_tokens",
                0
            ) or 0
        }

        print("Groq Success")

        return response.choices[0].message.content