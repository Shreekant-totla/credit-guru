// import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const pieData = [
//     { name: "Principal", value: 5000 },
//     { name: "Interest", value: 500 },
//     { name: "Fees and Charges", value: 300 },
//   ];
  
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

//   const LoanTenure = () => {
//     return (
//       <Box p={4}>
//         <Text fontSize="xl" fontWeight="bold">Loan Tenure Calculator</Text>
  
//         {/* Sliders */}
//         <Box mt={4}>
//           <Text>Principal</Text>
//           <Slider defaultValue={1000} min={0} max={5000} step={100} />
//         </Box>
//         <Box mt={4}>
//           <Text>Interest</Text>
//           <Slider defaultValue={500} min={0} max={2000} step={50} />
//         </Box>
//         <Box mt={4}>
//           <Text>Fees and Charges</Text>
//           <Slider defaultValue={300} min={0} max={1000} step={10} />
//         </Box>
  
//         {/* Pie Chart */}
//         <Box mt={8}>
//           <PieChart width={400} height={400}>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               fill="#8884d8"
//               label
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Legend />
//             <Tooltip />
//           </PieChart>
//         </Box>
//       </Box>
//     );
//   };
  
// export default LoanTenure;
  
import React, { useState } from 'react';
import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
} from '@chakra-ui/react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const LoanTenure = () => {
  const [emi, setEmi] = useState(25000);
  const [interestRate, setInterestRate] = useState(10.75);
  const [loanTenure, setLoanTenure] = useState(5);
  const [feeCharges, setFeeCharges] = useState(10000);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanAPR, setLoanAPR] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayment, setTotalPayment] = useState('');

  const handleCalculate = () => {

    const R = parseFloat((interestRate)/1200);
    const N = parseFloat(loanTenure*12);
    const r = parseFloat((interestRate)/100)
    const principal = (parseFloat(emi) * (+(((R+1)**N)-1).toFixed(5)))/(+((R*((R+1)**N))).toFixed(5));

    const apr = ((1 + (r/N))**(N*1)) - 1;
    console.log(apr,"apr")

    const totalInterestPayable = parseFloat(principal) * (parseFloat(r));

    const totalPaymentAmount = parseFloat(principal) + parseFloat(totalInterestPayable) + parseFloat(feeCharges);

    setLoanAmount(principal.toFixed(2));

    setLoanAPR((apr*100).toFixed(2));//
    // APR = (1 + r/n)^(n*t) - 1

    setTotalInterest(totalInterestPayable.toFixed(2));

    setTotalPayment(totalPaymentAmount.toFixed(2));
  };



  return (
    <Center>
    <Box p={4} maxW="60%" >
      <h2>Loan Amount Calculator</h2>
      <Box mb={4}>
        <label>
          EMI:
          <NumberInput value={emi} onChange={value => setEmi(value)} min={0} step={100}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </label>
      </Box>
      <Box mb={4}>
        <label>
          Interest Rate (%):
          <NumberInput value={interestRate} onChange={value => setInterestRate(value)} min={0} step={0.01}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </label>
      </Box>
      <Box mb={4}>
        <label>
          Loan Tenure (years):
          <NumberInput value={loanTenure} onChange={value => setLoanTenure(value)} min={0} step={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </label>
      </Box>
      <Box mb={4}>
        <label>
          Fee and Charges:
          <NumberInput value={feeCharges} onChange={value => setFeeCharges(value)} min={0} step={100}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </label>
      </Box>
      <Button colorScheme="blue" onClick={handleCalculate}>Calculate</Button>
      <Box mt={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Loan Amount</Th>
              <Th>Loan APR</Th>
              <Th>Total Interest Payable (per year)</Th>
              <Th>Total Payment (including one time processing fee)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{loanAmount}</Td>
              <Td>{loanAPR}</Td>
              <Td>{totalInterest}</Td>
              <Td>{totalPayment}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
    </Center>
  )
};

export default LoanTenure;

