import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const OurPartner = () => {
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
Our Partners
</h1>
<p className="text-xl mb-8 text-gray-400">

</p>
<p className="text-lg mb-8">
At Cakinson, we believe in creating valuable relationships with our partners 
to provide our customers with the best possible services. We have built a network of 
reliable and trustworthy
 partners who share our values and commitment to excellence.
</p>
<p className="text-lg mb-8">
We work closely with our partners to create innovative products and services
 that cater to the diverse needs of our customers. Our partners include leading 
 financial institutions, technology companies,
 and service providers who bring unique expertise and capabilities to our business.
</p>
<p className="text-lg mb-8">
We take pride in our partnerships and are always looking for new opportunities
 to collaborate with businesses that share our vision. 
 Our partner selection process is rigorous and involves a thorough 
 evaluation of potential partners to ensure
 that they meet our standards for quality, reliability, and customer service.
</p>
<p className="text-lg mb-8">
Partnering with Cakinson offers several benefits, 
including access to our customer base, market insights, and resources. 
We are committed to supporting our partners throughout the entire
 partnership journey and providing them with the necessary tools and resources to succeed.
</p>
<p className="text-lg mb-8">
If you are interested in partnering with Cakinson, 
please contact us to learn more about our partnership opportunities.
 We look forward to building a mutually beneficial relationship with you.
</p>

</div>
<Footer/>
</div>
);
};

export default OurPartner;