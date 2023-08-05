import { Box, Checkbox, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const SideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const initialBankName = searchParams.getAll("bankName");
    const initialCardType = searchParams.getAll("cardType");
    const initialOrder = searchParams.get("order");

    const [bankName, setBankName] = useState(initialBankName || []);
    const [cardType, setCardType] = useState(initialCardType || []);
    const [order, setOrder] = useState(initialOrder || "");

    useEffect(() => {
        let params = {
            bankName,
            cardType,
        }
        order && (params.order = order)
        setSearchParams(params)
    }, [bankName, cardType, order])


    const handleBankName = (e) => {
        const { value } = e.target;
        let newBankName = [...bankName];
        if (newBankName.includes(value)) {
            newBankName = newBankName.filter(el => el !== value)
        } else {
            newBankName.push(value)
        }
        setBankName(newBankName)
    }

    const handleCardType = (e) => {
        const { value } = e.target;
        let newCardType = [...cardType];
        if (newCardType.includes(value)) {
            newCardType = newCardType.filter((el) => el !== value)
        } else {
            newCardType.push(value)
        }
        setCardType(newCardType)

    }

    const handleSort = (e) => {
        const { value } = e.target;
        setOrder(value)
    }

    return (<Box pt={"30px"}>
        <Text as={"b"} fontSize={"lg"}>Filter By Bank Name</Text>
        <Box m={"5px"}>
            <Box>
                <Checkbox colorScheme="green" defaultChecked={bankName.includes("Bank Of America")} onChange={handleBankName} value={"Bank Of America"}>
                    Bank of America
                </Checkbox>
            </Box>
            <Box>
                <Checkbox colorScheme="green" defaultChecked={bankName.includes("Citi Bank")} onChange={handleBankName} value={"Citi Bank"}>
                    Citi Bank
                </Checkbox>
            </Box>
            <Box>
                <Checkbox colorScheme="green" defaultChecked={bankName.includes("Well Fargo")} onChange={handleBankName} value={"Well Fargo"}>
                    Well Fargo
                </Checkbox>
            </Box>
        </Box>
        <br />
        <Text as={"b"} fontSize={"lg"}>Filter By Card Type</Text>
        <Box m={"5px"}>
            <Box>
                <Checkbox colorScheme="green" defaultChecked={cardType.includes("mastercard")} onChange={handleCardType} value={"mastercard"}>
                    Mastercard
                </Checkbox>
            </Box>
            <Box>
                <Checkbox colorScheme="green" defaultChecked={cardType.includes("visa")} onChange={handleCardType} value={"visa"}>
                    Visa
                </Checkbox>
            </Box>
        </Box>
        <br />
        <Text as={"b"} fontSize={"lg"}>Sort By Price</Text>
        <RadioGroup defaultValue={order}>
            <Stack m={"5px"} direction={"column"} onChange={handleSort}>
                <Radio value={"asc"} colorScheme="green">
                    Ascending
                </Radio>
                <Radio value={"desc"} colorScheme="green" >
                    Descending
                </Radio>
            </Stack>
        </RadioGroup>
    </Box >
    )
}