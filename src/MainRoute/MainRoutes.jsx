import React from 'react'
import { Routes, Route, useParams} from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'
import { CreditCardPage } from '../CreditCardPage/CreditCardPage'

import { LoansPage } from '../LoansPage/LoansPage'


import { Footer } from './Footer'
import { MoneyPage } from '../Money/MoneyPage'
import { LoginSignupPage } from '../LoginPage/LoginSignupPage'
import { LoanFormPage } from '../LoansPage/LoanFormPage'
import { PrivateRoute } from './PrivateRoute'
import LoanTenure from '../Calculators/LoanTenure'

import { CreditCardApplicationForm } from '../CreditCardPage/CreditCardApplicationForm'

import { UserCreditCard } from '../UserCreditCards/UserCreditCard'
import { UserLoans } from '../UserLoans/UserLoans'

import { CreditScorePage } from '../CreditScore/CreditScorePage'

import { AdminLogin } from '../AdminPage/AdminLogin'
import { AdminHome } from '../AdminPage/AdminHome'
// import CreditCardGenerator from '../CreditCardPage/CreditCardNumberGenerator'


export const MainRoutes = () => {
  
  return (
    <div>

    <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>} />

      <Route path="/loans" element={<LoansPage/>} />

       <Route path="/loan-form" element={<PrivateRoute><LoanFormPage/></PrivateRoute>} />

      <Route path='/money' element={<MoneyPage/>}/>

      <Route path="/login" element={<LoginSignupPage/>}/>

      <Route path="/credit-cards" element={<CreditCardPage/>} />

      <Route path="/credit-score" element={<CreditScorePage/>} />

      <Route path="/loan-calculator" element={<LoanTenure/>} />

      <Route path="/user-loans" element={<UserLoans/>}/>

      <Route path="/user-credit-cards" element={<UserCreditCard/>}/>

      <Route path="admin" element={<AdminLogin/>}/>

      <Route path="admin-Home" element={<AdminHome/>}/>

      {/* <Route path="/credit-card-generator" element={<CreditCardGenerator/>} /> */}
    </Routes>
     <Footer/>

    </div>
  )
}

