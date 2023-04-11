import React, { useState, useEffect } from 'react'

const CardSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

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

<div id="default-carousel" className="relative w-full mb-5 block" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className={`duration-700 ease-in-out ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          <img src="https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/classic.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/infinite.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/gold.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://cdn-p.vanquis.co.uk/media/2395310/chrome-visual.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className={`duration-700 ease-in-out ${activeSlide === 4 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="https://www.regions.com/-/media/Images/DotCom/Products/credit-cards/CashRewards-Spotlight.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
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
  )
}

export default CardSlider;