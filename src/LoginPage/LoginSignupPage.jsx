import React, { useEffect, useReducer, useState } from 'react'
import * as Components from "./Components"
import axios from 'axios';
import { Box, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus } from '../Redux/AuthReducer/action';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const ini = {
    name : "",
    mail : "",
    password : "",
    dob : "",
    address : "",
    phoneNo : "",
    card : [],
}

const reducer = (state,action)=>{
    switch(action.type){

        case "CHANGE" : {
            return {
              ...state,
                [action.payload.name] : action.payload.value
            }
        }
        case "RESET" :{
            return {...ini}
        }
            
    default: return state
    
}
}

export const LoginSignupPage = () => {
    const [signIn, toggle] = React.useState(true);
    const [mail,setMail] = useState("")
    const [password,setpassword] = useState("")
    const [check,setcheck] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast();
    const logged = localStorage.getItem('isAuth')

    
    let location = useLocation()
    
    const [state,dis] = useReducer(reducer,ini)

    
    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(getAuthStatus(mail,password)).then((res)=>{
            if(res==1){
                toast({
                    title: 'SUCCESFULLY LOGGED IN',
                    status: 'success',
                    duration: 2000,
                    position:"top-right",
                    isClosable: true,
                  })
                  setTimeout(() => {
                    navigate("/")
                  }, 3000);
            }
            else{
                toast({
                    title: 'WRONG CREDENTIALS',
                    status: 'error',
                    duration: 2000,
                    position:"top-right",
                    isClosable: true,
                  })
            }
        })
        
        
    }

    const handleChange = (e)=>{
        const {value, name} = e.target

        let obj = {
            name : name,
            value : value
        }
        dis({type:"CHANGE", payload:obj})
    }


    let handleSignUp = (e)=>{
        e.preventDefault()
        if(check!==state.password){
            toast({
              title: 'Password Mismatch',
              description:"Password and Confirm Password Mismatch",
              status: 'error',
              duration: 3000,
              isClosable: true,
              position:"top-right"
            })
        }
        else{
            axios.get(`https://creditguru.onrender.com/users`)
            .then((res)=>{
            let data = res?.data
            let result = data.filter((ele)=>{
                if(ele.mail==state.mail){
                    return true
                }
          
            })
            let obj = state
            if(result.length>0){
                toast({
                  title: 'User Already Registered',
                  status: 'error',
                  duration: 2000,
                  isClosable: true,
                })
            }
            else{
                  axios.post(`https://creditguru.onrender.com/users`,obj)
                    .then((res)=>{
                    //   console.log(res)
                      toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                      })
                      
                    })
              }
              
            })
        }
        
        
    }

    useEffect(()=>{
        if(logged=="true"){
            setTimeout(() => {
                navigate(location.state)
            }, 3000);
        }
      },[logged])


    return(
        <Box padding={"30px"} display={"flex"} justifyContent={"center"} gap="20px" mt="50px">
            <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignUp}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' name="name" value={state.name} onChange={handleChange}/>
                    <Components.Input type='email' placeholder='Email' name="mail" value={state.mail} onChange={handleChange}/>
                    <Components.Input type='password' placeholder='Password' name="password" value={state.password} onChange={handleChange}/>
                    <Components.Input type='text' placeholder='Confirm Password' name="check" value={check} onChange={(e)=>setcheck(e.target.value)} />
                    <Components.Input type='text' placeholder='Phone No.' name="phoneNo" value={state.phoneNo} onChange={handleChange}/>
                    <Components.Input type='text' placeholder='Address' name="address" value={state.address} onChange={handleChange}/>
                    <Components.Input type='date' placeholder='Date Of Birth' name="dob" value={state.dob} onChange={handleChange}/>
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleLogin}>
                     <Components.Title>Sigin in</Components.Title>
                     <Components.Input type='email' placeholder='Email' value={mail} onChange={(e)=>setMail(e.target.value)} />
                     <Components.Input type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>

        <Components.ImageContainer>
            <img src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.72/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&dpr=1" alt="" />
        </Components.ImageContainer>

        </Box>
    )
}


