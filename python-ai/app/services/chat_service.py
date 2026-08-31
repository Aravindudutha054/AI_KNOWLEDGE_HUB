import time

from app.rag.retriever import Retriever

from app.services.grok import GrokService

from app.services.prompt_builder import PromptBuilder

from app.services.response_parser import ResponseParser



class ChatService:

    def __init__(self):

        self.retriever = Retriever()

        self.grok = GrokService()


    def ask(

        self,

        question,

        department,

        generate_title=False

    ):

        total_start = time.perf_counter()

        retrieval_start = time.perf_counter()

        results = self.retriever.retrieve(

            question,

            department

        )

        retrieval_time = int(

            (time.perf_counter() - retrieval_start) * 1000

        )

        if len(results) == 0:

            total_time = int(

                (time.perf_counter() - total_start) * 1000

            )

            return {

                "answer":

                "I couldn't find this information in the enterprise knowledge base.",

                "sources": [],

                "response_time": total_time,

                "metrics": {

                    "retrievalTime": retrieval_time,

                    "generationTime": 0,

                    "totalTime": total_time,

                    "promptTokens": 0,

                    "completionTokens": 0,

                    "totalTokens": 0,

                    "citations": 0,

                    "retrievedChunks": 0

                }

            }

        context = self.retriever.build_context(

            results

        )

        print("\n========== RETRIEVED ==========")
        for i, doc in enumerate(results, 1):
            print(f"\nChunk {i}")
            print("Document:", doc["document"])
            print("Page:", doc["page"])
            print("Score:", doc["score"])
            print("Text:")
            print(doc["text"][:1000])

        prompt = PromptBuilder.build(

            question,

            context

        )

        generation_start = time.perf_counter()

        answer = self.grok.generate(

            prompt

        )

        generation_time = int(

            (time.perf_counter() - generation_start) * 1000

        )

        total_time = int(

            (time.perf_counter() - total_start) * 1000

        )

        parsed = ResponseParser.parse(

            answer,

            results,

            total_time

        )

        usage = getattr(self.grok, "last_usage", {})

        parsed["metrics"] = {

            "retrievalTime": retrieval_time,

            "generationTime": generation_time,

            "totalTime": total_time,

            "promptTokens": usage.get("prompt_tokens", 0),

            "completionTokens": usage.get("completion_tokens", 0),

            "totalTokens": usage.get("total_tokens", 0),

            "citations": len(parsed.get("sources", [])),

            "retrievedChunks": len(results)

        }

        return parsed
    