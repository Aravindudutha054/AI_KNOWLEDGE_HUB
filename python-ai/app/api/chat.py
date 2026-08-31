from fastapi import APIRouter

from app.models.request import ChatRequest

from app.services.chat_service import ChatService


router = APIRouter()

chat_service = ChatService()


@router.post("/chat")
def chat(request: ChatRequest):

    result = chat_service.ask(

        request.question,

        request.department


    )

    return {

        "success": True,

        "message": "Answer generated successfully",

        "data": result

    }