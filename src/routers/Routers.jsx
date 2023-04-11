import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Login from '../pages/Login';
import AddUser from '../pages/AddUser';
import Dashboard from '../Admin/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
import SendMoney from '../components/Account/SendMoney';
import ExchangeMoney from '../components/Account/ExchangeMoney';
import WireTransfer from '../components/Account/WireTransfer';
import Deposit from '../components/Account/Deposit';
import Withdraw from '../components/Account/Withdraw';
import Loans from '../components/Account/Loans';
import FixedDeposits from '../components/Account/FixedDeposits';
import SupportTickets from '../components/Account/SupportTickets';
import TransactionReport from '../components/Account/TransactionReport';
import AddUserTransactions from '../components/Account/AddUserTransactions';
import TransactionRecords from '../Admin/TransactionRecords';
import Transact from '../Admin/Transact';
import Users from '../Admin/Users';
import Content from '../components/Content';
import HowWork from '../components/HowWork';
import TermsCondtions from '../components/TermsConditions';
import HelpCenter from '../components/HelpCenter';
import NewsLetters from '../components/NewsLetters';
import OurPartner from '../components/OurPartner';
import BecomePartner from '../components/BecomePartner';
import AboutUs from '../components/AboutUs';

const Routers = () => {
  return (
   
      <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='home' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<AddUser/>} />
          <Route path='content' element={<Content/>} />
          <Route path='how-it-work' element={<HowWork/>} />
          <Route path='terms-and-services' element={<TermsCondtions/>} />
          <Route path='help-center' element={<HelpCenter/>} />
          <Route path='newsletters' element={<NewsLetters/>} />
          <Route path='our-partner' element={<OurPartner/>} />
          <Route path='become-partner' element={<BecomePartner/>} />
          <Route path='about-us' element={<AboutUs/>} />
          
          <Route path="/*" element={<ProtectedRoute/>}>
             <Route path='account' element={<Account/>} />
             <Route path='account/send-money' element={<SendMoney/>} />
             <Route path='account/exchange-rates' element={<ExchangeMoney/>} />
             <Route path='account/wire-transfer' element={<WireTransfer/>} />
             <Route path='account/deposit' element={<Deposit/>} />
             <Route path='account/withdraw' element={<Withdraw/>} />
             <Route path='account/loans' element={<Loans/>} />
             <Route path='account/fixed-deposits' element={<FixedDeposits/>} />
             <Route path='account/profile' element={<SupportTickets/>} />
             <Route path='account/transaction-report' element={<TransactionReport/>} />
             <Route path='add-transaction' element={<AddUserTransactions/>} />
          </Route>
          <Route path="/*" element={<AdminRoute/>}>
             <Route path="dashboard" element={<Dashboard />}/>
             <Route path="dashboard/transaction-records" element={<TransactionRecords />} />
             <Route path="dashboard/transact" element={<Transact/>} />
             <Route path="dashboard/users" element={<Users/>} />
        </Route>
      </Routes>
   
  )
}

export default Routers;
