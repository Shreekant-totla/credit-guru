import { Box, Button, Center, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";

export const Cards = ({ cardNumber, bankName, expire, cvv, bankCard }) => {

    const [userName, setUserName] = useState(localStorage.getItem("name"));
    const [showCVV, setShowCVV] = useState(false);

    const handleShowCVV = () => {
        setShowCVV(!showCVV);
    };


    return <Box m={7}>
        <Flex w={"75%"} margin={"auto"} p={5} boxShadow={"lg"} backgroundColor={"white"} borderRadius={"15px"}>
            {showCVV ? <Box backgroundImage={"url('./images/bg-card-back.png')"}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="md"
                boxShadow="md"
                p={4}
                height="200px"
                w={"35%"}>
                <Text as={"b"} position={"relative"} top={"80px"} left={"275px"}>
                    CVV
                </Text>
                <Text as={"b"} position={"relative"} top={"35px"} left={"270px"}>
                    ***{cvv}
                </Text>
                <Center>
                    <Button onClick={handleShowCVV} size={"sm"} w={"30%"}>Hide CVV</Button>
                </Center>

            </Box> :
                <Box backgroundImage={"url('./images/bg-card-front.png')"}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    borderRadius="md"
                    boxShadow="md"
                    p={4}
                    height="200px"
                    w={"35%"}>
                    <Text fontWeight="bold" fontSize="xl" mb={2} color={"white"} as={"b"} textAlign={"end"}>
                        {bankName}
                    </Text>
                    <Center>
                        <Text fontSize="xl" mb={2} as={"b"}>
                            {cardNumber}
                        </Text>
                    </Center>

                    <Flex justify={"space-between"}>
                        <Flex align={"center"}>
                            <Text as={"b"}>
                                {userName}
                            </Text>
                        </Flex>
                        <Flex flexDirection={"column"}>
                            <Text fontSize="md" as={"b"} textAlign={"end"}>
                                valid till
                            </Text>
                            <Text fontSize="md" mb={2} as={"b"} textAlign={"end"}>
                                {expire}
                            </Text>
                        </Flex>
                    </Flex>
                    <Center>
                        <Button onClick={handleShowCVV} size={"sm"} w={"30%"}>
                            Show CVV
                        </Button>
                    </Center>

                </Box>}
            <Box ml={"100px"} >
                <Text as={"b"}>
                    Card Holder: {userName}
                </Text>
                <Text fontWeight={"bold"} mt={5}>
                    Bank: {bankName}
                </Text>
                <Text fontWeight={"bold"} mt={5}>
                    Card: {bankCard}
                </Text>
                <Text fontWeight={"bold"} mt={5}>
                    Card Number: {cardNumber}
                </Text>
                <Text fontWeight={"bold"} mt={5}>
                    Valid till: {expire}
                </Text>
            </Box>
        </Flex>
    </Box>
}