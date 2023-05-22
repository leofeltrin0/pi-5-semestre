from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from processing import get_comments, classify_comments, get_score, get_features, product_image

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def homepage():
    return 'pagina inicial'

@app.route("/get/<string:product>", methods=['GET'])
@cross_origin()
def process_product(product):
    
    comments = get_comments(product)
    
    classified_comments = classify_comments(comments)
    
    score = get_score(classified_comments)
    
    features = get_features(classified_comments)
    
    
    response = {
        'product': product,
        'product-image': product_image,
        'score': score,
        'features': features
    }

    # Retornar a resposta em JSON
    return jsonify(response)
    
    
    