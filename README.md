🛠 Tech Stack
Frontend

React (Vite)

HTML, CSS

JavaScript (ES6)

Fetch API

Deployed on Vercel

Backend

FastAPI (Python)

Hugging Face Inference API

Requests

python-dotenv

Deployed on Render

✨ Features

User-friendly fashion input form

AI-generated fashion design descriptions

Real-time API integration

Loading and error handling

Clean UI

Deployed full-stack (Frontend + Backend)

📁 Project Structure
ai-fashion-design-generator/
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── .env
│   └── vite.config.js
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   └── Procfile
│
└── README.md

⚙️ Environment Variables

Frontend .env (Vite)

VITE_API_URL=https://ai-fashion-backend.onrender.com

🚀 Backend Setup (FastAPI)
1️⃣ Install Dependencies
pip install -r requirements.txt

2️⃣ Run Locally
uvicorn main:app --host 0.0.0.0 --port 8000

https://ai-fashion-design-generator-sand.vercel.app/