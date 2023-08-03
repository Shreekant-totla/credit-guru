import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "./MoneyPage.css"
import { Faq } from './Faq'

export const MoneyPage = () => {
  return (
    <div>
        <Box>
            <Flex alignItems={"center"}  paddingLeft={"40px"} paddingTop="30px" mb={"30px"} backgroundColor={"#C8E4CE"}>
                <Box w="50%" display={"grid"} placeItems={"center"}>
                    <Box>
                    <Text fontSize={"24px"} fontWeight={"bold"} color={"#068A06"}> credit Guru <span style={{color:"black"}}>MONEY</span> </Text>
                    <Text fontSize={"54px"} color={"#80015B"}>Checking that’s built for</Text>
                    <Text fontSize={"54px"} color={"#80015B"}>how you live.</Text>
                    <Text fontSize={"24px"}>Welcome to Credit Karma Money™ Spend, an online checking</Text>
                    <Text fontSize={"24px"}>account1 created to help you take steps forward in your</Text>
                    <Text fontSize={"24px"}>financial journey. From earning cash back on select debit</Text>
                    <Text fontSize={"24px"}>purchases to improving your credit with Credit Builder and</Text>
                    <Text fontSize={"24px"}>more, this is checking made with you in mind.</Text>
                    <Button color="white" backgroundColor={"#158E14"} _hover={{backgroundColor:"#158E14", color:"white"}} width="250px" mt="15px" ml="20px">Get Started</Button>
                    </Box>
                </Box>
                <Box w="50%">
                    <img style={{width:"658px", height:"580px"}} src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/Hero-DT.png?w=1536&fm=webp" alt="" />
                </Box>
            </Flex>
            <Box id="image-one" >
                <Box id="one-img-text">
                    <Text fontWeight={"bold"} color="#80015b" fontSize={"36px"}>Grow your credit the easy way.</Text>
                    <Box mt="10px" mb="15px" fontSize={"24px"} textAlign={"left"}>
                    <Text>Building credit is oftentimes confusing and frustrating,</Text>
                    <Text>but with <span style={{fontWeight:"bold"}}>Credit Builder2</span> it doesn’t have to be. Spend</Text>
                    <Text>account holders working on their credit could easily grow</Text>
                    <Text>their score while building up savings. Plus, it’s fee-free3,</Text>
                    <Text>there’s no credit check, and you can pause payments at</Text>
                    <Text>any time.</Text>
                    </Box>
                    <Button color="white" backgroundColor={"#158E14"} _hover={{backgroundColor:"#158E14", color:"white"}} width="250px" mt="15px" ml="20px">Check Out Credit Builder</Button>
                </Box>
            </Box>
            <Box id="image-two">
            <Box id="two-img-text">
                    <Text fontWeight={"bold"} color="#80015b" fontSize={"36px"}>Earn cash back on select everyday</Text>
                    <Text fontWeight={"bold"} color="#80015b" fontSize={"36px"}>debit purchases.7</Text>
                    <Box mt="10px" mb="15px" fontSize={"24px"} textAlign={"left"}>
                    <Text>Shop smarter without lifting a finger. Spend account</Text>
                    <Text>holders can effortlessly earn cash back rewards at</Text>
                    <Text>participating retailers large and small, just for paying</Text>
                    <Text>with their Credit Karma Visa® Debit Card8. There’s no</Text>
                    <Text>minimum for payout and no extra steps to start earning.</Text>    
                    </Box>
                    <Button color="white" backgroundColor={"#158E14"} _hover={{backgroundColor:"#158E14", color:"white"}} width="300px" mt="15px" ml="20px">Learn about cash backs</Button>
                </Box>
            </Box>
            <Box h="700px" paddingTop="50px" backgroundColor={"#C8E4CE"}>
                <Text textAlign={"center"} fontWeight={"bold"} color="#80015b" fontSize={"36px"}>Everything you’d expect from checking — and then some.</Text>
                <Box className='grid'>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/icon-1-ckm.png?w=130&auto=compress" alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">Early Payday</Text>
                        <Text fontSize="15px">You could receive your paycheck up to 2 days early with direct</Text>
                        <Text fontSize="15px">deposit.9</Text>
                    </Box>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/icon-2-ckm.png?w=130&auto=compress" alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">Bill Pay</Text>
                        <Text fontSize="15px">Making payments just got easier.10 View and pay your bills in one</Text>
                        <Text fontSize="15px">place.</Text>
                    </Box>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/icon-3-ckm.png?w=130&auto=compress" alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">We Never Charge Fees</Text>
                        <Text fontSize="15px">Free to open with no penalties or minimum balance</Text>
                        <Text fontSize="15px">requirements.11</Text>
                    </Box>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/atm-access-icon.png?fm=webp" alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">Nationwide ATM Access</Text>
                        <Text fontSize="15px">Enjoy free withdrawals at more than 55,000 Allpoint ATMs across</Text>
                        <Text fontSize="15px">the country.12</Text>
                    </Box>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/alerts-icon.png?w=130&auto=compress" alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">Real Time Alerts</Text>
                        <Text>Monitor your money with notifications for purchases, deposits and</Text>
                        <Text>transfers.</Text>
                    </Box>
                    <Box>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/secure-funds-icon.png?w=130&auto=compress    " alt="" />
                        <Text fontWeight={"bold"} color="#80015b" fontSize="18px">Secured Funds</Text>
                        <Text fontSize="15px">The money in your online checking account is FDIC-insured up to</Text>
                        <Text fontSize="15px">$5 million.13</Text>
                    </Box>
                </Box>
            </Box>

            <Box >
            <Text textAlign={"center"} fontSize={"32px"} mb="20px">Common Questions</Text>
            <Faq/>
            </Box>


            <Flex mt="50px" justifyContent={"center"}>
                <Box mt={"100px"}  w="50%">
                    <Text ml="120px" fontWeight={"bold"} color="#80015b" fontSize={"36px"} >Take your financial</Text>
                    <Text ml="120px" fontWeight={"bold"} color="#80015b" fontSize={"36px"} >progress to new</Text>
                    <Text ml="120px" fontWeight={"bold"} color="#80015b" fontSize={"36px"} >heights.</Text>
                    <Text ml="120px" mt="10px" mb="15px" fontSize={"24px"} textAlign={"left"}>Open a Credit Karma Money™ Spend online</Text>
                    <Text ml="120px" mt="10px" mb="15px" fontSize={"24px"} textAlign={"left"}>checking account for free today and start</Text>
                    <Text ml="120px" mt="10px" mb="15px" fontSize={"24px"} textAlign={"left"}>climbing toward your financial goals. </Text>  
                    <Button ml="120px" color="white" backgroundColor={"#158E14"} _hover={{backgroundColor:"#158E14", color:"white"}} width="250px" mt="15px">Get Started</Button>
                </Box>
                
                <Box w="50%">
                    <img style={{width:"796px", height:"543px"}} src="https://creditkarma-cms.imgix.net/wp-content/uploads/2023/01/R3-hero1.png?w=1536&fm=webp" alt="" />
                </Box>
            </Flex>
        </Box>
    </div>
  )
}
