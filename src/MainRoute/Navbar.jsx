import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export const Navbar = () => {
  return (
    <div>
        <Box >
         <Flex padding={"10px"} h="60px" w="100%" justifyContent={"space-between"} alignItems={"center"}>
            <Link to={"/"} style={{color:"#008701", width:"10%"}}> <span style={{fontWeight:"bold", fontSize:"25px"}}>creditGuru</span> </Link>
         <Flex mr="500px" w="50%" justifyContent={"space-evenly"}>
            <Link className='onHover-NavLink'>Credit Card</Link>
            <Link className='onHover-NavLink' to={"/loans"}>Loan</Link>
            <Link className='onHover-NavLink'>Home</Link>
            <Link className='onHover-NavLink' to="/money" >Money</Link>
            <Link className='onHover-NavLink'>Debt Calculator</Link>
            <Link className='onHover-NavLink'>Credit Scores</Link>
         </Flex>
         <Flex w="20%" textAlign={"center"} justifyContent={"space-evenly"}>
            <Link className='onHover-NavLink'>Login</Link>
            <Link className='onHover-NavLink'>Sign Up</Link>
            <Link className='onHover-NavLink'>Help</Link>
         </Flex>
         </Flex>
        </Box>
    </div>
  )
}
