export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export function addNewCard(payload){
  return {
      type:ADD_NEW_CARD,
      payload
  }
}//

export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export function addNewDeck(payload){
  return {
      type:ADD_NEW_DECK,
      payload
  }
}//


export const ADD_NEW_DECK_FULL = 'ADD_NEW_DECK_FULL';
export function addNewDeckFull(payload){
  return {
      type:ADD_NEW_DECK_FULL,
      payload
  }
}//


export const CLEAR_DECKS = 'CLEAR_DECKS';
export function ClearDecks(payload){
  return {
      type:CLEAR_DECKS,
      payload
  }
}//

