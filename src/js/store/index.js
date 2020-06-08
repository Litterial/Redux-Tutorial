import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/index";
import {forbiddenWordsMiddleware} from "../middleware";
//creates a redux store that holds the complete state tree of the app. createStore(reducer,[preloadedState],[enhancer])

//Reducer is a reducing function that returns the next state tree, given the current state tree and an action to handle.

// Middleware acts as a middleman between dispatching an action and the reducer. 
//It's mostly used for logging, crash reports, and asynchronous task.
const store = createStore(rootReducer,applyMiddleware(forbiddenWordsMiddleware));

export default store;