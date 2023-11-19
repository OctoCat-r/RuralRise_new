from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the joblib models
model_groundnut = joblib.load('python/groundnut.pkl')
model_rice = joblib.load('python/rice.pkl')
model_wheat = joblib.load('python/wheat.pkl')
model_cotton = joblib.load('python/cotton.pkl')
model_sugarcane = joblib.load('python/sugarcane.pkl')
model_pulses = joblib.load('python/pulses.pkl')

# Add more models as needed

@app.route('/predict', methods=['POST'])
def predict_groundnut():
    try:
        input_data = request.json.get('input_feature')
        a = np.array(input_data).reshape(1, -1)

        predictions = {
            'cotton': model_cotton.predict(a)[0],
            'groundnut': model_groundnut.predict(a)[0],
            'pulses': model_pulses.predict(a)[0],
            'rice': model_rice.predict(a)[0],
            'sugarcane': model_sugarcane.predict(a)[0],
            'wheat': model_wheat.predict(a)[0],
        }
        
        formatted_predictions = [{"name" : crop, "value": value} for crop, value in predictions.items()]


        return jsonify({'predictions': formatted_predictions})
    except Exception as e:
        return jsonify({'error': str(e)})

# @app.route('/predict/rice', methods=['POST'])
# def predict_rice():
#     try:
#         input_data = request.json.get('input_feature')
#         a = np.array(input_data).reshape(1, -1)

#         predictions = model_rice.predict(a)
#         return jsonify({'predictions': predictions.tolist()})
#     except Exception as e:
#         return jsonify({'error': str(e)})

# @app.route('/predict/wheat', methods=['POST'])
# def predict_rice():
#     try:
#         input_data = request.json.get('input_feature')
#         a = np.array(input_data).reshape(1, -1)

#         predictions = model_wheat.predict(a)
#         return jsonify({'predictions': predictions.tolist()})
#     except Exception as e:
#         return jsonify({'error': str(e)})

# @app.route('/predict/pulses', methods=['POST'])
# def predict_rice():
#     try:
#         input_data = request.json.get('input_feature')
#         a = np.array(input_data).reshape(1, -1)

#         predictions = model_wheat.predict(a)
#         return jsonify({'predictions': predictions.tolist()})
#     except Exception as e:
#         return jsonify({'error': str(e)})

# Add more routes for other models as needed

if __name__ == '__main__':
    app.run(host='localhost', port=5198)

print("Hey I am wortking greta")
