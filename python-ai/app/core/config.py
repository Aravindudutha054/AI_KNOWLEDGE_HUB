from dotenv import load_dotenv

import os

load_dotenv()

HOST = os.getenv("HOST")

PORT = int(os.getenv("PORT"))

MONGODB_URI = os.getenv("MONGODB_URI")

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

VECTOR_DB = os.getenv("VECTOR_DB")