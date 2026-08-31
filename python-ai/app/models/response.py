from pydantic import BaseModel


class IndexResponse(BaseModel):

    success: bool

    status: str

    chunks: int


class ChatResponse(BaseModel):

    answer: str

    sources: list

    response_time: int