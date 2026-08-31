from app.rag.loader import DocumentLoader
from app.rag.cleaner import TextCleaner
from app.rag.splitter import TextSplitter
from app.rag.embedding import EmbeddingModel
from app.rag.vectorstore import VectorStore


class IndexingService:

    def __init__(self):

        self.loader = DocumentLoader()

        self.splitter = TextSplitter()

        self.vectorstore = VectorStore()

    def index_document(

        self,

        metadata,

        file_path

    ):

        print("Loading document...")
        print(file_path)

        # Step 1

        pages = self.loader.load(

            file_path

        )

        print("\n===== LOADED PAGES =====")
        print("Pages:", len(pages))
        for i, page in enumerate(pages[:2]):
            print(f"Page {page['page']}")
            print(f"Characters: {len(page['text'])}")
            print(repr(page["text"][:300]))

        # Step 2

        pages = TextCleaner.clean_pages(

            pages

        )

        # Step 3

        chunks = self.splitter.split(

            pages,

            metadata

        )
        print("\n===== CHUNKS =====")
        print("Chunks:", len(chunks))
        for i, chunk in enumerate(chunks[:2]):
            print(repr(chunk["text"][:300]))

        # Step 4

        embeddings = EmbeddingModel.encode_batch(

            [

                chunk["text"]

                for chunk in chunks

            ]

        )

        # Step 5

        self.vectorstore.add_chunks(

            chunks,

            embeddings

        )

        return {

            "status": "Indexed",

            "chunks": len(chunks)

        }