import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  
  let location = useLocation()
  const isAuth = localStorage.getItem('isAuth')
  let logged;
  if(isAuth=="true"){
    logged = true;
  }
  else{
    logged = false;
  }
  if(!logged){
    return <Navigate to="/login" />
  }

  return (
    <div>
        {children}
    </div>
  )
}
