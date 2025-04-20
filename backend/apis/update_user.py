from fastapi import APIRouter
from pydantic import BaseModel
import pandas as pd
import os

router = APIRouter()

CSV_PATH = "./data/Users_Master.csv"

class ProfileUpdate(BaseModel):
    Email: str
    Name: str
    Interest1: str
    Interest2: str
    Interest3: str

@router.post("/api/update-profile")
def update_profile(profile: ProfileUpdate):
    if not os.path.exists(CSV_PATH):
        return {"error": "User data file not found."}

    df = pd.read_csv(CSV_PATH)
    updated = False

    # Update existing entry
    for idx, row in df.iterrows():
        if row["Email"] == profile.Email:
            df.at[idx, "Name"] = profile.Name
            df.at[idx, "Interest1"] = profile.Interest1
            df.at[idx, "Interest2"] = profile.Interest2
            df.at[idx, "Interest3"] = profile.Interest3
            updated = True
            break

    # If not found, append new row
    if not updated:
        new_row = {
            "Email": profile.Email,
            "PWD": "",  # Leave empty or handle accordingly
            "Name": profile.Name,
            "Interest1": profile.Interest1,
            "Interest2": profile.Interest2,
            "Interest3": profile.Interest3,
            "Clubs": ""
        }
        df = df.append(new_row, ignore_index=True)

    df.to_csv(CSV_PATH, index=False)
    return {"message": "Profile updated successfully."}
