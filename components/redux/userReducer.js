import { ADD_TO_CART,REMOVE_FROM_CART, SET_USER_DATA } from "./constants";
const initialState = [];
export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_USER_DATA:
            return [
                action.data
            ]
        default:
            return state;
    }
}