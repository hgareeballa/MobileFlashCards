import {submitEntry} from '../utils/api'

const logger = (store)=>(next)=>(action)=>{    
    console.group(action.type)
        //console.log('the action: ', action);
        const returnValue = next(action)
        //console.log('the new state: ',store.getState().decks);         
        switch (action.type) {
            case "ADD_NEW_DECK":submitEntry(store.getState().decks) 
            break;
            case "ADD_NEW_CARD":submitEntry(store.getState().decks)  
            break;
            case "CLEAR_DECKS":submitEntry(store.getState().decks)  
            break;
        }                         
    console.groupEnd()
    return returnValue
}
export default logger

