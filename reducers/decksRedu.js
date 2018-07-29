import { ADD_NEW_CARD, ADD_NEW_DECK, ADD_NEW_DECK_FULL, CLEAR_DECKS } from '../actions/deckActions';

export const initialDeckData = {
  React: {
    title: 'React',
    quizLength: 2,
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    quizLength: 1,
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const decksRedu = (state ={}, action) => {
  switch (action.type) {
    case CLEAR_DECKS:
    state = {}
      return state
    case ADD_NEW_DECK_FULL:
      return {        
        ...state,
        ...action.payload
      }
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.title]: {
          title: state[action.payload.title].title,
          quizLength: state[action.payload.title].quizLength + 1,
          questions: [
            ...state[action.payload.title].questions,
            {
              question: action.payload.question,
              answer: action.payload.answer,
            },
          ],
        },
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.title]: {
          ...action.payload,
          quizLength: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default decksRedu;
