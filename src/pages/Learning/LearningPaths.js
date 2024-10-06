import React from 'react';
import './LearningPaths.css'; // Link to the CSS for styling
import { useNavigate } from 'react-router-dom'; // To navigate to individual topic pages

const LearningPaths = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Function to navigate to the specific topic page
  const navigateToTopic = (topic) => {
    navigate(`/topics/${topic}`); // Navigate to topic page
  };

  // Function to navigate to the quiz page
  const startQuiz = () => {
    navigate('/quiz'); // Navigate to the quiz page
  };

  return (
    <div className="learning-paths-container">
      <h1>Explore Our Learning Paths</h1>
      <p>Complete the following topics and test your knowledge with a quiz at the end!</p>
      
      {/* Flashcards Grid */}
      <div className="flashcards-container">
        <div className="flashcard" onClick={() => navigateToTopic('phytoPulse')}>
          <h3>PhytoPulse</h3>
          <p>Phytoplankton</p>
        </div>
        <div className="flashcard" onClick={() => navigateToTopic('aeroTrack')}>
          <h3>AeroTrack</h3>
          <p>Aerosols</p>
        </div>
        <div className="flashcard" onClick={() => navigateToTopic('oceanVitals')}>
          <h3>OceanVitals</h3>
          <p>Ocean Health</p>
        </div>
        <div className="flashcard" onClick={() => navigateToTopic('ociVision')}>
          <h3>OCI Vision</h3>
          <p>NASA's OCI Instrument</p>
        </div>
        <div className="flashcard" onClick={() => navigateToTopic('harp2Insight')}>
          <h3>HARP-2 Insight</h3>
          <p>HARP 2</p>
        </div>
        <div className="flashcard" onClick={() => navigateToTopic('polarMetric')}>
          <h3>PolarMetric</h3>
          <p>Polarimeter</p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>Test Your Knowledge</h2>
        <button className="start-quiz-button" onClick={startQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default LearningPaths;
