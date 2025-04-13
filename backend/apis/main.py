from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .utils import BM25Helper


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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