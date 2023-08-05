import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useToast,
  } from '@chakra-ui/react'
import axios from 'axios'

  
//     "cardName": 
//     "cardType": 
//     "cardImg": 
//     "bankName": " ",
//     "reviews": ,
//     "cardPrice": 
//     "IBTapr": "
//     "RBTapr": ,
//     "BTF": "
//     "AF": 
//      details
export const AddCards = ({getCreditCards}) => {

    const [cardName, setCardName] = React.useState('')
    const [cardType, setCardType] = React.useState('')
    const [cardImg, setCardImg] = React.useState('')
    const [bankName, setBankName] = React.useState('')
    const [reviews, setReviews] = React.useState('')
    const [cardPrice, setCardPrice] = React.useState('')
    const [IBTapr, setIBTapr] = React.useState('')
    const [RBTapr, setRBTapr] = React.useState('')
    const [BTF, setBTF] = React.useState('')
    const [AF, setAF] = React.useState('')
    const [details, setDetails] = React.useState('')
    const toast = useToast()

    function reset(){
      setCardName('')
      setCardType('')
      setCardImg('')
      setBankName('')
      setReviews('')
      setCardPrice('')
      setIBTapr('')
      setRBTapr('')
      setBTF('')
      setAF('')
      setDetails('')
    }


    let handleSubmit = (e)=>{
      let obj = {
        cardName: cardName,
        cardType: cardType,
        cardImg: cardImg,
        bankName: bankName,
        reviews: Number(reviews),
        cardPrice: Number(cardPrice),
        IBTapr: IBTapr,
        RBTapr: RBTapr,
        BTF: BTF,
        AF: Number(AF),
        details: details
      }
      axios.post("https://creditguru.onrender.com/cards", obj).then((res)=>{
        getCreditCards()
        reset()
        toast({
          title: 'NEW CARD ADDED',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        
       
      })
    }
    
  return (
    <div>
        <FormControl>
            <FormLabel>Card Name</FormLabel>
            <Input type='text'  value={cardName} onChange={(e)=>setCardName(e.target.value)} />
            <FormLabel>Card Type</FormLabel>
            <Input type='text' value={cardType} onChange={(e)=>setCardType(e.target.value)} />
            <FormLabel>Card Image</FormLabel>
            <Input type='text' value={cardImg} onChange={(e)=>setCardImg(e.target.value)} />
            <FormLabel>Bank Name</FormLabel>
            <Input type='text'  value={bankName} onChange={(e)=>setBankName(e.target.value)}/>            
            <FormLabel>Reviews</FormLabel>
            <Input type='number' value={reviews} onChange={(e)=>setReviews(e.target.value)} />
            <FormLabel>Card Price</FormLabel>
            <Input type='number' value={cardPrice} onChange={(e)=>setCardPrice(e.target.value)} />
            <FormLabel>IBT APR</FormLabel>
            <Input type='text' value={IBTapr} onChange={(e)=>setIBTapr(e.target.value)} />
            <FormLabel>RBT APR</FormLabel>
            <Input type='text' value={RBTapr} onChange={(e)=>setRBTapr(e.target.value)} />
            <FormLabel>BTF</FormLabel>
            <Input type='text' value={BTF} onChange={(e)=>setBTF(e.target.value)} />
            <FormLabel>Annual Fees</FormLabel>
            <Input type='number' value={AF} onChange={(e)=>setAF(e.target.value)} />
            <FormLabel>Details</FormLabel>
            <Input type='text' value={details} onChange={(e)=>setDetails(e.target.value)} />
            <Input onClick={handleSubmit} mt="30px" _hover={{backgroundColor:"green.400", boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", color:"white"}} type='submit' />
        </FormControl>
    </div>
  )
}
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;