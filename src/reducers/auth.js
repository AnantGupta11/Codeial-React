import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
    user:{},
    error: null,
    isLoggedIn: false,
    inProgress: false
};

export default function auth(state=initialState, action){
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                inProgress:true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                inProgress:false,
                error: action.error
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                inProgress:false,
                user:action.user,
                inLoggedIn:true,
                error:null
            }
        default:
            return state;
    }
}