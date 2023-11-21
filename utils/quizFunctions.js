// utils/quizFunctions.js
//const { determinePreferredClassWeighted } = require('./utils/quizFunctions');
// Function to determine the user's preferred class based on their responses using weighted mapping
const determinePreferredClassWeighted = (responses, mapping) => {
    const classWeights = {};
  
    // Loop through questions and responses
    for (const questionId in responses) {
      const selectedAnswer = responses[questionId];
  
      // Find the weights associated with the selected answer
      const weights = mapping[selectedAnswer];
  
      if (weights) {
        // Update class weights based on the weights associated with the selected answer
        for (const className in weights) {
          classWeights[className] = (classWeights[className] || 0) + weights[className];
        }
      }
    }
  
    // Find the class with the highest total weight
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



