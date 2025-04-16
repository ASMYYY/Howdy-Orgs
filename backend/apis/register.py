from fastapi import APIRouter, FastAPI
from pydantic import BaseModel
import pandas as pd
import os

router = APIRouter()

CSV_PATH = "./data/Users_Master.csv"

class User(BaseModel):
    Email: str
    PWD: str
    Name: str
    Interest1: str
    Interest2: str
    Interest3: str
    Clubs: list[str]

@router.post("/api/register")
async def register_user(user: User):
    data = user.dict()
    data["Clubs"] = ", ".join(data["Clubs"])
    df = pd.DataFrame([data])
    if os.path.exists(CSV_PATH):
        df.to_csv(CSV_PATH, mode='a', header=False, index=False)
    else:
        df.to_csv(CSV_PATH, index=False)
    return {"message": "User registered successfully"}

app = FastAPI()
app.include_router(router)