// src/pages/Quiz.js
import React, { useState } from 'react';
import './Quiz.css'; // Ensure you create this file to style your quiz

const Quiz = () => {
  // Extended quiz questions
  const questions = [
    {
      question: "What is Phytoplankton?",
      options: ["Small marine plants", "Fish", "Bacteria", "Crustaceans"],
      answer: "Small marine plants",
    },
    {
      question: "What is the function of aerosols in the atmosphere?",
      options: ["Reflect sunlight", "Absorb oxygen", "Produce heat", "None of the above"],
      answer: "Reflect sunlight",
    },
    {
      question: "How do phytoplankton contribute to the Earth's oxygen?",
      options: ["Through photosynthesis", "By breaking down carbon dioxide", "By absorbing sunlight", "None of the above"],
      answer: "Through photosynthesis",
    },
    {
      question: "Which instrument is used to study ocean color from space?",
      options: ["OCI Instrument", "HARP-2", "Aerosol Tracker", "Atmospheric Sensor"],
      answer: "OCI Instrument",
    },
    {
      question: "Why is ocean color important for studying phytoplankton?",
      options: ["It helps measure chlorophyll concentrations", "It shows pollution levels", "It identifies fish species", "None of the above"],
      answer: "It helps measure chlorophyll concentrations",
    },
    {
      question: "What do aerosols in the atmosphere primarily influence?",
      options: ["Cloud formation", "Ocean circulation", "Tectonic activity", "Deep-sea currents"],
      answer: "Cloud formation",
    },
    {
      question: "Which satellite carries the OCI Instrument?",
      options: ["PACE", "Hubble", "Aqua", "GOES"],
      answer: "PACE",
    },
    {
      question: "What is the primary purpose of the HARP Instrument?",
      options: ["Measure atmospheric aerosols", "Track ocean currents", "Analyze greenhouse gases", "Monitor sea-level rise"],
      answer: "Measure atmospheric aerosols",
    },
    {
      question: "How does ocean color data help in climate studies?",
      options: ["By tracking phytoplankton productivity", "By identifying fish migration patterns", "By measuring ocean depth", "None of the above"],
      answer: "By tracking phytoplankton productivity",
    },
    {
      question: "What role do phytoplankton play in the carbon cycle?",
      options: ["They absorb carbon dioxide", "They release methane", "They produce oxygen", "They absorb nitrogen"],
      answer: "They absorb carbon dioxide",
    },
    {
      question: "What can high concentrations of aerosols in the atmosphere cause?",
      options: ["Air pollution and respiratory problems", "Improved visibility", "Increased rainfall", "Warmer temperatures"],
      answer: "Air pollution and respiratory problems",
    },
    {
      question: "Which of the following is a key characteristic measured by the HARP-2 instrument?",
      options: ["Polarization of light", "Ocean temperature", "Water salinity", "Wind speed"],
      answer: "Polarization of light",
    },
    {
      question: "What is a major consequence of phytoplankton blooms?",
      options: ["Harmful algal blooms", "Increased ocean salinity", "Enhanced fish migration", "Improved water clarity"],
      answer: "Harmful algal blooms",
    },
    {
      question: "How do aerosols affect the Earth's energy balance?",
      options: ["By reflecting or absorbing sunlight", "By increasing cloud thickness", "By reducing atmospheric pressure", "None of the above"],
      answer: "By reflecting or absorbing sunlight",
    },
    {
      question: "What does the PACE mission aim to study?",
      options: ["Ocean biology, chemistry, and aerosols", "Volcanic eruptions", "Space debris", "Plate tectonics"],
      answer: "Ocean biology, chemistry, and aerosols",
    },
    {
      question: "Which process do phytoplankton primarily rely on to generate energy?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Oxidation"],
      answer: "Photosynthesis",
    },
    {
      question: "What data does the OCI instrument help collect?",
      options: ["Chlorophyll concentration and water quality", "Ocean temperature", "Wind speeds", "Fish populations"],
      answer: "Chlorophyll concentration and water quality",
    }
  ];

  // States to keep track of the current question and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Handle answer selection
  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Congratulations!</h2>
          <p>You completed the quiz!</p>
          <p>You scored {score} out of {questions.length}</p>
          {score === questions.length ? (
            <p>Perfect score! You’re a genius! 🎉</p>
          ) : score > questions.length / 2 ? (
            <p>Great job! You did really well! 😃</p>
          ) : (
            <p>Good effort! Keep learning and improving! 💪</p>
          )}
          <button className="retry-button" onClick={() => window.location.reload()}>
            Retry Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
