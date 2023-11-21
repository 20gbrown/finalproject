// Quiz.js
import React, { useState, useEffect } from 'react';
import { QuizBank, classMapping } from '../utils/quizData';
import { determinePreferredClassWeighted } from '../utils/quizFunctions';
import axios from 'axios';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [preferredClass, setPreferredClass] = useState(null);

  const handleAnswer = (answerOption) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: answerOption,
    }));

    // Move to the next question
    if (questionIndex < QuizBank.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // End of the quiz, calculate preferred class
      const preferredClass = determinePreferredClassWeighted(userResponses, classMapping);
      console.log(`Your preferred DnD class using weighted mapping is: ${preferredClass}`);
      setPreferredClass(preferredClass);

      // Save answers to the server
      axios.post('/api/quiz/save-answers', { answers: userResponses })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error(error.response.data.message);
      });
    }
  };

  useEffect(() => {
    if (preferredClass !== null) {
      console.log(`Your preferred DnD class using weighted mapping is: ${preferredClass}`);
    }
  }, [preferredClass]);

  return (
    <div className='quiz-main'>
      <h1>Dungeons and Dragons Personality Quiz</h1>
      {questionIndex < QuizBank.length && (
        <div key={QuizBank[questionIndex].id} className ='quiz-questions'>
          <h3>{QuizBank[questionIndex].question}</h3>
          {QuizBank[questionIndex].answers.map((answer) => (
            <label key={answer.option}>
              <input
                type="radio"
                name={`question${QuizBank[questionIndex].id}`}
                value={answer.option}
                onChange={() => handleAnswer(answer.option)}
              />
              {answer.text}
            </label>
          ))}
        </div>
      )}
      <div className='quiz-answer'>
      {preferredClass && (
        <p>Your preferred DnD class using weighted mapping is: {preferredClass}</p>
      )}
      </div>
    </div>
  );
};

export default Quiz;



