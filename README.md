# Howdy-Orgs-Project

## Set up
```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Run backend APIs
Run these commands on terminal one to get started with the backend apis
```
cd backend
uvicorn apis.main:app --reload --port 8000
```

## Run frontend
Run these commands on terminal one to get started with the frontend. Make sure you have node and npm installed
```
npm -i
npm start
```