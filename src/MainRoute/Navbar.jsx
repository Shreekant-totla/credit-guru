import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuItemOption,
   MenuGroup,
   MenuOptionGroup,
   MenuDivider,
 } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutSuccess } from '../Redux/AuthReducer/action'



export const Navbar = () => {

   const data = useSelector((store)=>store.authReducer)
   const isAuth = localStorage.getItem('isAuth')
   const name = localStorage.getItem('name')
   const adminAuth = localStorage.getItem('adminAuth')
   const toast = useToast()
   let dispatch = useDispatch()
   let navigate = useNavigate()

   // console.log(name, isAuth)

   let handleClick = ()=>{
      dispatch(LogoutSuccess())
      toast({
         title: 'Logged out',
         status: 'error',
         duration: 2000,
         position:"top-right",
         isClosable: true,
       })
   }

   let adminLogOut = ()=>{
      localStorage.removeItem("adminAuth");
      toast({
         title: 'Logged out',
         status: 'error',
         duration: 2000,
         position:"top-right",
         isClosable: true,
       })
       navigate("/login")
   }

   


  return (
    <div>
        <Box boxShadow={"lg"} border={"1px solid #E2E8F0"} >
         <Flex padding={"10px"} h="60px" w="100%" justifyContent={"space-between"} alignItems={"center"}>
            <Link to={"/"} style={{color:"#008701", width:"10%"}}> <span style={{fontWeight:"bold", fontSize:"25px"}}>creditGuru</span> </Link>
         <Flex mr="500px" w="50%" justifyContent={"space-evenly"}>
            <Link className='onHover-NavLink' to={"/credit-cards"} >Credit Card</Link>
            <Link className='onHover-NavLink' to={"/loans"}>Loan</Link>
            <Link className='onHover-NavLink'>Home</Link>
            <Link className='onHover-NavLink' to="/money" >Money</Link>
            <Link className='onHover-NavLink' to={"/loan-calculator"}>EMI Calculator</Link>
            <Link className='onHover-NavLink' to={"/credit-score"}>Credit Scores</Link>
            
         </Flex>
         <Flex w="20%" textAlign={"center"} justifyContent={"space-evenly"}>

            {
               isAuth=="true"  ? (
                  <Menu>
            <MenuButton as={Button} backgroundColor='#8DDD76' _hover={{backgroundColor:"#8DDD76"}}>
               {name}
            </MenuButton>
            <MenuList>
               <MenuGroup title='Profile'>
                  <Link to="/user-credit-cards" ><MenuItem>My Cards</MenuItem></Link>
                  <MenuItem onClick={handleClick}>Sign Out </MenuItem>
               </MenuGroup>
            </MenuList>
            </Menu>
               ) : ( 
                 
                  
                         <Link  className='onHover-NavLink' to="/login">Sign Up</Link>
                  
                  
                
               )
            }

            {
               adminAuth=="true" ? (
                  <Link to="#" style={{color:"red"}} className='onHover-NavLink' onClick={adminLogOut}>Log Out</Link>
               ) : (
                  <Link  className='onHover-NavLink' to="/admin">Admin</Link>
               )
            }
            <Link className='onHover-NavLink'>Help</Link>
         </Flex>
         </Flex>
        </Box>
    </div>
  )
}
