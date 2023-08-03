import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const LoansPage = () => {
  return (
    <div  >
    {/* personal loans */}

        <Box style={{backgroundColor:"#ffe4c9"}}>
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px" mt="50px">
            <Heading fontSize="55px" color="#333333">Personal Loans: Compare Rates 2023</Heading>
            <Text fontSize="15px" color="#333333" pt="18px">Handpick your loan. Right Loan. Right Here. Compare personal loan offers and see your Approval Odds** before you ever click apply.</Text>
            <Link to={"/loan-form"}><Button w="500px" ml="60px" mt="15px" backgroundColor="#008600" color="white" _hover={{backgroundColor:"#008600"}}>Find a Loan</Button></Link>
            <Link><Text fontSize="15px" color="#333333" mt="15px" mb="70px"><u>Not a member? Sign up here</u></Text></Link>
        </Flex>
    
        <Flex  ml="50px">
            
            <Image w="325px" mt="35px" mb="35px" ml="100px" src="./images/personal-loan.webp"/>
        </Flex>
        </Flex>
     </Box>

     {/* loans Consolidation  */}

     <Box style={{backgroundColor:"#002356"}}>
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px" mt="50px">
            <Heading fontSize="55px" color="white">Debt Consolidation Loan Rates 2023</Heading>
            <Text fontSize="15px" color="white" pt="18px">Need extra funds? Compare offers for up to $50,000 and see if you can get the money you’re looking for.</Text>
            <Link to={"/loan-form"}><Button w="500px" ml="60px" mt="15px" backgroundColor="#008600" color="white" _hover={{backgroundColor:"#008600"}}>Find a Loan</Button></Link>
            <Link><Text fontSize="15px" color="white" mt="15px" mb="70px"><u>Not a member? Sign up here</u></Text></Link>
        </Flex>
    
        <Flex  ml="50px">
            
            <Image w="325px" mt="35px" mb="35px" ml="100px" src="./images/debt-consolidation-loan.webp"/>
        </Flex>
        </Flex>
     </Box>

     {/* home loan */}

     <Box style={{backgroundImage:"url(./images/home-loan.svg)"}}>
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px" mt="50px">
            <Heading fontSize="55px" color="#1c1b1b">Home Loans: Compare Rates 2023</Heading>
            <Text fontSize="15px" color="#1c1b1b" pt="18px">Need extra funds? Compare offers for up to $50,000 and see if you can get the money you’re looking for.</Text>
            <Button w="500px" ml="60px" mt="15px" backgroundColor="#008600" color="white" _hover={{backgroundColor:"#008600"}}>Find a Loan</Button>
            <Link><Text fontSize="15px" color="#1c1b1b" mt="15px" mb="70px"><u>Not a member? Sign up here</u></Text></Link>
        </Flex>
        </Flex>
     </Box>

     {/* education loan */}

     <Box style={{backgroundColor:"#008080"}}>
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px" mt="50px">
            <Heading fontSize="55px" color="white">Education Loans: Compare Rates 2023</Heading>
            <Text fontSize="15px" color="white" pt="18px">Need extra funds? Compare offers for up to $50,000 and see if you can get the money you’re looking for.</Text>
            <Button w="500px" ml="60px" mt="15px" backgroundColor="#008600" color="white" _hover={{backgroundColor:"#008600"}}>Find a Loan</Button>
            <Link><Text fontSize="15px" color="white" mt="15px" mb="70px"><u>Not a member? Sign up here</u></Text></Link>
        </Flex>
    
        <Flex  ml="50px">
            
            <Image w="325px" h="300px" mt="55px" mb="35px" ml="100px" src="./images/education loan.png"/>
        </Flex>
        </Flex>
     </Box>

     {/* Auto loans */}

     <Box style={{backgroundColor:"#C0C0C0"}}>
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px" mt="50px">
            <Heading fontSize="55px" color="black">New and Used Vehicle Loan</Heading>
            <Text fontSize="15px" color="black" pt="18px">Whether brand new or new to you, your dream car is just a few clicks away.</Text>
            <Button w="500px" ml="60px" mt="15px" backgroundColor="#008600" color="white" _hover={{backgroundColor:"#008600"}}>Find a Loan</Button>
            <Link><Text fontSize="15px" color="black" mt="15px"  mb="70px"><u>Not a member? Sign up here</u></Text></Link>
        </Flex>
    
        <Flex  ml="50px">
            
            <Image w="300px" mt="35px" mb="35px" ml="100px" src="./images/auto-loans.svg"/>
        </Flex>
        </Flex>
     </Box>
     
    </div>
  )
}
