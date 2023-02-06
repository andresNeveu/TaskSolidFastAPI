from fastapi import FastAPI

app = FastAPI(title='Task API', version='0.1.0')


@app.get('/')
def home():
    return {"message": "Hello World"}
