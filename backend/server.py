from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import GenerationRequest, GenerationResponse
from ai_handler import AIHandler

app = FastAPI()
AI_handler = AIHandler()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/generate")
async def generatePost(requestData: GenerationRequest):
    content = AI_handler.generate_content(requestData.query, requestData.context, requestData.fromLink)
    fake_url = AI_handler.generate_url(content)
    return GenerationResponse(
        page_code=content,
        url=fake_url
    )