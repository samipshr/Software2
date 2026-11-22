import json
from flask import Flask, Response
app = Flask(__name__)
with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)
@app.route('/translate/<word>')
def translate(word):
    word = word.lower()
    if word in dictionary:
        response = {
            "English": word,
            "Finnish": dictionary[word]
        }
        return response
    else:
        response = {
            "error": "Word not found"
        }
        json_response = json.dumps(response)
        http_response = Response(
            response=json_response,
            status=404,
            mimetype="application/json"
        )
        return http_response

@app.route('/words')
def words():
    response = {
        "words": list(dictionary.keys())
    }
    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
