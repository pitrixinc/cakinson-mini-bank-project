import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const NewsLetters = () => {
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
NewsLetters
</h1>
<p className="text-xl mb-8 text-gray-400">
Where your financial goals are our top priority
</p>
<p className="text-lg mb-8">
We are thrilled to have you as a subscriber to our monthly newsletter.
 At Cakinson, we are committed to providing our customers 
 with the best banking services and keeping them updated
 on the latest developments in the industry. Our newsletter is an extension of this commitment, 
where we bring you the latest news and updates on our services and the financial world.
</p>
<p className="text-lg mb-8">
Every month, we will be sharing useful insights and expert opinions on various banking topics, 
including investments, savings, loans, and credit cards. We will
 also keep you informed about any upcoming events or promotions that may be of interest to you.
</p>
<p className="text-lg mb-8">
In addition to financial news, our newsletter will also feature articles on lifestyle and health, 
so you can enjoy a well-rounded experience. 
We believe that banking is not just about managing money, but also about leading a fulfilling life. 
Therefore, 
we are dedicated to bringing you relevant content that will enhance your overall well-being.
</p>
<p className="text-lg mb-8">
As a subscriber, you will also receive exclusive offers and promotions 
that are only available to our newsletter subscribers. We value your loyalty, 
and we want to show our appreciation by providing you 
with exciting opportunities to save money and get the most out of your banking experience.
</p>
<p className="text-lg mb-8">
To ensure that you receive our newsletter every month, 
please add our email address to your contact list. 
You can also check our website for past issues of the newsletter and subscribe to 
our blog for more updates and insights. <br/>
Thank you for choosing Cakinson as your trusted banking partner. We look forward to 
keeping you informed and providing you with the best banking services possible.
</p>

</div>
<Footer/>
</div>
);
};

export default NewsLetters;