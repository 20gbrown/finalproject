// QuizResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './Auth/AuthContext';

const QuizResults = () => {
  const { user, loading } = useAuth();
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    console.log('Component mounted');
    console.log('Loading:', loading);
    console.log('Fetching quiz results for user:', user);

    const fetchQuizResults = async () => {
      try {
        if (!loading && user) {
          const response = await axios.get(`/api/quiz-results/${user.userId}`);
          console.log('Quiz Results:', response.data);
          setQuizResults(response.data);
        }
      } catch (error) {
        console.error('Error fetching quiz results:', error);
      }
    };

    if (!loading && user) {
      fetchQuizResults();
    }
  }, [user, loading]);

  useEffect(() => {
    console.log('User updated:', user);
  }, [user]);

  return (
    <div>
      <h2>Quiz Results</h2>
      <ul>
        {quizResults.map((result, index) => (
          <li key={index}>
            <p>Quiz {index + 1}: {result.result}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizResults;




