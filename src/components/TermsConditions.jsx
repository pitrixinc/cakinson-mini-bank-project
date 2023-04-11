import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const TermsConditions = () => {
return (
    <div>
      <div class="mb-6 md:mb-0 w-100 p-6">
              <NavLink to='/home' class="flex items-center">
                  <img src="../../logo.png" class="h-8 w-100 mr-3" alt="Cakinson Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </NavLink>
          </div>
<div className="flex flex-col items-center justify-center bg-gray-50 text-black py-8 px-4 md:px-8 lg:px-52 md:px-40">
<h1 className="text-3xl font-bold mb-4 text-center text-blue-400">
Terms and Conditions
</h1>
<p className="text-xl mb-8 text-gray-400">
</p>
<p className="text-lg mb-8">
Welcome to Cakinson Bank! We are delighted to have you as our valued customer. 
Before you start using our services,
 we recommend you to go through our terms and conditions carefully.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Introduction:</span><br/>
By using our website or any of our services, 
you agree to comply with and be bound by the following terms and conditions of use, 
which together with our privacy policy govern Cakinson Bank’s relationship with you.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Eligibility:</span><br />
To be eligible to use our services, you must be at least 18 years old,
 a resident of the United States, 
and possess a valid bank account.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Account Creation:</span><br />
To create an account with Cakinson Bank, you must provide accurate and complete information. 
You agree to keep your login credentials and account information secure and confidential.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Fees and Charges:</span> <br/>
We do not charge any fees for opening or maintaining a savings account with Cakinson Bank. 
However, fees may be charged for some transactions such as wire transfers, overdrafts,
 and stop payments. 
For a complete list of fees and charges, please refer to our fee schedule.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Deposits and Withdrawals:</span> <br />
Cakinson Bank offers several options for depositing and withdrawing funds,
 including electronic transfers, wire transfers, and direct deposits. 
 All deposits are subject to verification and approval. Withdrawals may 
be subject to a hold or delay depending on the type and amount of the transaction.
</p>
<p className="text-lg mb-8">
We take the security of your personal and financial information seriously. 
Our website and mobile app are protected by SSL encryption and multi-factor authentication. 
You are responsible for keeping your
 login credentials and account information secure and confidential. <br />
 We reserve the right to terminate or suspend your account at any time and without 
 notice if we suspect 
 fraudulent activity or a violation of our terms and conditions. <br/>
 Cakinson Bank makes no representations or warranties of any kind, whether express or implied, 
 regarding the accuracy, reliability,
  or suitability of the information and services provided on our website or mobile app.
</p>

</div>
<Footer/>
</div>
);
};

export default TermsConditions;