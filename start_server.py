from flask import Flask, render_template
import pymongo
from pymongo import MongoClient
from database import index, get_users

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/get_data')
def get_data():
    return index()

@app.route('/get_users')
def get_data():
    return get_users()

if __name__ == "__main__":
    app.run(debug = True)
