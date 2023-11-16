// App.js
// App.js
import React, { useState } from 'react';
import { classMapping, QuizBank } from '../utils/quizData';
import { determinePreferredClassWeighted } from '../utils/quizFunctions';

const App = () => {
  const [userResponses, setUserResponses] = useState({});

  const handleAnswer = (questionId, answerOption) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answerOption,
    }));
  };

  const handleQuizSubmit = () => {
    const preferredClass = determinePreferredClassWeighted(userResponses, classMapping);
    console.log(`Your preferred DnD class using weighted mapping is: ${preferredClass}`);

    // Add logic to send the result to your backend or perform other actions
  };

  return (
    <div>
      <h1>Dungeons and Dragons Personality Quiz</h1>
      <form>
        {QuizBank.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.answers.map((answer) => (
              <label key={answer.option}>
                <input
                  type="radio"
                  name={`question${question.id}`}
                  value={answer.option}
                  onChange={() => handleAnswer(question.id, answer.option)}
                />
                {answer.text}
              </label>
            ))}
          </div>
        ))}
      </form>
      <button type="button" onClick={handleQuizSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;



// Function to submit quiz results to the server
const submitQuizResult = async (userId, preferredClass) => {
    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, preferredClass }),
      });
  
      if (response.ok) {
        console.log('Quiz result submitted successfully');
      } else {
        console.error('Error submitting quiz result:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting quiz result:', error.message);
    }
  };
  
  // function call
  submitQuizResult(userId, preferredClass);
  