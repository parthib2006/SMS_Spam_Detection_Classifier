# SMS Spam Detection using Linear SVM

A machine learning–based SMS spam classification system using **TF-IDF vectorization** and **Linear Support Vector Machine (SVM)**, deployed as a web application using **Flask**.

---

## 📌 Project Overview

This project focuses on detecting spam SMS messages by learning textual patterns from labeled data. Multiple machine learning models were evaluated, and **Linear SVM** was selected for its strong generalization performance on high-dimensional text data.

---

## 🧠 Models Evaluated
- Logistic Regression
- Multinomial Naive Bayes
- Random Forest
- XGBoost
- **Linear Support Vector Machine (Final Model)**

---

## 📊 Evaluation Metrics
- Precision
- Recall
- F1-score
- ROC-AUC
- Confusion Matrix
- Statistical validation using **ANOVA**

---

## ⚙️ Tech Stack
- Python
- Scikit-learn
- Flask
- HTML, CSS, JavaScript
- TF-IDF Vectorization

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/sms-spam-detection.git
cd sms-spam-detection
pip install -r requirements.txt
python app.py
```

## Project Folder Structure

```bash

---
Root/
├── __init__.py
├── app.py
├── model/
│   └── Best_model.pkl
|    ── vectorizer.pkl
├── static/
│   ├── css/
|   |   └── style.css
│   ├── js/
|   |   └── script.js
│   └── images/
|   |   └── evaluation_metrics.png
├── templates/
│   └── index.html
├── requirements.txt
├── LICENSE
└── README.md
---
```