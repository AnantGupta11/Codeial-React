import { CLEAR_AUTH_STATE,AUTHENTICATE_USER, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT, SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from "./actionTypes";
import { APIurls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin(){
    return {
        type: LOGIN_START
    }
};
export function loginFailed(errorMessage){
    return {
        type: LOGIN_FAILED,
        error: errorMessage
    }
}
export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user,
    };
}

export function login(email,password){
    return (dispatch)=>{
        dispatch(startLogin());
        const url = APIurls.login();
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password}),
        })
        .then(response => response.json())
        .then((data)=>{
            console.log('data',data);
            if(data.success){
                //dispatch action to save user
                localStorage.setItem('token',data.data.token);
                dispatch(loginSuccess(data.data.user));
                return;
            }
            dispatch(loginFailed(data.message));
        })
    };
}



export function authenticateUser(user){
    return {
        type: AUTHENTICATE_USER,
        user,
    };
}

export function logoutUser(){
    return {
        type: LOG_OUT
    }
}





//SIGNUP USER
export function startSignup(){
    return {
        type: SIGNUP_START
    };
}

export function signupFailed(error){
    return {
        type: SIGNUP_FAILED,
        error,
    };
}

export function signupSuccessfull(user){
    return {
        type: SIGNUP_SUCCESS,
        user,
    }
}

export function signup(email,password, confirmPassword, name){
    return (dispatch)=>{
        // dispatch(startLogin());
        const url = APIurls.signup();
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password,confirmPassword,name}),
        })
        .then(response => response.json())
        .then((data)=>{
            // console.log('data',data);
            if(data.success){
                //dispatch action to save user
                localStorage.setItem('token',data.data.token);
                dispatch(signupSuccessfull(data.data.user));
                return;
            }
            dispatch(signupFailed(data.message));
        })
    };
}


export function clearAuthState(){
    return {
        type: CLEAR_AUTH_STATE
    }
}