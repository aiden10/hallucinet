from pydantic import BaseModel

class GenerationRequest(BaseModel):
    """The information provided to generate a page"""
    context: str | None = None
    query: str
    fromLink: bool

class GenerationResponse(BaseModel):
    page_code: str
    url: str
