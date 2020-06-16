import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers/index";
import {forbiddenWordsMiddleware} from "../middleware";
import thunk from "redux-thunk";
//creates a redux store that holds the complete state tree of the app. createStore(reducer,[preloadedState],[enhancer])

//Reducer is a reducing function that returns the next state tree, given the current state tree and an action to handle.

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
// Middleware acts as a middleman between dispatching an action and the reducer. 
//It's mostly used for logging, crash reports, and asynchronous task.

const store = createStore(
    rootReducer,storeEnhancers(applyMiddleware(forbiddenWordsMiddleware,thunk)));

export default store;