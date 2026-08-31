from app.services.chat_service import ChatService
import traceback

service = ChatService()

try:
    print(service.ask("Give me healthcare AI research ideas.", "healthcare"))
except Exception as e:
    print("CHAT_ERROR", type(e).__name__, e)
    traceback.print_exc()
