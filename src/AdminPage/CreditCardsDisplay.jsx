import { Box, Button, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import "./UserLoans.css"

export const CreditCardsDisplay = ({getCreditCards,id,cardName,cardType,bankName,cardPrice,cardImg}) => {
  const toast = useToast()
  let handleDelete = ()=>{
    axios.delete(`https://creditguru.onrender.com/cards/${id}`).then((res)=>{
      getCreditCards()
      toast({
        title: "CREDIT CARD SUCCESSFULLY DELETED",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    })
  }
  return (
    <div>
      <Box className="gird-box-image">
          <img style={{width:"250px", height:"140px"}} src={cardImg} alt={cardName} />
        <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>Card Name</Text>
        <Text fontSize={"20px"} fontWeight={"bold"}>{cardName}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Card Type</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>{cardType}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Bank Name</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>{bankName}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Card Price</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>$ {cardPrice}</Text>
        </Box>
          <Button mt="5px" backgroundColor={"red.400"} _hover={{backgroundColor:"red.400"}} onClick={handleDelete}>DELETE CARD</Button>
      </Box>
    </div>
  )
}
