#pip install Flask Flask-CORS google-generativeai python-dotenv
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import google.generativeai as genai
from flask_cors import CORS
load_dotenv()
app = Flask(__name__)
CORS(app)  
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])
def get_gemini_response(question):
    response = chat.send_message(question, stream=True)
    return response
@app.route('/ask-question', methods=['POST'])
def ask_question():
    try:

        data = request.get_json()
        question = data.get('question')

        if not question:
            return jsonify({'error': 'No question provided'}), 400


        response = get_gemini_response(question)


        result = ''
        for chunk in response:
            result += chunk.text

        return jsonify({'answer': result}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
