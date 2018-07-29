import {
    CORRECT_ANSWER,
    INCORRECT_ANSWER,
    RESET_QUIZ,
    TOGGLE_ANSWER,
  } from '../actions/quizActions';
  
  const initialState = {
    quizDisplay: {
      toggleAnswer: false,
      toggleQuestion: true,
    },
    quizNumbers: {
      questionNumber: 0,
      quizScoreCorrect: 0,
      quizScoreIncorrect: 0,
    },
  };
  
  const quizRedu = (state = initialState, action) => {
    switch (action.type) {
      case CORRECT_ANSWER:
        return {
          ...state,
          quizDisplay: {
            toggleAnswer: false,
            toggleQuestion: true,
          },
          quizNumbers: {
            questionNumber: state.quizNumbers.questionNumber + 1,
            quizScoreCorrect: state.quizNumbers.quizScoreCorrect + 1,
            quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect,
          },
        };
      case INCORRECT_ANSWER:
        return {
          ...state,
          quizDisplay: {
            toggleAnswer: false,
            toggleQuestion: true,
          },
          quizNumbers: {
            questionNumber: state.quizNumbers.questionNumber + 1,
            quizScoreCorrect: state.quizNumbers.quizScoreCorrect,
            quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect + 1,
          },
        };      
      case RESET_QUIZ:
        return {
          ...state,
          quizDisplay: {
            toggleAnswer: false,
            toggleQuestion: true,
          },
          quizNumbers: {
            questionNumber: 0,
            quizScoreCorrect: 0,
            quizScoreIncorrect: 0,
          },
        };
      case TOGGLE_ANSWER:
        return {
          ...state,
          quizDisplay: {
            toggleAnswer: true,
            toggleQuestion: false,
          },
        };
      default:
        return state;
    }
  };
  
  export default quizRedu;
  