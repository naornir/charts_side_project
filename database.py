import time
import pymongo
from pymongo import MongoClient
from bson.json_util import dumps



def get_db():
    return MongoClient()['bi']
    


def index():
    db = get_db();
    #friends = db.data
    #new_id = str(time.time()).translate(None, '.')
    #nir = {"name": "nirnaordebil","_id": new_id, "age": 25, "gfname": "keren"}
    #friends.insert(nir)

    result = []
    for each_friend in db.data.find().limit(5000):
        #doc = dumps(each_friend)
        result.append(each_friend)

    return dumps(result)
    #return json.dumps(result, default=json_util.default)





