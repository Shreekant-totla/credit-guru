import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

export const SearchBar = () => {
    return <Flex display={{ base: "none", md: "flex" }} justifyContent={"center"}>
        <InputGroup display={{ base: "none", md: "flex" }} w={"60%"} my={"20px"} boxShadow={"lg"}>
            <Input placeholder="Search credit cards" border={"1px solid grey"} />
            <InputRightElement color="gray.500" cursor="pointer" _hover={{ color: "blue" }}><FiSearch /></InputRightElement>
        </InputGroup>
    </Flex>
}