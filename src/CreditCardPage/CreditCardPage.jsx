import { Box, Center } from "@chakra-ui/react"
import { ProductList } from "./Components/ProductList"
import { SearchBar } from "./Components/SearchBar"
import { SideBar } from "./Components/SideBar"

export const CreditCardPage = () => {
    return <Box>
        <Box>
            <SearchBar />
        </Box>
        <Box display="flex" >
            <Box width="17%" boxShadow={"lg"} borderTop={"1px solid #E2E8F0"}>
                <Center>
                    <SideBar />
                </Center>
            </Box>
            <Box width="83%" boxShadow={"lg"} borderTop={"1px solid #E2E8F0"}>
                <ProductList />
            </Box>
        </Box>
    </Box>
}