from flask import Flask,jsonify
import json
import serpy
from flask_restful import Api, Resource, reqparse
import mysql.connector
import pandas as pd
#news.head();
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from stop_words import get_stop_words
import numpy as np

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="justdial",
  database="project"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT id,date,title,category,chash,language FROM updates where language='en'")

myresult = mycursor.fetchall()


app = Flask(__name__)
api = Api(app)

cols=['id','date','title','category','chash','language'];
news=pd.DataFrame(myresult,columns=cols)
news['count']=np.random.randint(0,101,news.shape[0])
news.head();
tfidf = TfidfVectorizer(stop_words=get_stop_words('hindi'))
news['title'] = news['title'].fillna('')
tfidf_matrix = tfidf.fit_transform(news['title'])
tfidf_matrix.shape
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
indices = pd.Series(news.index, index=news['title']).drop_duplicates()

def get_recommendations(title, cosine_sim=cosine_sim):
    # Get the index of the movie that matches the title
    idx = indices[title]
    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))
    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:11]
    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    news2=[(movie_indices[0],news['title'].iloc[0])];

    for i in movie_indices:
        if i==movie_indices[0]:
                continue;
        news2.append((i,news['title'].iloc[i]))

#    print(type(news2))

    # Return the top 10 most similar movies
    return news2

test=get_recommendations('Priyanka Chopra wraps up shoot of ‘Isn’t it Romantic?’ in this drool-worthy pink dress');
#test=test.tolist
print(test)


#test=test.to_dict
#test=json.dumps(test.__dict__)
#print(test.id)
#print(test.tolist)

users = [
    {
        "name": "Nicholas",
        "age": 42,
        "occupation": "Network Engineer"
    },
    {
        "name": "Elvin",
        "age": 32,
        "occupation": "Doctor"
    },
    {
        "name": "Jass",
        "age": 22,
        "occupation": "Web Developer"
    }
]

class User(Resource):
    def get(self, name):
        for user in users:
            if(name == user["name"]):
                return user, 200
        return (test)

    def post(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()

        for user in users:
            if(name == user["name"]):
                return "User with name {} already exists".format(name), 400

        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201

    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()

        for user in users:
            if(name == user["name"]):
                user["age"] = args["age"]
                user["occupation"] = args["occupation"]
                return user, 200
        
        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201

    def delete(self, name):
        global users
        users = [user for user in users if user["name"] != name]
        return "{} is deleted.".format(name), 200
      
api.add_resource(User, "/user/<string:name>")

app.run(debug=True)
