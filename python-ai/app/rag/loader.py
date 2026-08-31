from pathlib import Path

import fitz
from docx import Document


class DocumentLoader:

    @staticmethod
    def load_pdf(path: str):
        document = fitz.open(path)

        pages = []

        print(f"\nLoading PDF: {path}")
        print(f"Total Pages: {len(document)}")

        for index, page in enumerate(document):

            # Extract text from the page
            text = page.get_text("text").strip()

            print(f"\n========== PAGE {index + 1} ==========")
            print(f"Characters Extracted: {len(text)}")

            if text:
                print(repr(text[:500]))
            else:
                print("⚠ No text extracted from this page.")

            pages.append(
                {
                    "page": index + 1,
                    "text": text
                }
            )

        document.close()

        return pages

    @staticmethod
    def load_docx(path: str):
        document = Document(path)

        paragraphs = [
            paragraph.text.strip()
            for paragraph in document.paragraphs
            if paragraph.text.strip()
        ]

        text = "\n".join(paragraphs)

        print(f"\nLoading DOCX: {path}")
        print(f"Characters Extracted: {len(text)}")

        return [
            {
                "page": 1,
                "text": text
            }
        ]

    @staticmethod
    def load(path: str):

        extension = Path(path).suffix.lower()

        if extension == ".pdf":
            return DocumentLoader.load_pdf(path)

        if extension == ".docx":
            return DocumentLoader.load_docx(path)

        raise ValueError(
            f"Unsupported file type: {extension}"
        )