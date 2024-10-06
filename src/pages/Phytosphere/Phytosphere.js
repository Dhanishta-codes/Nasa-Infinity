import React, { useState } from "react";
import "./Phytosphere.css"; // Import the CSS file for styling

const Phytosphere = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false); // For showing loading state

  // Fetch the answer from your Flask backend API
  const handleAskOcean = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a question!");
      return;
    }

    setLoading(true); // Start loading
    setAnswer(""); // Clear previous answer

    try {
      const response = await fetch("http://localhost:5000/ask-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }), // Send the question as JSON
      });

      const data = await response.json();
      setAnswer(data.answer || "No answer available at the moment.");
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("An error occurred while fetching the answer.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="phytosphere-container">
      <h1>Welcome to the Phytosphere</h1>
      <p>
        Here, you can explore data from NASA PACE and ask questions related to
        the ocean and atmosphere. Use the box below to interact with the "Ask
        Ocean" feature and get the answers you need about ocean health,
        phytoplankton, aerosols, and more.
      </p>

      {/* Input question box with neon effect */}
      <div className="ask-ocean-container">
        <input
          type="text"
          className="ask-ocean-input"
          placeholder="Ask your ocean-related question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="ask-ocean-button"
          onClick={handleAskOcean}
          disabled={loading}
        >
          {loading ? "Asking..." : "ASK OCEAN"}
        </button>
      </div>

      {/* Display the answer or a loading message */}
      {answer && <div className="answer-box">{answer}</div>}
    </div>
  );
};

export default Phytosphere;
