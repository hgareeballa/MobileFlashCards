import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciMobileFlash:deck'

export function getDecks(){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)                 
}//

export function submitEntry (value) {      
  console.log(">>>>>>>>>>>>>>>>>>>>>> UPDATE DB<<<<<<<<<<<<<<<<<<<,");      
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then( data => {
      data = value
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify( data ) );
    }).done();             
}//


export const initialDeckData = {
  React: {
    title: 'React',
    quizLength: 2,
    questions: [
      {
        question: 'What is React Native?',
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
