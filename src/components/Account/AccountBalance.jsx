import React, { useState, useEffect } from 'react';
import useAuth from '../../custom-hooks/useAuth';
import { db } from '../../firebase.config.js';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { NumericFormat } from 'react-number-format';

const AccountBalance = () => {
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
    <div>

<a href="#" class="block max-w-xs lg:p-6 md:p-6 p-4 bg-white  rounded-lg md:shadow md:hover:bg-yellow-100 md:dark:bg-yellow-50 md:dark:hover:bg-yellow-100 border-b-4 border-blue-500">
    <h6 class="mb-2 md:text-2xl sm:text-sm md:font-bold font-bold tracking-tight text-gray-900 dark:text-black">Account Balance</h6>
    
    <p class="font-bold text-3xl text-gray-700 dark:text-gray-700 flex items-center">
  <span>{userData.currency}</span>
  <span class="ml-2">
    <NumericFormat type="text" value={userData.balance} thousandsGroupStyle="thousand" thousandSeparator="," disabled />
  </span>
</p>


      
</a>
    </div>
  )
}

export default AccountBalance