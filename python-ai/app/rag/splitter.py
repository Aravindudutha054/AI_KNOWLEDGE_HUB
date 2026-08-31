import uuid


class TextSplitter:

    def __init__(self, chunk_size=1200, overlap=200):
        self.chunk_size = chunk_size
        self.overlap = overlap

    def split(self, pages, metadata):

        chunks = []

        print("\n========== SPLITTING ==========")

        for page in pages:

            text = page["text"].strip()
            page_number = page["page"]

            if not text:
                print(f"Skipping Page {page_number} (Empty)")
                continue

            print(f"\nPage {page_number}")
            print(f"Characters: {len(text)}")

            start = 0

            while start < len(text):

                end = start + self.chunk_size

                chunk_text = text[start:end].strip()

                if chunk_text:

                    chunks.append(
                        {
                            "chunk_id": str(uuid.uuid4()),
                            "document_id": metadata["document_id"],
                            "document_name": metadata["document_name"],
                            "department": metadata["department"],
                            "page": page_number,
                            "text": chunk_text
                        }
                    )

                start += self.chunk_size - self.overlap

        print(f"\nTotal Chunks Created: {len(chunks)}")

        if chunks:
            print("\n========== FIRST CHUNK ==========")
            print(f"Characters: {len(chunks[0]['text'])}")
            print(chunks[0]["text"][:500])

        return chunks