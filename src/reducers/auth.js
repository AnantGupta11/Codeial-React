import { LOGIN_FAILED,
         LOGIN_START,
         LOGIN_SUCCESS,
         AUTHENTICATE_USER,
         LOG_OUT,
         SIGNUP_SUCCESS,
         SIGNUP_FAILED,
         SIGNUP_START
        } from "../actions/actionTypes";

const initialState = {
    user:{},
    error: null,
    isLoggedIn: false,
    inProgress: false
};

export default function auth(state=initialState, action){
    switch(action.type){
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                inProgress:true
            }
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                inProgress:false,
                error: action.error
            }
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                inProgress:false,
                user:action.user,
                inLoggedIn:true,
                error:null
            }
        case AUTHENTICATE_USER:
            return {
                ...state,
                user:action.user,
                isLoggedIn:true,
            };
        case LOG_OUT:
            return {
                ...state,
                user:{},
                isLoggedIn:false,
            };
        default:
            return state;
    }
}