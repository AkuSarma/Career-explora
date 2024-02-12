import React, { useState, useEffect } from 'react';
import questionsData from './questions.json'; // Import JSON data

const StrengthsInterestsAnalysis = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData.questions); // Set questions state with JSON data
  }, []);

  const handleSubmit = () => {
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
  };

  const calculateResults = (answers) => {
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const result = determineResult(totalScore);
    return result;
  };

  const determineResult = (totalScore) => {
    if (totalScore >= 80) {
      return "You have strong leadership skills and may excel in management roles.";
    } else if (totalScore >= 60) {
      return "You have good communication skills and may thrive in customer-facing roles.";
    } else if (totalScore >= 40) {
      return "You have analytical skills and may enjoy problem-solving in technical fields.";
    } else {
      return "You have a creative mindset and may find fulfillment in artistic or design-related fields.";
    }
  };

  const handleAnswerSelection = (questionId, answerValue) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerValue
    }));
  };

  return (
    <div>
      <h2>Strengths and Interests Analysis</h2>
      <p>Answer the following questions to identify your strengths and interests:</p>
      
      <div className="assessment-questions">
        {questions.map(question => (
          <Question
            key={question.id}
            id={question.id}
            question={question.question}
            onAnswerSelection={handleAnswerSelection}
          />
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>

      {results && (
        <div className="assessment-results">
          <h3>Assessment Results</h3>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

const Question = ({ id, question, onAnswerSelection }) => {
  const handleOptionSelection = (value) => {
    onAnswerSelection(id, value);
  };

  return (
    <div className="question">
      <p>{question}</p>
      <div className="options">
        <button onClick={() => handleOptionSelection(1)}>Yes</button>
        <button onClick={() => handleOptionSelection(0)}>No</button>
      </div>
    </div>
  );
};

export default StrengthsInterestsAnalysis;