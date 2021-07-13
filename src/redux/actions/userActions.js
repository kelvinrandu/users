import { ActionTypes } from '../constants/action-types'
export const setUsers = (users) =>{
    return {
        type:ActionTypes.SET_USERS,
        payload:users,
    }
}
export const selectedUsers = (user) =>{
    return {
        type:ActionTypes.SELECTED_USERS,
        payload:user,
    }
}
export const removeSelectedUsers = () =>{
    return {
        type:ActionTypes.REMOVE_SELECTED_USERS,
      
    }
}
export const editUser = () =>{
    return {
        type:ActionTypes.EDIT_USER,
       
      
    }
}