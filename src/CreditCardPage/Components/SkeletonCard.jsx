import { Box,Skeleton } from "@chakra-ui/react";


export const SkeletonCard = () => {
    return (
      <Box
        display="flex"
        width="80%"
        margin="auto"
        borderRadius="8px"
        padding="30px"
        boxShadow="lg"
        border="1px solid #E2E8F0"
        mt="15px"
      >
        <Skeleton height="150px" width="25%" mr="30px" />
        <Box width="75%">
          <Skeleton height="30px" width="60%" mb="20px" />
          <Skeleton height="20px" width="40%" mb="10px" />
          <Skeleton height="20px" width="60%" mb="10px" />
          <Skeleton height="20px" width="80%" mb="10px" />
          <Skeleton height="20px" width="50%" mb="10px" />
          <Skeleton height="20px" width="70%" mb="10px" />
          <Skeleton height="20px" width="60%" mb="10px" />
        </Box>
      </Box>
    );
  };

