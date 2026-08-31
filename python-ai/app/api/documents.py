from fastapi import APIRouter, UploadFile, File, Form
import os
import shutil
import tempfile

from app.services.indexing import IndexingService

router = APIRouter()
service = IndexingService()


@router.post("/documents/index")
async def index_document(
    document_id: str = Form(...),
    document_name: str = Form(...),
    department: str = Form(...),
    file: UploadFile = File(...),
):
    metadata = {
        "document_id": document_id,
        "document_name": document_name,
        "department": department,
    }

    print("=" * 50)
    print("DOCUMENT INDEXING REQUEST")
    print(metadata)
    print("Received file:", file.filename)
    print("=" * 50)

    suffix = os.path.splitext(file.filename)[1]
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=suffix)
    temp_file_path = temp_file.name

    try:
        with temp_file:
            shutil.copyfileobj(file.file, temp_file)

        result = service.index_document(metadata, temp_file_path)
        return result
    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)