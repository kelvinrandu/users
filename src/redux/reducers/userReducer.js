import { ActionTypes } from "../constants/action-types";
const initialState = {
    users:[{
        id:1,
        title:"maresh",
        category:"programmer"
    }]
}
export const userReducer= (state = initialState , {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_USERS:
            
            return state;
    
        default:
            return state;
    }

}