from fastapi import APIRouter

from app.rag.retriever import Retriever

router = APIRouter()

retriever = Retriever()


@router.get("/test-search")
def test():

    results = retriever.retrieve(

        question="What is this document about?",

        department="IT"

    )

    return results