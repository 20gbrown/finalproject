// utils/quizFunctions.js

const determinePreferredClassWeighted = (responses, mapping) => {
    const classWeights = {};
  
    for (const questionId in responses) {
      const selectedAnswer = responses[questionId];
  
      const weights = mapping[selectedAnswer];
  
      if (weights) {
        for (const className in weights) {
          classWeights[className] = (classWeights[className] || 0) + weights[className];
        }
      }
    }
  
    let preferredClass = null;
    let maxWeight = 0;
  
    for (const className in classWeights) {
      if (classWeights[className] > maxWeight) {
        maxWeight = classWeights[className];
        preferredClass = className;
      }
    }
  
    return preferredClass;
  }

  module.exports = {
    determinePreferredClassWeighted,
  };



