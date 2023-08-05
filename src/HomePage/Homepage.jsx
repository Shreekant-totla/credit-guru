import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const Homepage = () => {
    return (
        <div>
            <Flex padding="20px" backgroundColor={"#E3CFED"}>
                <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} w="50%">
                    <Box mt="20px" w="44%">
                        <Text fontSize={"40px"} lineHeight={1.15} fontWeight={300}>Where credit meets confidence.</Text>
                    </Box>
                    <Box mt="20px" w="43%">
                        <Text fontSize={"20px"} >Intuit Credit Karma uses your credit profile to show you curated recommendations. Plus, you can see your Approval Odds¹ before you apply without impacting your scores.</Text>
                    </Box>
                    <Link to="/login">
                        <Flex mt="30px" gap={"80px"}>
                            <Button w="95px" backgroundColor={"#008701"} color={"white"} _hover={{ backgroundColor: "#008701" }}>Sign Up</Button>
                            <Button w="95px" border={"1px solid #008701"} backgroundColor={"white"} color={"#008701"}>Log in</Button>
                        </Flex>
                    </Link>
                </Flex>
                <Flex w="493px">
                    <img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/karmaConfidence/hero/CC+PL_DESKTOP_3x.png?auto=format" alt="" />
                </Flex>
            </Flex>
            <Text mt="80px" textAlign={"center"} fontSize={"32px"}>Financial products for every step of your journey.</Text>
            <Flex mb="80px" padding="30px" mt="10px" justifyContent={"center"} gap="30px">
                <Flex flexDirection={"column"}><Flex backgroundColor={"#FEDCDD"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><Link to={"/credit-cards"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Credit_Card@2x.png?auto=format%2Ccompress&dpr=1" alt="" /></Link>  </Flex><p>Cards</p></Flex>
                <Flex flexDirection={"column"}><Flex backgroundColor={"#C9E4CF"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><Link to={"/loans"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Loans@2x.png?auto=format%2Ccompress&dpr=1" alt="" /></Link>  </Flex><p>Loans</p></Flex>
                <Flex flexDirection={"column"}><Flex backgroundColor={"#FFE4C9"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Accounts@2x.png?auto=format%2Ccompress&dpr=1" alt="" />  </Flex><p>Accounts</p></Flex>
                <Flex flexDirection={"column"}><Flex backgroundColor={"#C1E1EA"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Savings@2x.png?auto=format%2Ccompress&dpr=1" alt="" />  </Flex><p>Savings</p></Flex>
                <Flex flexDirection={"column"}><Flex backgroundColor={"#FEDCDD"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Auto@2x.png?auto=format%2Ccompress&dpr=1" alt="" />  </Flex><p>Auto</p></Flex>
                <Flex flexDirection={"column"}><Flex backgroundColor={"#C9E4CF"} justifyContent={"center"} borderRadius={"10px"} padding={"5px"}><img style={{ width: "70%" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/swimlane/Home@2x.png?auto=format%2Ccompress&dpr=1" alt="" /> </Flex> <p>Home</p></Flex>
            </Flex>
            <Flex justifyContent={"center"}>
                <Box h="1000px" padding={"50px"} w="50%" display={"grid"} placeItems={"center"} backgroundColor={"#C9E4CF"}>
                    <Box>
                        <img style={{ paddingLeft: "1rem", paddingRight: "1rem", height: "300px", width: "350px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/ck_money_steps.png?auto=format%2Ccompress" alt="" />
                    </Box>
                    <Box mt="20px">
                        <Text fontSize={"32px"} w="200px">Build credit the easy way.</Text>
                        <Text fontSize={"20px"} mt="20px" w="370px">If you are new to credit, putting away as little as $10 per paycheck could help your score go up. Just a few clicks and you could be approved instantly to start improving your credit in as little as two months.</Text>
                        <Button backgroundColor={"#008701"} color={"white"} _hover={{ backgroundColor: "#008701", color: "white" }} mt="20px">Start Now</Button>
                    </Box>
                </Box>
                <Flex padding={"30px"} w="50%" display={"grid"} placeItems={"center"} backgroundColor={"#FFE4C9"}>
                    <img style={{ height: "300px", width: "350px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/Relief_Roadmap@2x.png?auto=format%2Ccompress" alt="" />
                    <Text fontSize={"32px"} w="350px">Get the personalized relief you need.</Text>
                    <Text fontSize={"20px"} w="370px">Relief roadmap connects you to government support and personalized debt relief options.</Text>
                    <Button backgroundColor={"#008701"} color={"white"} _hover={{ backgroundColor: "#008701", color: "white" }} mt="20px">See your roadmap</Button>
                </Flex>
            </Flex>
            <Flex marginTop={"150px"} mb="100px">
                <Box w="50%" display={"grid"} placeItems={"center"}>
                    <Text fontSize={"32px"} width={"300px"}>Financial progress starts with credit health.</Text>
                </Box>
                <Box w="50%" display={"grid"} placeItems={"center"}>
                    <Box w="50%">
                        <Flex gap="20px">
                            <Box>
                                <img style={{ width: "50px", height: "50px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/benefitPillar/Credit_Monitoring@2x.png?auto=format%2Ccompress&dpr=1" alt="" />
                            </Box>
                            <Box fontSize={"15px"}>
                                <p>Credit monitoring</p>
                                <p>Get alerted to important changes to</p>
                                <p>your reports.</p>
                            </Box>
                        </Flex>
                        <Flex mt="20px" gap="20px">
                            <Box>
                                <img style={{ width: "50px", height: "50px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/benefitPillar/Insights@2x.png?auto=format%2Ccompress&dpr=1" alt="" />
                            </Box>
                            <Box fontSize={"15px"}>
                                <p>Insights</p>
                                <p>Learn what affects your scores and</p>
                                <p>what you can do to improve them.</p>
                            </Box>
                        </Flex>
                        <Flex mt="20px" gap="20px">
                            <Box>
                                <img style={{ width: "50px", height: "50px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/benefitPillar/Better_Decision@2x.png?auto=format%2Ccompress&dpr=1" alt="" />
                            </Box>
                            <Box fontSize={"15px"}>
                                <p>Better decisions</p>
                                <p>Get personalized recommendations</p>
                                <p>for ways to use your credit more</p>
                                <p>wisely.</p>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent={"center"}>
                <Box w="50%">
                    <img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/Download_App_Desktop@2x.png?auto=format%2Ccompress" alt="" />
                </Box>
                <Box display={"grid"} placeItems={"center"} w="50%">
                    <Box>
                        <Text fontSize={"32px"}>Get started.</Text>
                        <Text fontSize={"20px"}>Download the app and join over 100</Text>
                        <Text fontSize={"20px"}>million members making financial</Text>
                        <Text fontSize={"20px"}>progress.</Text>
                        <Flex gap="20px">
                            <img style={{ width: "135px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/apple_app_store@2x.png?auto=format%2Ccompress" alt="" />
                            <img style={{ width: "150px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/google_play_store@2x.png?auto=format%2Ccompress" alt="" />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent={"center"}>
                <Box display={"grid"} placeItems={"center"} w="50%">
                    <Box>
                        <Text fontSize={"32px"}>Articles and resources.</Text>
                        <Text fontSize={"20px"}>Editorial insights to help you reach</Text>
                        <Text fontSize={"20px"}>your financial goals.</Text>
                        <Button backgroundColor={"#008701"} color="white" _hover={{ backgroundColor: "#008701" }}>Read More</Button>
                    </Box>
                </Box>
                <Box w="50%">
                    <img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/Editorial_Desktop@2x.png?auto=format%2Ccompress" alt="" />
                </Box>
            </Flex>
            <Flex marginTop={"100px"} mb="100px">
                <Box w="50%" display={"grid"} placeItems={"center"}>
                    <Text fontSize={"32px"} textAlign={"center"}>We've got you covered.</Text>
                </Box>
                <Box w="50%">
                    <Flex gap="20px">
                        <Box>
                            <img style={{ width: "48px", height: "48px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/benefitPillar/Lock@2x.png?auto=format%2Ccompress&dpr=1" alt="" />
                        </Box>
                        <Box fontSize={"15px"}>
                            <Text>We treat your data like it's our own.</Text>
                            <Text>We don't share your personal</Text>
                            <Text>information with unaffiliated third</Text>
                            <Text>parties for their own advertising or</Text>
                            <Text>marketing purposes.</Text>
                        </Box>
                    </Flex>
                    <Flex mt="20px" gap="20px">
                        <Box>
                            <img style={{ width: "48px", height: "48px" }} src="https://ck-content.imgix.net/res/content/bundles/homepage/2.7.0/assets/benefitPillar/Security@2x.png?auto=format%2Ccompress&dpr=1" alt="" />
                        </Box>
                        <Box fontSize={"15px"}>
                            <Text>We take your security seriously.</Text>
                            <Text>We use 128-bit or higher encryption</Text>
                            <Text>to protect during the transmission of</Text>
                            <Text>your data to our site.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box textAlign={"center"} display={"grid"} placeItems={"center"}>
                <Text fontSize={"13px"}>Approval Odds are not a guarantee of approval. Credit Karma determines Approval Odds by comparing your credit profile to other Credit Karma members who were approved for the</Text>
                <Text fontSize={"13px"}>product shown, or whether you meet certain criteria determined by the lender. Of course, there's no such thing as a sure thing, but knowing your Approval Odds may help you narrow down</Text>
                <Text fontSize={"13px"}>your choices. For example, you may not be approved because you don't meet the lender's "ability to pay standard" after they verify your income and employment; or, you already have the</Text>
                <Text fontSize={"13px"}>maximum number of accounts with that specific lender.</Text>
            </Box>
        </div>
    )
}
