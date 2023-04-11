import React from 'react'

const CreditCard = () => {
  return (
    <div>

<a href="#" class="flex flex-col items-center bg-white  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-20  dark:bg-white-800 dark:hover:bg-gray-20">
    <img class="object-contain  w-full rounded-t-lg h-96 md:h-auto sm:h-50 md:w-48 md:rounded-none md:rounded-l-lg" src="https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/classic.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Expired Debit Cards</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">All your expired debit cards would be displayed here.</p>
    </div>
</a>

    </div>
  )
}

export default CreditCard