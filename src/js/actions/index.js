import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

//The second principle of Redux states that changing the state must be done by sending a signal, or dispatching an action to the store
//type property states how state chould change; payload describes what should change;
export const addArticle = (payload) => { return {type:ADD_ARTICLE,payload}};

export const getData = () => dispatch => { 
    return fetch("https://jsonplaceholder.typicode.com/post")
        .then(response => response.json())
        .then(json =>{
            dispatch({type:DATA_LOADED,payload:json});
        })
    }
