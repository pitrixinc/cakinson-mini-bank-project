import React, { useState, useEffect } from 'react';
import useAuth from '../../custom-hooks/useAuth';
import { db } from '../../firebase.config.js';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

const SliderUserName = () => {
    const {currentUser} = useAuth();

    const [userData, setUserData] = useState({});

    useEffect(() => {
      const fetchUserData = async () => {
        const userDoc = doc(db, 'users', currentUser.uid);
        const userSnapshot = await getDoc(userDoc);
  
        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data());
        } else {
          console.log('User document not found');
        }
      };
  
      if (currentUser && currentUser.uid) {
        fetchUserData();
      }
    }, [currentUser]);
  

  return (
    <div className="flex justify-center items-center">

    
<div class="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={currentUser.photoURL} alt="Profile image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">{currentUser.displayName}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 capitalize">{userData.category}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <NavLink to='/account/send-money'> <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Money</button> </NavLink>
            <NavLink to='/account/withdraw'> <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Withdraw Money</button> </NavLink>
        </div>
    </div>
</div>


    </div>
  )
}

export default SliderUserName