import { combineReducers } from 'redux';
import decks from './decksRedu';
import quiz from './quizRedu';

export default combineReducers({
  decks,
  quiz,
});
