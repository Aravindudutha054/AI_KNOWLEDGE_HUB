from fastapi import FastAPI

from app.api.health import router as health_router
from app.api.documents import router as document_router
from app.api.chat import router as chat_router
from app.api.test import router as test_router



app = FastAPI(

    title="Enterprise AI Service",

    version="1.0.0"

)



app.include_router(
    test_router,
    prefix="/api"
)

app.include_router(

    document_router,

    prefix="/api"

)

app.include_router(
    health_router,
    prefix="/api"
)

app.include_router(

    chat_router,

    prefix="/api"

)

