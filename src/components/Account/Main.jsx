import React, { useEffect, useState } from 'react';
import DownloadApp from './DownloadApp';

import SliderUserName from './SliderUserName';
import Footer from '../Account/Footer';
import AccountNumber from './AccountNumber';
import AccountBalance from './AccountBalance';
import CardsLinked from './CardsLinked';
import Transactions from './Transactions';
import CreditCard from './CreditCard';
import MiniCreditCard from './MiniCreditCard';
import CardSlider from './CardSlider';
import DollarFrame from './DollarFrame';
import UserIp from './UserIp';
import useAuth from '../../custom-hooks/useAuth';
import { NavLink } from 'react-router-dom';


const Main = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const {currentUser} = useAuth();
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide(activeSlide => (activeSlide + 1) % 5);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div>
      <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">

    <div className="grid grid-cols-2 gap-4 mb-4 block md:hidden lg:hidden">
          <div className=" justify-center rounded">
             <AccountNumber/>
          </div>
          <div className=" justify-center rounded">
             <CardsLinked/>
          </div>
          </div>

          <div className="flex mb-4 rounded block md:hidden lg:hidden">
       <AccountBalance/>
       </div>

    <div className="flex block md:hidden lg:hidden justify-center h-48 mt-20 mb-5 rounded ">
          <SliderUserName/>
       </div>

       <div className="flex  justify-center mb-4 rounded block md:hidden lg:hidden">
       <UserIp/>
       </div>

       <div className="grid grid-cols-3 gap-2 mb-4 hidden md:grid">
          <div className=" items-center justify-center h-24 rounded ">
             <AccountNumber/>
          </div>
          <div className=" items-center justify-center h-24 rounded ">
             <AccountBalance/>
          </div>
          <div className=" items-center justify-center h-24 rounded ">
             <CardsLinked/>
          </div>
       </div>

       <div class="grid grid-cols-4 gap-4 hidden md:grid lg:grid">
          <div className='h-24 mt-3 items-center justify-center shadow-lg border-b-4 border-red-500 p-6'>
          <NavLink to='/account/loans'>  <h5 className='font-semibold'>Active Loans</h5>
            <p></p>
            </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-indigo-500 p-6'>
          <NavLink to='/account/wire-transfer'>  <h5 className='font-semibold'>Wire Transfer</h5>
            <p></p>
            </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-blue-500 p-6'>
          <NavLink to='/account/deposit'>  <h5 className='font-semibold'>Deposits</h5>
            <p></p>
          </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-yellow-500 p-6'>
            <NavLink to='/account/withdraw'> <h5 className='font-semibold'>Withdraw</h5>
            <p></p>
            </NavLink>
          </div>
        </div>


        <div class="grid grid-cols-2 gap-4 mt-5  md:hidden lg:hidden">
          <div className='h-24 items-center justify-center shadow border-b-4 border-red-500 p-6'>
          <NavLink to='/account/loans'>  <h5 className='font-semibold'>Active Loans</h5>
            <p></p>
            </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-indigo-500 p-6'>
          <NavLink to='/account/wire-transfer'>  <h5 className='font-semibold'>Wire Transfer</h5>
            <p></p>
            </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-blue-500 p-6'>
          <NavLink to='/account/deposit'>  <h5 className='font-semibold'>Deposits</h5>
            <p></p>
          </NavLink>
          </div>
          <div className='h-24 mt-3 items-center justify-center shadow border-b-4 border-yellow-500 p-6'>
            <NavLink to='/account/withdraw'> <h5 className='font-semibold'>Withdraw</h5>
            <p></p>
            </NavLink>
          </div>
        </div>
       <div>
       
       <div id="default-carousel" className="relative w-full mb-5 block hidden md:block lg:block" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className={`duration-700 mt-10 ease-in-out ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://cdn.vectorstock.com/i/preview-1x/75/54/employee-team-office-welcome-banner-people-vector-45997554.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://media.istockphoto.com/id/173932685/fr/photo/bank.jpg?s=612x612&w=0&k=20&c=C1dmJFcogNH5OEfph6NI1a2Wl7ewWL5TrmQcoBs0rcM=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://www.worldbank.org/content/dam/photos/780x439/2019/nov-1/2019_BOF_family_photo_web.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://www.gannett-cdn.com/-mm-/3883febad97fa44051cdd3031d5e746732e06a86/c=0-217-1732-1196/local/-/media/2017/03/19/USATODAY/USATODAY/636255618836209075-GettyImages-AA000085.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://www.abetteranswer.com/hs-fs/hubfs/Customer%20Service_Greeting%20Customer-small.jpg?width=1000&name=Customer%20Service_Greeting%20Customer-small.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      </div>

    
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    {[0, 1, 2, 3, 4].map((index) => (
         <button
         key={index}
         onClick={() => handleSlideClick(index)}
        className={`h-3 w-3 rounded-full ${activeSlide === index ? 'bg-black' : 'bg-gray-400'}`}
      ></button>
    ))}
    </div>
  
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

       </div>

       <div className="block md:hidden lg:hidden">
         <CardSlider/>
       </div>
      
       <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex hidden md:block lg:block justify-center rounded h-58">
             <Transactions/>
          </div>
          <div className="flex hidden md:block lg:block justify-center rounded ">
             <SliderUserName/>
             <CreditCard/>
          </div>
          <div className="flex items-center justify-center rounded shadow hidden md:flex lg:flex">
             <UserIp/>
          </div>
          <div className="flex items-center justify-center rounded h-28 hidden md:flex lg:flex">
          <img class="object-cover w-full w-[100%] rounded-t-lg h-96 md:h-auto sm:h-50 md:w-48 md:rounded-none md:rounded-l-lg" src="https://t3.ftcdn.net/jpg/04/34/55/36/360_F_434553675_2KSgr0rwmWFe4XQaf4AG4Gbvgn31M4OE.jpg" alt=""/>
          </div>
       </div>
       <div className="flex block md:hidden lg:hidden  justify-center h-58 mb-4 rounded ">
          <Transactions/>
       </div>
       <div className="flex block md:hidden lg:hidden justify-center mb-4 rounded ">
          <MiniCreditCard/>
       </div>
       <div className="flex  justify-center h-58 mb-4 rounded bg-gray-50 dark:bg-gray-800">
       <DollarFrame/>
       </div>
       
       <div className="md:hidden mb-2 mt-2">
            <DownloadApp/>
          </div>
    </div>

    <div className="flex justify-center h-58 mb-0 rounded hidden md:block lg:block">
       <Footer/>
       </div>
 </div>

 <div className="md:ml-40 md:w-[86%] block md:hidden lg:hidden">
            <Footer/>
          </div>
 </div>
  )
}

export default Main