class ResponseParser:

    @staticmethod
    def parse(

        answer,

        sources,

        response_time

    ):

        unique_sources = []
        seen = set()

        for source in sources:

            key = (
                source["document"],
                source["page"]
            )

            if key in seen:
                continue

            seen.add(key)

            unique_sources.append({
                "document": source["document"],
                "page": source["page"],
                "score": source["score"]
            })

        return {

            "answer": answer,

            "sources": unique_sources,

            "response_time": response_time

        }