import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, LOGOUT_SUCCESS } from "../actionType"

const initialState = {
    name : localStorage.getItem('name')||"",
    isAuth: localStorage.getItem('isAuth')||"",
    error : null
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_AUTH_REQUEST : {
            return {
                ...state,
                name:"",
                isAuth: false,
                error : false
            }
        }
        case GET_AUTH_SUCCESS : {
            localStorage.setItem("name", payload);
            localStorage.setItem("isAuth", true);
            return {
                ...state,
                name:localStorage.getItem('name'),
                isAuth: localStorage.getItem('isAuth'),
                error : false
            }
        }
        case GET_AUTH_FAILURE : {
            localStorage.removeItem("name");
            localStorage.removeItem("isAuth");
            return {
                ...state,
                name:"",
                isAuth: false,
                error : true
            }
        }
        case LOGOUT_SUCCESS :{
            localStorage.removeItem("name");
            localStorage.removeItem("isAuth");
            return {
                name:"",
                isAuth: false,
                error : false
            }
        }

        default : return {state}
    }
}