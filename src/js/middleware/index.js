import {ADD_ARTICLE,FOUND_BAD_WORD} from "../constants/action-types";

const forbiddenWords =["spam","money"];
let foundWord = [];

//The first function accepts dispatch as a parameter and returns a function that accepts next as a parameter.
//Finally, the second function accepts the dispatched acton as a parameter.
//The next() function pass the action to the next middleware once it's done executing.

// export function forbiddenWordsMiddleware({dispatch}){
//     return function(next){
//         return function(action){
//             if(action.type === ADD_ARTICLE)
//                 foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
        
//             if(foundWord.length)
//                 return dispatch({type:"FOUND_BAD_WORD"});
//             return next(action)
//         }
//     }
// }

//ES6 Version

export const forbiddenWordsMiddleware = ({dispatch}) => next => action => {
            if(action.type === ADD_ARTICLE)
                foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
                
            if(foundWord.length)
                return dispatch({type:FOUND_BAD_WORD});
            next(action)
}