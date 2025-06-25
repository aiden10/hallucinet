from google import genai
from google.genai import types, errors
import os
from jinja2 import FileSystemLoader, Environment
from dotenv import load_dotenv

class AIHandler():
    def __init__(self):
        load_dotenv()
        current_dir = os.path.dirname(os.path.abspath(__file__))
        env = Environment(loader=FileSystemLoader(current_dir))
        self.template = env.get_template("error.html")
        self.client = genai.Client(api_key=os.getenv("GEMINI_KEY"))
    
    def generate_content(self, query: str, context: str, from_link: bool) -> str:
        prompt = f"Pretend you are a web server that has received the following search request: {query}"
        
        if from_link:
            prompt = f"Pretend you are a web server that has received a request after a user clicked on this link: {query}"
            
        if context != '':
            prompt += f"\nFor context, the user has navigated here from this previous site: {context}"
            
        prompt += f"\nReturn a single HTML file that contains CSS and JavaScript. Do not include any response status indicators or wrap the file in ```html```. Only respond with the file as a string."
        try:
            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(thinking_budget=0)
                ),
            )
        except errors.ServerError as e:
            return self.template.render(code=e.code, message=e.message, details=e.details)
            
        return response.text
    
    def generate_url(self, page: str) -> str:
        try:
            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=f"Come up with a url for the following webpage:\n{page}\nRespond only with the url string and nothing else. Do not include any quotations or quotes around it either. Always respond with a full url including the domain, and https://",
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(thinking_budget=0)
                ),
            )
        except errors.ServerError as e:
            return "https://failedtogenerateurl.com"

        return response.text
