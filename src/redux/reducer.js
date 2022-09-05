import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';


const dishRuducer = (dishState = DISHES, action) =>{
    return dishState;
}

const commentRuducer = (commentState = COMMENTS, action) =>{
    if(action.type === 'ADD_COMMENT'){
        let comment = action.payload;
        comment.id = commentState.length;
        comment.date = new Date().toDateString();
        return commentState.concat(comment);
        
    }
    return commentState;
}

export const Reducer = combineReducers({
    dishes: dishRuducer,
    comments : commentRuducer


})