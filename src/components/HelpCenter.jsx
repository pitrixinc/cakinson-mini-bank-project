import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const HelpCenter = () => {
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
Help Center
</h1>
<p className="text-xl mb-8 text-gray-400">
Your trusted bank for all your financial needs.
</p>
<p className="text-lg mb-8">
Welcome to the Cakinson Help Center! We're here to assist you with any 
questions or concerns you may have regarding your Cakinson account or any of our services. 
Our goal is to provide you with the support you need, whenever you need it. <br/>
Below are some frequently asked questions that may help you find answers to some of your inquiries:
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">How do I open an account with Cakinson?</span><br/>
You can open an account with us by visiting our website and filling out the online application form.
 Alternatively, you can visit any of our branches 
and our staff will be happy to assist you in opening an account.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">What types of accounts does Cakinson offer?</span><br />
We offer a range of accounts to suit your needs, including savings accounts, 
current accounts, fixed deposit accounts, and more. 
You can find more information about our account types and their features on our website.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">How do I transfer funds to another account?</span><br />
You can transfer funds to another account by using our online banking platform or 
by visiting any of our branches. Simply provide the necessary information, 
such as the recipient's account number and the amount to be transferred, 
and we'll take care of the rest.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">How can I report a lost or stolen debit/credit card?</span> <br/>
If your debit/credit card is lost or stolen, 
please contact our customer service team immediately by calling our hotline or 
visiting any of our branches. 
We'll assist you in blocking your card and issuing a new one if necessary.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">How do I update my personal information?</span> <br />
You can update your personal information, such as your contact details or mailing address, 
by logging into your account on our website or by visiting any of our branches. 
Simply provide the updated information and we'll make the necessary changes.
</p>
<p className="text-lg mb-8">
If you have any further questions or concerns, 
please don't hesitate to reach out to us.
 Our customer service team is available 24/7 to assist you. You can contact us by phone, email, 
or by visiting any of our branches. Thank you for choosing Cakinson!
</p>

</div>
<Footer/>
</div>
);
};

export default HelpCenter;