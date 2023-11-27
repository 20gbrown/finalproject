// Quiz.js
import React, { useState, useEffect } from 'react';
import { QuizBank, classMapping } from '../utils/quizData';
import { determinePreferredClassWeighted } from '../utils/quizFunctions';
import axios from 'axios';
//import QuizResult from '../models/quizResult';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [preferredClass, setPreferredClass] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await axios.get('/api/user');
      setUserId(response.data.userId); 
    };

    fetchUserId();
  }, []); 

  const handleAnswer = (answerOption) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: answerOption,
    }));
    if (questionIndex < QuizBank.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const preferredClass = determinePreferredClassWeighted(userResponses, classMapping);
      console.log(`Your preferred DnD class using weighted mapping is: ${preferredClass}`);
      setPreferredClass(preferredClass);
      if (userId) {
        axios.post('/api/quiz/save-results', { result: preferredClass, userId })
          .then(response => {
            console.log(response.data.message);
          })
          .catch(error => {
            console.error(error.response.data.message);
          });
      }
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
        <p>Your preferred DnD class is: {preferredClass}</p>
      )}
      </div>
    </div>
  );
};

export default Quiz;



