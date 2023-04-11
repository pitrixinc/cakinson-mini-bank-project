import React from "react";
import Footer from "./Account/Footer"
import { NavLink } from "react-router-dom";

const AboutUs = () => {
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
About Us
</h1>
<p className="text-xl mb-8 text-gray-400">

</p>
<p className="text-lg mb-8">
Cakinson set out to become a world-class financial institution that provides superior returns
 for all stakeholders. People who are professional and proactive, 
 state of the art technology, exceptional Corporate Governance standards,
 good knowledge of the Local Market, and above all, a Customer-Centric Culture.
</p>
<p className="text-lg mb-8">
Cakinson Bank commenced business in July 1998 as a Discount House.
 Cakinson Discount House attracted a rich client base and was noted for its innovative 
 and attractive investment product offerings, making her the discount house of choice.
  With the quality of services offered, our customers requested a deeper and richer business 
  relationship, making it logical to move into the banking sector. 
On the 28th of June 2006, we obtained a universal banking license.
</p>
<p className="text-lg mb-8">
We have since become a household name internationally by delivering on our promise to make
 a difference in the lives of our stakeholders
 employees, customers, regulators, and the community as a whole.
</p>
<p className="text-lg mb-8">
We carefully handpicked and groomed a team of high-caliber professionals with diverse skills and
 experience; invested heavily in technology and training to ensure that we are at par with the best 
 in the world. We continually offer a comprehensive range of innovative products and services to
  meet the banking and financial needs of our existing and potential customers. Cakinson Bank
   is contributing its quota to the development
 of the banking industry and by extension the international economy.
</p>
<p className="text-lg mb-8">
Within six months of opening our doors for business, we had already broken even, 
a remarkable feat that set the stage for our expansion which can be found not only in our steadily 
growing network of branches, mobile banking platform, and in our solid base of satisfied customers,
 but in the various awards, we have garnered in the industry for customer service, digital product 
 offerings, trade deals, human resource, corporate social responsibility,
 and overall best bank. We have won more than 60 awards for excellence since our inception.
</p>
<p className="text-lg mb-8">
In delivering on her promise to affect the community, on the 1st of October 2014, 
the Bank acquired ProCredit Savings and Loans Company Limited PCSL
 from ProCredit Holding Germany PCH and the DOEN Foundation of the Netherlands. 
 PCSL was a non-bank financial institution that provided savings and lending services to its 
 individual, small, 
and medium enterprise clients.
</p>
<p className="text-lg mb-8">
The continued growth of the Bank culminated in the establishment of
 Cakinson Asia Bank Limited CABL in Labuan, Malaysia in July 2012 as a wholly-owned Asian
  subsidiary in Malaysia. 
FABL carries on the business of offshore banking.
</p>
<p className="text-lg mb-8">
Investment banking has always been a key pillar in the overall strategy of the bank,
thus, Cakinson Securities Limited CSL, 
a fully owned subsidiary of the bank, was incorporated as the investment banking arm of the bank.
 Formerly known as Cakinson Asset Management, CSL’s business involves providing advisory services, 
 issuing of securities, 
raising of capital, and undertaking portfolio investment management for clients.
</p>
<p className="text-lg mb-8">
Currently, a tier 1 bank,
 Cakinson Bank is committed to becoming a top bank with international standards.
</p>
</div>
<Footer/>
</div>
);
};

export default AboutUs;