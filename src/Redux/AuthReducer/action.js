import axios from "axios"
import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, LOGOUT_SUCCESS } from "../actionType"

export const getAuthStatus = (mail,password) => async(dispatch)=>{
    dispatch({type:GET_AUTH_REQUEST})
    
   let res = await axios.get('https://creditguru.onrender.com/users')
    .then((res)=>{
      let data = res?.data
      
      let result = data.filter((ele)=>{
        if(ele.mail==mail && ele.password==password){
          return true
        }
        else{
          return false
        }
      })
      dispatch({type:GET_AUTH_SUCCESS,payload:result[0].name})
      return result.length
    })
    .catch((err)=>{
        dispatch({type:GET_AUTH_FAILURE})
    })

    return res
        
}   

export const LogoutSuccess = ()=>(dispatch)=>{
  dispatch({type:LOGOUT_SUCCESS})
}