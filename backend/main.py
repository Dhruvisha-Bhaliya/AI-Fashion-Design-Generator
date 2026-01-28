from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests, base64, os
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_API_KEY")

if not HF_TOKEN:
    print("WARNING: HF_TOKEN not set")

HF_URL = "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0"

app = FastAPI()

@app.get("/")
def root():
    return {
        "status": "running",
        "message": "AI Fashion Design Generator API is live"
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class FashionInput(BaseModel):
    gender: str
    category: str
    season: str
    fabric: str
    colors: str
    style: str

@app.post("/generate-fashion")
def generate_fashion(data: FashionInput):

    # 🔥 IMPROVED REALISTIC PROMPT (FREE)
    prompt = (
        f"ultra realistic fashion photoshoot, "
        f"{data.category} designed for {data.gender}, "
        f"{data.season} collection, "
        f"{data.fabric} fabric, "
        f"{data.colors} color tones, "
        f"{data.style} fashion style, "
        f"professional studio lighting, "
        f"fashion magazine photography, "
        f"natural fabric texture, realistic folds, "
        f"sharp focus, high detail"
    )

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}",
        "Accept": "image/png",
        "Content-Type": "application/json",
    }

    response = requests.post(
        HF_URL,
        headers=headers,
        json={"inputs": prompt},
        timeout=120
    )

    if response.status_code != 200:
        return {"error": response.text}

    image_b64 = base64.b64encode(response.content).decode()
    return {"image": image_b64, "prompt": prompt}
