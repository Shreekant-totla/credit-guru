import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

export const Faq = () => {

  return (
    <div>
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={"bold"} fontSize={"20px"} as="span" flex='1' textAlign='left'>
        Are Credit Karma Money™ Spend accounts really free?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    A Credit Karma Money™ Spend account is 100% free to open, with no minimum balance requirements. 
    And Credit Karma will never charge you fees for using your Spend account. No inactivity fees. No annual fees. No monthly maintenance fees. And no withdrawal fees.

The Credit Karma Visa® Debit Card can be used for free withdrawals from a network of over 55,000 ATMs in the Allpoint® ATM network. 
Heads up that you may be charged a third-party fee if you use an ATM outside the Allpoint® network. Though Credit Karma does not directly charge this fee, it will show up in your account transaction history.

If you use your card to transact in foreign currencies, you’ll be charged a 1% fee of the total purchase by Visa for each transaction. 
This Visa International Card Fee is charged by Visa and not by Credit Karma.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={"bold"} fontSize={"20px"} as="span" flex='1' textAlign='left'>
        How does Credit Karma Money™ Spend work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Credit Karma is not a bank. We partner with MVB Bank, Inc., Member FDIC,  to provide banking services supporting Credit Karma Money™ Spend and Credit Karma Money™ Save12 accounts.

When you open a Credit Karma Money™ Spend account, your funds will be deposited into an account at MVB Bank, Inc. 
and its deposit network. MVB Bank, Inc. is a member of the Federal Deposit Insurance Corp., and funds in your Spend account are FDIC-insured up to $5,000,000.

You can use your Spend account for electronic payments and make everyday transactions with your Credit Karma Visa® Debit Card. 
You can also deposit money from your Credit Karma Money™ Save account directly through the Money section of your Credit Karma account. Currently, the account can’t accept deposits made with cash, paper checks or foreign currency.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={"bold"} fontSize={"20px"} as="span" flex='1' textAlign='left'>
        Which ATMs can I use with my Credit Karma Visa® Debit Card?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With your Credit Karma Money™ Spend account, you have fee-free access to more than 55,000 Allpoint® ATMs with unlimited free withdrawals. 
    These ATMs are conveniently located at participating retailers like CVS, Target and Walgreens. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={"bold"} fontSize={"20px"} as="span" flex='1' textAlign='left'>
        How does Credit Karma Money™ Save work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Credit Karma uses a network of 800-plus banks to provide a 100% free interest-bearing savings account with no fees. 
    The balance in your Credit Karma Money™ Save account is eligible for FDIC insurance up to $5,000,000.

There’s never a minimum balance to open and maintain a Credit Karma Money™ Save account, and there are no hidden fees. 
And as long as you have at least $0.01 in your Save account, you can start earning interest today.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontWeight={"bold"} fontSize={"20px"} as="span" flex='1' textAlign='left'>
        Which ATMs can I use with my Credit Karma Visa® Debit Card?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With your Credit Karma Money™ Spend account, you have fee-free access to more than 55,000 Allpoint® ATMs with unlimited free withdrawals. 
    These ATMs are conveniently located at participating retailers like CVS, Target and Walgreens. 
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
    </div>
  )
}
