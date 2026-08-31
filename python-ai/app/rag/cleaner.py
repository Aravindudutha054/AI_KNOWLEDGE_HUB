import re


class TextCleaner:

    @staticmethod
    def clean(text: str) -> str:

        if not text:

            return ""

        # Normalize line endings
        text = text.replace("\r\n", "\n")
        text = text.replace("\r", "\n")

        # Replace tabs with spaces
        text = text.replace("\t", " ")

        # Collapse multiple spaces
        text = re.sub(r"[ ]{2,}", " ", text)

        # Collapse multiple blank lines
        text = re.sub(r"\n{3,}", "\n\n", text)

        return text.strip()

    @staticmethod
    def clean_pages(pages: list):

        cleaned_pages = []

        for page in pages:

            cleaned_pages.append(

                {

                    **page,

                    "text": TextCleaner.clean(

                        page["text"]

                    )

                }

            )

        return cleaned_pages