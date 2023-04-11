import React, { useState, useEffect } from 'react';
import useAuth from '../../custom-hooks/useAuth';
import { db } from '../../firebase.config.js';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const CardsLinked = () => {
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

<a href="#" class="block max-w-sm lg:p-6 md:p-6 p-4 bg-white  rounded-lg shadow hover:bg-blue-250 dark:bg-blue-100 dark:hover:bg-blue-250 border-b-4 border-green-500">
    <h5 class="mb-2 md:text-2xl sm:text-sm md:font-bold sm:font-semibold tracking-tight text-gray-900 dark:text-black">Routing No.</h5>
    <p class="font-bold text-gray-700 dark:text-gray-700">{userData.routingNumber}</p>
</a>

    </div>
  )
}

export default CardsLinked