from app.services.indexing import IndexingService


class RAGPipeline:

    def __init__(self):

        self.indexing_service = IndexingService()

    def index_document(

        self,

        metadata,

        file_path

    ):

        return self.indexing_service.index_document(

            metadata,

            file_path

        )


pipeline = RAGPipeline()