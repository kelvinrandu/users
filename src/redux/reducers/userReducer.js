import { ActionTypes } from "../constants/action-types";
const initialState = {
    users:[],
};
export const userReducer= (state = initialState , {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_USERS:
            
            return {...state, users: payload};
    
        default:
            return state;
    }

}
export const selectedUserReducer= (state = {} , {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_USERS:
            
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_USERS:
            
            return { };
    
        default:
            return state;
    }

}
export const editUserReducer= (state = {} , {type, payload})=>{
    switch (type) {
        case ActionTypes.EDIT_USER:
            
            return {payload};

    
        default:
            return state;
    }

}