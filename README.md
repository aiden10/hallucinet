
# About
I had this idea for a site which looks like a regular browser but all of its content is entirely AI generated and all the links on these generated pages would also generate more fake pages. 

## Screenshots
![image](https://github.com/user-attachments/assets/3c75e83e-9aba-452b-929e-5b86aa3dcf9c)

![image](https://github.com/user-attachments/assets/da751ad6-6cef-4c90-a177-8421dab9a722)

![image](https://github.com/user-attachments/assets/9f002d22-e6e7-472e-9af2-58fc676af348)

# Notes
I made this with React, Tailwind, and a FastAPI server. When you search for something or click a link, a request is sent to the server which then sends another requset to Gemini to create a website based on the search or link, and the previous site for context. Then the result is displayed and links in the page are set to generate a new page.
