from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .utils import SBERTRecommender
from .utils import BM25Helper
 
import pandas as pd
 
 
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
 
bmobj = BM25Helper()
bmobj.load_data()
bmobj.store_corpus()
 
class Item(BaseModel):
    user: str
    query: str
 
@app.post("/backend/bm25")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.user is not None:
        query = item.query
        top_n = bmobj.get_ranks(query)
        item_dict.update({"ranked_docs": top_n})
    return item_dict

sbert_obj = SBERTRecommender()
sbert_obj.load_data()

class UserRequest(BaseModel):
    user_id: int

@app.post("/backend/sbert")
async def get_sbert_ranked_user(request: UserRequest):
    try:
        result = sbert_obj.get_ranked_orgs(request.user_id)
        return result.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
 
@app.get("/backend/orgs-list")
def get_organizations():
    csv_path = "backend/data/Organisations_Master.csv"
    df = pd.read_csv(csv_path)
    data = df.fillna('').to_dict(orient="records")
    return data
