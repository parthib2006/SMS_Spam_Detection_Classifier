from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
from scipy.special import expit

app = Flask(__name__)

model = joblib.load("app/model/Best_Model.pkl")
vectorizer = joblib.load("app/model/vectorizer.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    text = request.json["message"]
    vec = vectorizer.transform([text])

    # Prediction
    pred = int(model.predict(vec)[0])

    # Convert decision score to probability-like value
    score = model.decision_function(vec)[0]
    prob = float(expit(score))

    return jsonify({
        "prediction": pred,
        "probability": round(prob, 4)
    })

if __name__ == "__main__":
    app.run(debug=True)