import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes';

export const addComment = (dishId , author,rating, comment) =>({   
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId : dishId,
            author : author,
            rating : rating,
            comment : comment,
    }   
})

export const loadDishes = dishes =>({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = dishes =>({
    type: actionTypes.DISHES_LOADING,
    payload: dishes
})

export const fetchDishes = () =>{
    return dispatch =>{
        dispatch(dishesLoading());

        setTimeout(()=>{
            dispatch(loadDishes(DISHES)); 
        },
            2000); 
    }
}
