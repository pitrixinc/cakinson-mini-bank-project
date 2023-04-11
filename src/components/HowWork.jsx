import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const HowWork = () => {
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
How It Works
</h1>
<p className="text-xl mb-8 text-center text-gray-400">
Your trusted bank for all your financial needs.
</p>
<p className="text-lg mb-8">
 We understand that banking can be a complex and daunting process, 
 which is why we've made it our mission to simplify banking for our customers. In this article,
 we'll take you through how it works at Cakinson.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Step 1: Open an Account:</span><br/>
The first step to accessing our range of products and services is to open an account. 
You can do this either by visiting one of our branches or by registering online.
 Our account opening process is quick and easy,
 and our friendly staff are always on hand to assist you.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Step 2: Choose the Right Product for You:</span><br />
Once you've opened an account, 
it's time to choose the product that best meets your financial needs.
 We offer a range of products, from savings accounts to loans and mortgages. 
 Our online banking platform provides a simple and
  convenient way to access information about our products,
 so you can make an informed decision about which one is right for you.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Step 3: Manage Your Account:</span><br />
At Cakinson, we believe that banking should be simple and stress-free.
 That's why we've made it easy for you to manage your account online. 
 Our online banking platform allows you to view your account balances, 
transfer funds, and pay bills, all from the comfort of your own home.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Step 4: Access Our Additional Services:</span> <br/>
In addition to our range of banking products, 
we also offer a variety of additional services to our customers. 
These include insurance, investments, and financial planning. 
Our team of financial advisors are on hand to help you make the most of your money 
and achieve your financial goals.
</p>
<p className="text-lg mb-8">
<span className="font-semibold text-gray-400">Step 5: Experience Exceptional Customer Service:</span> <br />
At Cakinson, we pride ourselves on providing exceptional customer service.
 Our staff are trained to go above and beyond to ensure that 
 our customers receive the support and assistance they need.
  Whether you have a question about your account or need help with a transaction, 
our friendly staff are always happy to help.
</p>
<p className="text-lg mb-8">
In conclusion, banking with Cakinson is simple, convenient, and stress-free. 
We are committed to providing our customers with
 the best possible banking experience, and we look forward to serving you.
  If you have any questions about how it works at Cakinson,
 please do not hesitate to contact us.
</p>

</div>
<Footer/>
</div>
);
};

export default HowWork;