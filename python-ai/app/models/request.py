from pydantic import BaseModel


class ChatRequest(BaseModel):

    conversationId: str | None = None

    question: str

    department: str

    


class IndexRequest(BaseModel):

    document_id: str

    document_name: str

    department: str

    file_path: str