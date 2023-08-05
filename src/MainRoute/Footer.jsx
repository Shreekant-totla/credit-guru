import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <Box mt="50px" padding={"30px"} fontSize={"12.8px"} textAlign={"center"} color={"white"}>
        <Text>The Credit Builder plan is serviced by SeedFi and requires a no-fee SeedFi line of credit and SeedFi savings account provided by Cross River Bank, Member FDIC. You’re eligible to apply</Text>
        <Text>through Credit Karma Money if your TransUnion credit score is 619 or below at the time of application. With Credit Builder, you may be able to elect to enroll in the optional AutoSave</Text>
        <Text>program, which allows you to automatically save as little as $10 per paycheck if you contribute biweekly or semimonthly and as little as $20 per paycheck if you contribute monthly. If you</Text>
        <Text>do not elect to enroll in AutoSave, any contribution you make to Credit Builder may not be less than $10. Please see our FAQs. Banking services for Credit Karma Money Spend account is</Text>
        <Text>provided by MVB Bank, Inc, Member FDIC. Maximum balance and transfer limits apply per account. Credit Builder is not provided by MVB Bank.</Text>
    </Box>
        <Flex mt="50px"  justifyContent={"space-around"} >
            <Box  padding={"30px"} w="50%">
                <Flex gap="25px">
                    <img style={{width:"102px", height:"21px"}} src="./intuit logo.png" alt="" />
                    <img style={{width:"93px", height:"20px"}} src="./turbotax.png" alt="" />
                    <img style={{width:"93px", height:"20px"}} src="./creditguru.png" alt="" />
                    <img style={{width:"93px", height:"20px"}} src="./quickbooks.png" alt="" />
                    <img style={{width:"93px", height:"20px"}} src="./monkey.png" alt="" />
                </Flex>
                <Flex mt="90px" gap="20px">
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/Facebook.png?auto=compress%2Cformat&dpr=1" alt="" />
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/Instagram.png?auto=compress%2Cformat&dpr=1" alt="" />
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/Twitter.png?auto=compress%2Cformat&dpr=1" alt="" />
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/YouTube.png?auto=compress%2Cformat&dpr=1" alt="" />
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/TikTok.png?auto=compress%2Cformat&dpr=1" alt="" />
                    <img style={{width:"30px", height:"30px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/Pinterest.png?auto=compress%2Cformat&dpr=1" alt="" />
                </Flex>
            </Box>
            <Flex justifyContent={"center"} gap="20px" padding={"30px"} w="50%">
                
                    <Box>
                        <img style={{width:"150px", height:"150px"}} src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.97/footer/ck-footer-desktop-code.png?auto=compress%2Cformat&dpr=1" alt="" />
                    </Box>
                    <Box fontWeight={"bold"}>
                        <Text fontSize={"12.8px"} color={"white"}>Scan the QR code to</Text>
                        <Text fontSize={"12.8px"} color={"white"}>download the app</Text>
                    </Box>
                
            </Flex>
        </Flex>
        <Flex mt="30px" backgroundColor={"black"} padding="50px"  justifyContent={"space-around"} color="white">
            <Box>
                <Text fontSize={"15px"} fontWeight={700}>COMPANY INFO</Text>
                <Text>About Credit Karma</Text>
                <Text>Careers</Text>
                <Text>In The News</Text>
                <Text>Engineering Blog</Text>
                <Text>Product Blog</Text>
            </Box>
            <Box>
                <Text fontSize={"15px"} fontWeight={700}>HELP</Text>
                <Text>Help Center</Text>
                <Text>How Credit Karma Works?</Text>
                <Text>Security Practices</Text>
                <Text>Editorial Guidelines</Text>
            </Box>
            <Box>
                <Text fontSize={"15px"} fontWeight={700}>LEGAL</Text>
                <Text>Privacy Policy</Text>
                <Text>CA Privacy Policy</Text>
                <Text>Terms of Service</Text>
                <Text>Data Preferences</Text>
            </Box>
            <Box>
                <Text fontSize={"15px"} fontWeight={700}>NOTABLE LINKS</Text>
                <Text>7 ways to find Cheap Car Insurance</Text>
                <Text>7 Auto Loans for Bad Credit</Text>
                <Text>Best High - Limit Credit Cards</Text>
                <Text>How to find a No Fee ATM Machine?</Text>
                <Text>4 Best Quick Loans for Emergency Cash</Text>
                <Text>Should I Refinance my Mortgage?</Text>
                <Text>How to get a Mortgage Preapproval?</Text>
            </Box>
        </Flex>

    </div>
  )
}
