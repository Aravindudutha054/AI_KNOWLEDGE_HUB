from app.rag.embedding import EmbeddingModel
from app.rag.vectorstore import VectorStore


class Retriever:

    def __init__(self):
        self.vectorstore = VectorStore()

    def retrieve(self, question, department, top_k=5):

        embedding = EmbeddingModel.encode(question)

        raw = self.vectorstore.search(
            embedding,
            department,
            top_k
        )

        return self.normalize(raw)

    def normalize(self, raw):

        documents = raw["documents"][0]
        metadatas = raw["metadatas"][0]
        distances = raw["distances"][0]

        results = []

        for document, metadata, distance in zip(
            documents,
            metadatas,
            distances
        ):

            results.append({
                "text": document,
                "page": metadata["page"],
                "document": metadata["document_name"],
                "score": round(1 - distance, 3)
            })

        return results

    def build_context(self, results):

        context = []

        for result in results:

            context.append(
                f"""
Document : {result['document']}
Page : {result['page']}

{result['text']}
"""
            )

        return "\n\n".join(context)