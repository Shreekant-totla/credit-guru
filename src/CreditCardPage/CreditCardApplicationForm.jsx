import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const CreditCardApplicationForm = ({userId}) => {
  // const {id} = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const auth = localStorage.getItem("isAuth");

  const navigate = useNavigate()
  
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [generationDate, setGenerationDate] = useState('');

  const toast = useToast()

  const [userData,setUserData] = useState([])
  
  const [formErrors, setFormErrors] = useState({});

  const [data,setData] = useState({});

  
  const fetchandRender = () => {
    if(auth){
      axios.get(`https://creditguru.onrender.com/cards/${userId}`).then((res) => {
        setData(res.data);
      })
      onOpen();
    }else{
      navigate("/login")
    }
    }
  

  const username = localStorage.getItem('name');
  
  const obj ={
    name: username,
    email: '',
    phoneNumber: '',
    bankName:'',
    cardName:'',
    income: '',
    panCard: null,
    aadharCard:null
  }

  useEffect(()=>{
    axios.get("https://creditguru.onrender.com/users").then((res)=>setUserData(res.data))
  },[])
 

  const [formData, setFormData] = useState(obj);

  const [cardDetails,setCardDetails] = useState({})
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  const handlePanCardUpload = (e) => {
    
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      panCard: file,
    }));
    
    setFormData((prev)=>({
      ...prev,
      bankName:data.bankName,
      cardName:data.cardName,
      cardNumber,cvv,expiryDate,generationDate
    }))
  };

  const handleAadharCardUpload= (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      aadharCard: file,
    }));
    const randomCardNumber = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');
    const randomCVV = Math.floor(Math.random() * 900 + 100).toString();
    const currentDate = new Date();
    const randomExpiryMonth = Math.floor(Math.random() * 12 + 1);
    const randomExpiryYear = currentDate.getFullYear() + Math.floor(Math.random() * 5 + 1);
    const randomExpiryDate = `${randomExpiryMonth}/${randomExpiryYear}`;

    const formattedCardNumber = formatCardNumber(randomCardNumber);

    setCardNumber(formattedCardNumber);
    setCVV(randomCVV);
    setExpiryDate(randomExpiryDate);
    setGenerationDate(currentDate.toDateString());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData,"ini")
    for(let i=0;i<userData.length;i++){
    if(userData[i].name === username){
      
      console.log(userData[i].card,"cardss")
      axios.patch(`https://creditguru.onrender.com/users/${userData[i].id}`,{
        card:[...userData[i].card,{
          cardNumber: formData.cardNumber,
          cvv:formData.cvv,
          expire:formData.expiryDate,
          bankName:formData.bankName,
          bankCard:formData.cardName
        }]
      }
      ).then((res)=>{
        toast({
          title: 'SUCCESSFULLY APPLIED FOR CARD',
          status: 'success',
          duration: 2000,
          position:"top-right",
          isClosable: true,
        })
      })
      console.log(userData[i].id,"id")
    }
  }
    // if(formData.name===user){
    // axios.post("https://creditguru.onrender.com/users/card",formData)
    // }
    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.income) {
      errors.income = 'Income is required';
    }
    if (!formData.cardName) {
      errors.cardName = 'Card Name is required';
    }
    if(!formData.panCard) {
      errors.panCard = 'Pan Card is Requires';
    }
    if(!formData.aadharCard) {
      errors.aadharCard = 'Aadhar Card is Requires';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission logic here
      // console.log('Form submitted:', formData);
      // Reset form
      setFormData(obj);
      setFormErrors({});
    }
  };

  const formatCardNumber = (cardNumber) => {
    const formatted = cardNumber
      .split('')
      .map((digit, index) => (index !== 0 && index % 4 === 0 ? ' ' + digit : digit))
      .join('');
    return formatted;
  }
  
  
  return (
    <Box>
        <Button  backgroundColor={"#008600"} color={"white"} width={"85%"} mt={"8px"} onClick={ fetchandRender}>Continue</Button>
  
        <Modal isCentered
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          size={"xl"}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay bg='blackAlpha.300'
        backdropFilter='blur(10px)' />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton /><form>
            <Flex>
            <ModalBody >
            
            <FormControl id="name" isRequired isInvalid={!!formErrors.name} isDisabled>
              <FormLabel color="#000000">Name</FormLabel>
              <Input type="text" name="name" value={formData.name} border="1.5px dashed white"  />
              <FormErrorMessage>{formErrors.name}</FormErrorMessage>
            </FormControl>
          
          
            <FormControl id="email" isRequired isInvalid={!!formErrors.email}>
              <FormLabel color="#000000">Email</FormLabel>
              <Input type="email" name="email" value={formData.email} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            </FormControl>
        
          
            <FormControl id="phoneNumber" isRequired isInvalid={!!formErrors.phoneNumber}>
              <FormLabel color="#000000">Phone Number</FormLabel>
              <Input type="text" name="phoneNumber" value={formData.phoneNumber} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.phoneNumber}</FormErrorMessage>
            </FormControl>
          
            <FormControl id="income" isRequired isInvalid={!!formErrors.income}>
              <FormLabel color="#000000">Income</FormLabel>
              <Input type="text" name="income" value={formData.income} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.income}</FormErrorMessage>
            </FormControl>
          
            <FormControl id="bankName"  isDisabled>
              <FormLabel color="#000000">Bank Name</FormLabel>
              <Input type="text" name="bankName" value={data.bankName} border="1.5px dashed white" />
              <FormErrorMessage>{formErrors.bankName}</FormErrorMessage>
            </FormControl>
          
            <FormControl id="cardName"  isDisabled>
              <FormLabel color="#000000">Card Name</FormLabel>
              <Input type="text" name="cardName" value={data.cardName} border="1.5px dashed white"/>
              <FormErrorMessage>{formErrors.cardName}</FormErrorMessage>
            </FormControl>
          
          {/* <GridItem>
            <FormControl id="creditScore" isRequired isInvalid={!!formErrors.creditScore}>
              <FormLabel color="#000000">Credit Score</FormLabel>
              <Select name="creditScore" value={formData.creditScore} border="1.5px dashed white" onChange={handleChange}>
                <option value="">Select</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </Select>
              <FormErrorMessage>{formErrors.creditScore}</FormErrorMessage>
            </FormControl>
          </GridItem> */}
          <FormControl id="aadharCard" isRequired isInvalid={!!formErrors.aadharCard}>
              <FormLabel color="#000000">Aadhar Card</FormLabel>
              <Input type="file" name="aadharCard" accept="image/*" border="1.5px dashed white" onChange={handleAadharCardUpload} />
              <FormErrorMessage>{formErrors.aadharCard}</FormErrorMessage>
            </FormControl>
          
            <FormControl id="panCard" isRequired isInvalid={!!formErrors.panCard}>
              <FormLabel color="#000000">PAN Card</FormLabel>
              <Input type="file" name="panCard" accept="image/*" border="1.5px dashed white" onChange={handlePanCardUpload} />
              <FormErrorMessage>{formErrors.panCard}</FormErrorMessage>
            </FormControl>
          
        
            </ModalBody></Flex>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter></form>
          </ModalContent>
        </Modal> 
        </Box>
    )
  }



  