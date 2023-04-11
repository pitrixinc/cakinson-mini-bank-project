import React, { useState } from 'react';
import { db } from '../firebase.config.js';
import { collection, doc, getDoc, updateDoc, addDoc } from 'firebase/firestore';
import AdminNavbar from './AdminNavbar.jsx';

const Transact = () => {
  const [userUid, setUserUid] = useState('');
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentPurpose, setPaymentPurpose] = useState('utility');

  const transactionCollectionRef = collection(db, 'transactions');

  const handleInputUserUid = (e) => {
    setUserUid(e.target.value);
  };

  const handleCheckUserUid = async () => {
    try {
      const userDoc = doc(db, 'users', userUid);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setBalance(Number(userData.balance));
      } else {
        alert('User not found!');
      }
    } catch (error) {
      alert(`Error checking user uid: ${error.message}`);
    }
  };

  const handleDeposit = async () => {
    try {
      const userDoc = doc(db, 'users', userUid);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
  
      const newBalance = Number(balance) + Number(depositAmount);
      await updateDoc(userDoc, { balance: newBalance });
      setBalance(newBalance);
      alert(`Successfully deposited $${depositAmount}!`);
  
      const newTransaction = {
        userUid,
        type: 'deposit',
        amount: Number(depositAmount),
        purpose: '',
        timestamp: new Date().toISOString(),
        image: userData.photoURL,
        displayName: userData.displayName,
      };
      await addDoc(transactionCollectionRef, newTransaction);
  
      setDepositAmount(0);
    } catch (error) {
      alert(`Error depositing $${depositAmount}: ${error.message}`);
    }
  };
  

  const handleWithdraw = async () => {
    try {
      const userDoc = doc(db, 'users', userUid);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
      
      const newBalance = Number(balance) - Number(withdrawAmount);
      if (newBalance < 0) {
        throw new Error("Can't withdraw more than the balance!");
      }
      
      await updateDoc(userDoc, { balance: newBalance });
      setBalance(newBalance);
      
      alert(`Successfully withdrew $${withdrawAmount}!`);
  
      const newTransaction = {
        userUid,
        type: 'withdrawal',
        amount: Number(withdrawAmount),
        purpose: '',
        timestamp: new Date().toISOString(),
        image: userData.photoURL,
        displayName: userData.displayName,
      };
      
      await addDoc(transactionCollectionRef, newTransaction);
      setWithdrawAmount(0);
      
    } catch (error) {
      alert(`Error withdrawing $${withdrawAmount}: ${error.message}`);
    }
  };
  

  const handlePayment = async () => {
    try {
      const userDoc = doc(db, 'users', userUid);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
      
      const newBalance = Number(balance) - Number(paymentAmount);
      if (newBalance < 0) {
        throw new Error("Can't pay more than the balance!");
      }
      
      await updateDoc(userDoc, { balance: newBalance });
      setBalance(newBalance);
      
      alert(`Successfully paid $${paymentAmount} for ${paymentPurpose}!`);
  
      const newTransaction = {
        userUid,
        type: 'payment',
        amount: Number(paymentAmount),
        purpose: paymentPurpose,
        timestamp: new Date().toISOString(),
        image: userData.photoURL,
        displayName: userData.displayName,
      };
      
      await addDoc(transactionCollectionRef, newTransaction);
      setPaymentAmount(0);
      
    } catch (error) {
      alert(`Error paying $${paymentAmount} for ${paymentPurpose}: ${error.message}`);
    }
  };
  

  return (
  <div>
    <AdminNavbar/>
    <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">
  <h1 class="text-xl font-semibold text-blue-600/50 dark:text-blue-500/50">Make Transaction</h1>
  <p className="text-base text-gray-900 dark:text-teal-600 text-center underline decoration-sky-500 decoration-wavy tracking-widest">You can make deposit/withdrawal/payment to user bank account</p>
  <div>
  <label class="text-md font-semibold text-blue-600/75 dark:text-green-500/75">User UID:</label>
  <input type="text" value={userUid} onChange={handleInputUserUid} className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500" placeholder="Enter User ID" />
  <button onClick={handleCheckUserUid} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2 mt-2">Check</button>
  </div>
  <div>
  <label>Balance: </label>
  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" disabled>
  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"'>${balance.toFixed(2)}</span>
  </button>
  </div>
  <div>
  <label class="text-md font-semibold text-blue-600/75 dark:text-green-500/75">Deposit amount: </label>
  <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500" />
  <button onClick={handleDeposit} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2 mt-2" >Deposit</button>
  </div>
  <div>
  <label class="text-md font-semibold text-blue-600/75 dark:text-red-500/75">Withdraw amount: </label>
  <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"/>
  <button onClick={handleWithdraw} className="mt-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2">Withdraw</button>
  </div>
  <div>
  <label class="text-md font-semibold text-blue-600/75 dark:text-red-500/75">Payment amount: </label>
  <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 mt-2" />
  <select value={paymentPurpose} onChange={(e) => setPaymentPurpose(e.target.value)} class="py-2.5 px-0 w-40 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
  <option value="utility">Utility</option>
  <option value="rent">Rent</option>
  <option value="other">Other</option>
  </select>
  <button onClick={handlePayment} className="ml-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2 mt-2">Pay</button>
  </div>
  </div>
  </div>
  </div>
  );
  };
  
  export default Transact;
