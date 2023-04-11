import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const Content = () => {
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
Welcome to our bank
</h1>
<p className="text-xl mb-8 text-gray-400">
Where your financial goals are our top priority
</p>
<p className="text-lg mb-8">
We understand that managing your finances can be overwhelming, which is
why we offer a wide range of financial products and services to help you
reach your financial goals.
</p>
<p className="text-lg mb-8">
Our bank offers a variety of checking and savings accounts, credit cards,
loans, and investment options to suit your individual needs. We strive to
make banking as convenient as possible for our customers, which is why we
offer online banking, mobile banking, and ATM access 24/7.
</p>
<p className="text-lg mb-8">
At our bank, we believe in building long-lasting relationships with our
customers. Our knowledgeable and friendly staff are always ready to
assist you with any financial questions or concerns you may have. We
take pride in providing personalized service and customized solutions
to meet your unique needs.
</p>
<p className="text-lg mb-8">
We also understand the importance of giving back to the communities we
serve. Our bank supports a variety of charitable organizations and
community initiatives, and we encourage our employees to volunteer their
time and expertise to help those in need.
</p>
<p className="text-lg mb-8">
At our bank, we are committed to providing our customers with the best
possible banking experience. Whether you are a new customer or a
long-time member of our bank, we are here to help you achieve your
financial goals. Thank you for choosing our bank as your trusted
financial partner.
</p>

</div>
<Footer/>
</div>
);
};

export default Content;