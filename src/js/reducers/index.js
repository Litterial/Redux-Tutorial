import store from "../store";
import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles : [],
    remoteArticles:[]
}
//3rd principle of Redux: state is immutable and cannot be changed in place
//Function must be pure; return same output for same input;
//reducer accepts two parameters: state and action.

//when action is dispatched, store sends the action object to the reducer and the reducer produces the new state 
//and merges the action playon in the new state
const rootReducer = (state = initialState,action) => {
    if (action.type === ADD_ARTICLE) {
        //returns an object that includes state, an empty array
        //returns key-value pair. Key(articles): Value(an array of all objects AND the Payload)
       return { ...state, articles:[...state.articles,action.payload]};
    }

    if (action.type === DATA_LOADED){
        return { ...state,remoteArticles:[...state.remoteArticles,action.payload]};
    }
    return state;
};

export default rootReducer;