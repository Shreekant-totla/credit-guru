import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Center,
} from "@chakra-ui/react";
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

export const CreditScoreModal = ({ state, open, score, setOpen }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [
    { name: 'Score', value: score || 0 },
    { name: 'Remaining', value: score ? 900 - score : 900 },
  ];

  const getScoreColor = () => {
    if (score < 500) {
      return '#ff0000'; // Red color for scores less than 500
    } else if (score >= 500 && score <= 750) {
      return '#ffc107'; // Yellow color for scores between 500 and 750
    } else {
      return '#00c853'; // Green color for scores above 750
    }
  };


  return <Box>

    <Modal isCentered isOpen={open} onClose={onClose} size={"lg"}>
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) '
      >
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"xx-large"} textAlign={"center"}>Hello, {state.name}!</Text>
            <Text textAlign={"center"} mt={"15px"}>Here's your credit score.</Text>
          </ModalHeader>
          <ModalCloseButton onClick={()=>setOpen(false)} />
          <ModalBody>
            {score && (
              <Center>
                <Box width={"50%"} height={"30vh"}>
                  <Center>
                    <Text as={"b"} fontSize={"xl"} color={getScoreColor} mt={"15px"}>
                      {score < 500 ? "POOR" : score >= 500 && score <= 750 ? "GOOD" : "EXCELLENT"}
                    </Text>
                  </Center>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        startAngle={180}
                        endAngle={0}
                        paddingAngle={2}
                        dataKey="value"
                        isAnimationActive={false}
                      >
                        {data.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? getScoreColor() : '#0e0a0a42'}
                          />
                        ))}
                        <Label
                          value={score}
                          position="center"
                          fontSize={40}
                          fill="#333"
                          fontWeight="bold"
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal >
  </Box >
}