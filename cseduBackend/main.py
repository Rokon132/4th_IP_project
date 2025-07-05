# filepath: cseduBackend/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to CSEDU Backend!"}

@app.get("/home")
def home():
    return {"message": "This is the home endpoint of CSEDU Backend!"} 