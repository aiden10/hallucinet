from google import genai
from google.genai import types
import os
from dotenv import load_dotenv

class AIHandler():
    def __init__(self):
        load_dotenv()
        self.client = genai.Client(api_key=os.getenv("GEMINI_KEY"))
    
    def generate_content(self, query: str, context: str, from_link: bool) -> str:
        prompt = f"Pretend you are a web server that has received the following search request: {query}"
        
        if from_link:
            prompt = f"Pretend you are a web server that has received a request after a user clicked on this link: {query}"
            
        if context != '':
            prompt += f"\nFor context, the user has navigated here from this previous site: {context}"
            
        prompt += f"\nReturn a single HTML file that contains CSS and JavaScript."
        
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=0)
            ),
        )
        
        return response.text
    
    def generate_url(self, page: str) -> str:
        response = self.client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Come up with a url for the following webpage:\n{page}\nRespond only with the url string and nothing else.",
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_budget=0)
            ),
        )
        
        return response.text
