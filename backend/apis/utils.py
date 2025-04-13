import json
from rank_bm25 import BM25Okapi



class BM25Helper:
    def __init__(self):
        self.dataset_path = "backend/data_preprocessing/tamu_organizations.json"
        self.data = None
        self.bm25 = None
        self.n = 3

    def load_data(self):
        with open(self.dataset_path, "r") as f:
            self.data = json.load(f)
        return
    
    def store_corpus(self):
        corpus = [item["description"] for item in self.data]
        tokenized_corpus = [doc.lower().split() for doc in corpus]
        self.bm25 = BM25Okapi(tokenized_corpus)
        return
    
    def get_ranks(self, query):
        tokenized_query = query.lower().split()
        top_n = self.bm25.get_top_n(tokenized_query, self.data, n=self.n)
        return top_n
    

