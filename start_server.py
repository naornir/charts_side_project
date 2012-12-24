from flask import Flask, render_template
import pymongo
from pymongo import MongoClient
from database import index

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/get_data')
def get_data():
    return index()

if __name__ == "__main__":
    app.run(debug = True)
