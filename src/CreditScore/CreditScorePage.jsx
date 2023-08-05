import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { CreditScoreForm } from "./Components/CreditScoreForm"
import { CreditScoreModal } from "./Components/CreditScoreModal"
import { useState } from "react"

export const CreditScorePage = () => {

    
    return <Box>
        <Flex backgroundImage={"url('https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/LP4_desktop_hero.png?auto=compress')"} h={"74vh"} backgroundColor={"#BEE3F8"} alignItems={"center"}
        >
            <Box width={"30%"} h={"50vh"} ml={"170px"}>
                <Text as={"b"} fontSize={"43px"} lineHeight={"1.2"} >Getting your free credit scores.</Text>
                <Text mt={"16px"} color={"#3e4143"} fontSize={"26px"}>It's always 100% free Period.</Text>
                <CreditScoreForm />
            </Box>
        </Flex>
        <Center>
            <Box width={"60%"} mt={"60px"}>
                <Center>
                    <Text as="b" fontSize={"32px"} lineHeight={"1"}>
                        We’ll help with your first step, next step and every other
                    </Text>
                </Center>
                <Center>
                    <Text as="b" fontSize={"32px"}>
                        step along your financial journey.
                    </Text>
                </Center>
            </Box>
        </Center>
        <Center my={"60px"}>
            <Flex w={"90%"} justifyContent={"space-evenly"}>
                <Box w={"21%"}>
                    <Center>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Hand-Snap-2.png?w=80&auto=compress" alt="" />
                    </Center>
                    <Center mt={"15px"}>
                        <Text as="b">It won’t hurt to look</Text>
                    </Center>
                    <Text textAlign={"center"} color={"#000"}>Check your credit without ever having to worry about it hurting your scores.</Text>
                </Box>
                <Box w={"21%"}>
                    <Center>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Alert-1.png?w=80&auto=compress" alt="" />
                    </Center>
                    <Center mt={"15px"}>
                        <Text as={"b"}>Stay up to date</Text>
                    </Center>
                    <Text textAlign={"center"} color={"#000"}>Get notified when there are important changes to your credit reports.</Text>
                </Box>
                <Box w={"21%"}>
                    <Center>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Mobile-Yes.png?w=80&auto=compress" alt="" />
                    </Center>
                    <Center mt={"15px"}>
                        <Text as={"b"}>Your credit, to go</Text>
                    </Center>
                    <Text textAlign={"center"} color={"#000"}>Download the Credit Guru® app to help manage your finances from just about anywhere.</Text>
                </Box>
            </Flex>
        </Center>
        <Center my={"20px"}>
            <Box width={"82%"} borderBottom={"2px solid gray"} m={"10px"} pb={"40px"}>
                <Text as={"b"} fontSize={"30px"} >
                    How does Credit Guru get your credit scores?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Credit Guru works with Equifax and TransUnion, two of the three major consumer credit bureaus, to give you access to your free credit scores and free credit reports. (Experian is the third major consumer credit bureau.)
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Credit Guru can offer free credit scores and reports because we make money in other ways. For example, we use the information in your credit profile to make product recommendations that can help you save money. If you use these recommendations to apply for a product, Credit Guru may get paid by the bank or lender.
                </Text>
            </Box>
        </Center>
        <Center my={"20px"}>
            <Box width={"82%"} borderBottom={"2px solid gray"} m={"10px"} pb={"40px"}>
                <Text as={"b"} fontSize={"30px"} >
                    What kind of free credit scores does Credit Guru offer?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    On Credit Guru, you’ll see credit scores and reports from Equifax and TransUnion, both using the VantageScore 3.0 scoring model. VantageScore was created in collaboration with all three major credit bureaus, and its 3.0 version is widely used in lending decisions today.
                </Text>
                <Text mt={"25px"} fontSize={"19.5px"} fontWeight={"bold"}>
                    Does Credit Guru offer free FICO® credit scores?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Credit Guru doesn’t offer FICO® credit scores, which are calculated differently from VantageScore credit scores. While the three major credit bureaus collaborated to create the VantageScore model, FICO is a separate organization with its own scoring models.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    The VantageScore and FICO models differ in several ways, but that doesn’t mean one is better or more accurate than the other. Lenders may rely on different scoring models when evaluating an application, and other considerations can factor in, too.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    We recommend looking at your credit scores as a guide to your credit health rather than as a definitive number that determines whether you’ll be approved or denied for credit.
                </Text>
            </Box>
        </Center>
        <Center my={"20px"}>
            <Box width={"82%"} borderBottom={"2px solid gray"} m={"10px"} pb={"40px"}>
                <Text as={"b"} fontSize={"30px"} >
                    How often should you check your free credit scores?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Checking your free credit scores on Credit Guru isn’t a one-time set-it-and-forget-it task. Your scores may be updated frequently as your credit history changes, so checking them regularly can help you keep track of important changes in your credit profile.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Since you can check your free credit scores without hurting your credit, feel free to check as often as you like. If you see your credit scores steadily growing, it can help motivate you on your credit-building journey. And when you’re ready to submit a credit application, getting a better idea of your overall credit health beforehand can give you a better sense of where you stand.
                </Text>
            </Box>
        </Center>
        <Center my={"20px"}>
            <Box width={"82%"} borderBottom={"2px solid gray"} m={"10px"} pb={"40px"}>
                <Text as={"b"} fontSize={"30px"} >
                    Why your free credit scores from Equifax and TransUnion may be different?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    You may think that your VantageScore 3.0 credit scores from Equifax and TransUnion should be the same, but that’s not always the case.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Remember, VantageScore 3.0 is ultimately just a scoring model. The three-digit number it produces depends largely on the information that lenders report to each credit bureau.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    When credit scores that use the same model differ between credit reporting bureaus, it’s typically because they don’t have the same information.
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    It’s totally normal for your different credit scores to not be the exact same number at any given time. Lenders typically understand why your credit scores can differ — and they may also account for factors other than your credit scores when considering your application for credit.
                </Text>
            </Box>
        </Center>
        <Center my={"20px"}>
            <Box width={"82%"} borderBottom={"2px solid gray"} m={"10px"} pb={"40px"}>
                <Text as={"b"} fontSize={"30px"} >
                    How to read and understand your free credit scores?
                </Text>
                <Text mt={"15px"} fontSize={"18px"} color={"#000"}>
                    Your credit scores can be a useful reflection of your overall credit health. But to get the most out of your scores, you must first understand how they work, what they represent and what actually constitutes a good credit score.
                </Text>
                <Flex mt={"30px"} justifyContent={"space-between"}>
                    <Box w={"47%"}>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Score-Excellent-1.png?fm=webp&w=90" alt="" />
                        <Text fontWeight={"bold"} fontSize={"lg"}>
                            Excellent (781–850):
                        </Text>
                        <Text mt={"10px"} fontSize={"18px"} color={"#000"}>
                            You may qualify for the best financial products available, and you’ll likely have several options when it comes to choosing repayment periods or other terms. But excellent credit scores aren’t the only factor in a lending decision — a lender could still deny your application for another reason.
                        </Text>
                    </Box>
                    <Box w={"47%"}>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Score-Good-1.png?fm=webp&w=90" alt="" />
                        <Text fontWeight={"bold"} fontSize={"lg"}>
                            Good (661-780):
                        </Text>
                        <Text mt={"10px"} fontSize={"18px"} color={"#000"}>
                        You’re less likely to have an application denied based solely on your credit scores, compared to having scores in the fair or poor range, and you’re more likely to be offered a low interest rate and favorable terms.
                        </Text>
                    </Box>
                </Flex>
                <Flex mt={"30px"} justifyContent={"space-between"}>
                    <Box w={"47%"}>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Score-Fair-2.png?fm=webp&w=90" alt="" />
                        <Text fontWeight={"bold"} fontSize={"lg"}>
                        Fair (601–660):
                        </Text>
                        <Text mt={"10px"} fontSize={"18px"} color={"#000"}>
                        You may have several options when it comes to getting approved for a financial product, but you might not qualify for the best terms.
                        </Text>
                    </Box>
                    <Box w={"47%"}>
                        <img src="https://creditkarma-cms.imgix.net/wp-content/uploads/2020/08/Score-Needs-Work-2.png?fm=webp&w=90" alt="" />
                        <Text fontWeight={"bold"} fontSize={"lg"}>
                        Poor (300–600):
                        </Text>
                        <Text mt={"10px"} fontSize={"18px"} color={"#000"}>
                        You may find it difficult to get approved for many loans or unsecured credit cards. And if you’re approved, you might not qualify for the best terms or lowest interest rate.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Center>
    </Box >
}