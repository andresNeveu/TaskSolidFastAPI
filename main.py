from fastapi import FastAPI
from app.v1.router.user_router import router as user_router

app = FastAPI(title='Task API', version='0.1.0')

app.include_router(user_router)
