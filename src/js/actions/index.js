import { ADD_ARTICLE } from "../constants/action-types";

//The second principle of Redux states that changing the state must be done by sending a signal, or dispatching an action to the store
//type property states how state chould change; payload describes what should change;
export function addArticle(payload){

    return {type:ADD_ARTICLE,payload}

};