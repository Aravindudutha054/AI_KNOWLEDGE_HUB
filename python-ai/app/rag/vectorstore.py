import chromadb

from app.core.config import VECTOR_DB


class VectorStore:
    def __init__(self):
        self.client = chromadb.PersistentClient(path=VECTOR_DB)
        self.collection = self.client.get_or_create_collection(
            name="enterprise_knowledge",
            metadata={"hnsw:space": "cosine"},
        )

    def add_chunks(self, chunks, embeddings):
        self.collection.add(
            ids=[chunk["chunk_id"] for chunk in chunks],
            documents=[chunk["text"] for chunk in chunks],
            embeddings=embeddings,
            metadatas=[
                {
                    "document_id": chunk["document_id"],
                    "document_name": chunk["document_name"],
                    "department": chunk["department"],
                    "page": chunk["page"],
                }
                for chunk in chunks
            ],
        )

    def search(self, embedding, department, top_k=5):
        return self.collection.query(
            query_embeddings=[embedding],
            n_results=top_k,
            where={"department": department},
        )

    def delete_document(self, document_id):
        self.collection.delete(where={"document_id": document_id})
