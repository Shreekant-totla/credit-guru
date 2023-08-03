import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'

import { LoansPage } from '../LoansPage/LoansPage'


import { Footer } from './Footer'
import { MoneyPage } from '../Money/MoneyPage'
import { LoanFormPage } from '../LoansPage/LoanFormPage'




export const MainRoutes = () => {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>} />

      <Route path="/loans" element={<LoansPage/>} />

     <Route path="/loan-form" element={<LoanFormPage/>} />

      <Route path='/money' element={<MoneyPage/>}/>

     </Routes>
     <Footer/>
    </div>
  )
}
