# uvicorn solver:app --reload
# python3 -m uvicorn solver:app --reload

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import kociemba

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Your API endpoint
@app.get("/cube-scramble/{scramble}")
def read_item(scramble):
    soln = kociemba.solve(scramble.upper())
    return {"message": soln}




    

    







