import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

const Withdraw = () => {
  const [showModal, setShowModal] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // check if all fields are filled
    if (bankAccountNumber && routingNumber &&  amount) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [bankAccountNumber, routingNumber, amount]);

  const handleCreateAccount = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        <Navbar/>
      <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">

    <div>

      <section class="bg-white dark:bg-white">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0 dark:bg-white ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            
              <h1 class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                  Withdraw Money
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                      
                      <div>
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          >
                          Bank Account Number
                          </label>
                          <input
                          type="text"
                          class="bg-blue-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-100"
                          placeholder="account number"
                          required
                          value={bankAccountNumber}
                          onChange={(e) => setBankAccountNumber(e.target.value)}
                          />
                          </div>
                          <div>
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                          >
                          Bank Routing Number
                          </label>
                          <input
                          type="text"
                          class="bg-blue-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-100"
                          placeholder="routing number"
                          required
                          value={routingNumber}
                          onChange={(e) => setRoutingNumber(e.target.value)}
                          />
                          </div>
                          
                          <div>
                          <label
                                                 for="amount"
                                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                                               >
                          Amount
                          </label>
                          <input
                          type="number"
                          min="0"
                          class="bg-blue-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-100"
                          placeholder="amount"
                          required
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          />
                          </div>
                          
                          <div class="flex justify-center">
                          <button
                          type="button"
                          class={`"mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" ${ allFieldsFilled ? "" : "opacity-50 cursor-not-allowed" }`}
                          disabled={!allFieldsFilled}
                          onClick={handleCreateAccount}
                          >
                          Send
                          </button>
                          </div>
                  
              </form>
          </div>
      </div>
  </div>
</section>




    
      

      {showModal && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-gray-500 bg-opacity-75"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                
                 <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Dear Client, for security reasons,we have restricted you from withdrawing from  youracount  </h3>
                <button data-modal-hide="popup-modal" type="button" onClick={handleCloseModal} class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    I understand
                </button>
                <button data-modal-hide="popup-modal" type="button" onClick={handleCloseModal} class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
</div>
</div>
</div>
</div>
)}
</div>
        </div>
        </div>
        </div>
  )
}

export default Withdraw;