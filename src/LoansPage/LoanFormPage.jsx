import { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  useDisclosure,
  useToast,
  Text
} from '@chakra-ui/react';
import axios from 'axios';
// import backgroundImage from "./images/loan-background.png"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


export function LoanFormPage() {

  const divStyles = {
    backgroundImage: `url(${"./images/loan-background.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "900px",
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState(0);
  const [aadharCard, setAadharCard] = useState(null);
  const [error, setError] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()


  function reset() {
    setFirstName('');
    setLastName('');
    setDOB('');
    setLoanType('');
    setLoanTenure('');
    setLoanAmount('');
    setInterestRate(0);
    setAadharCard(null);
    setError('');
  }

  const handleLoanTypeChange = (event) => {
    const selectedLoanType = event.target.value;
    setLoanType(selectedLoanType);

    switch (selectedLoanType) {
      case 'Personal Loan':
        setInterestRate(15);
        break;
      case 'Home Loan':
        setInterestRate(7.5);
        break;
      case 'Debt Consolidation':
        setInterestRate(12);
        break;
      case 'Educational Loan':
        setInterestRate(8);
        break;
      case 'Automobile Loan':
        setInterestRate(10);
        break;
      default:
        setInterestRate(0);
        break;
    }
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setAadharCard(uploadedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or validation here
    // You can access the form data in the respective state variables
    let UserName = firstName+" "+lastName
    let obj = {

      [UserName]: {
        firstName,
        lastName,
        dob,
        loanType,
        loanTenure,
        loanAmount,
        aadharCard,
        status: false,

      }
    }
    axios.post("https://creditguru.onrender.com/users2", obj).then((res) => {
      onOpen()
    })
    reset()
  };


  if (isOpen) {
    setTimeout(() => {
      onClose();
      navigate('/');
    }, 3000);


  }


  return (<>
    <div style={divStyles}>

      <Heading color="#33FF8A" textAlign="right" mr="13%">Loan Form</Heading>

      <ChakraProvider>
        <Container maxW="md" mt={2} ml="65%">

          <Box p={6} boxShadow="md" rounded="md" backgroundColor="white" >
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  value={dob}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Type of Loan</FormLabel>
                <Select value={loanType} onChange={handleLoanTypeChange}>
                  <option value="">Select Loan Type</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Debt Consolidation">Debt Consolidation</option>
                  <option value="Educational Loan">Educational Loan</option>
                  <option value="Automobile Loan">Automobile Loan</option>
                </Select>
              </FormControl>

              {loanType !== "" && (
                <>
                  <FormControl isRequired mb={4}>
                    <FormLabel>Loan Amount</FormLabel>
                    <Input
                      type="number"
                      placeholder="Loan Amount"
                      value={loanAmount}
                      onChange={handleLoanAmountChange}
                    />
                  </FormControl>

                  <FormControl isRequired mb={4}>
                    <FormLabel>Interest Rate (in %)</FormLabel>
                    <Input
                      type="number"
                      value={interestRate}
                      isReadOnly
                      disabled
                    />
                  </FormControl>
                </>
              )}

              <FormControl isRequired mb={4}>
                <FormLabel>Loan Tenure</FormLabel>
                <Select
                  placeholder="Select Loan Tenure"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                >
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="5 years">5 years</option>
                  <option value="10 years">10 years</option>
                  <option value="15 years">15 years</option>
                  <option value="20 years">20 years</option>
                </Select>
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel>Aadhar Card Upload</FormLabel>
                <Input
                  type="file"
                  accept=".pdf, .jpg"
                  onChange={handleFileUpload}
                />
              </FormControl>

              {error && (
                <FormErrorMessage mt={2} mb={4}>
                  {error}
                </FormErrorMessage>
              )}

              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </ChakraProvider>

      <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody textAlign={"center"} fontWeight={"bold"}>
              <Text>Thank You For Applying !</Text>
              <Text>We Will Connect With You Shortly ❤️</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

    </div>
  </>
  );
}
