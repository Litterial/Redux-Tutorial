import { createStore } from 'redux';
import rootReducer from "../reducers/index";

//creates a redux store that holds the complete state tree of the app. createStore(reducer,[preloadedState],[enhancer])
//Reducer is a reducing function that returns the next state tree, given the current state tree and an action to handle.
const store = createStore(rootReducer);

export default store;