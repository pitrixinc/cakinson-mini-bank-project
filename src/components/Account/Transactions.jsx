import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase.config.js';
import { collection, doc, getDoc, updateDoc, addDoc, onSnapshot, where } from 'firebase/firestore';
import { NavLink } from "react-router-dom";

import useAuth from '../../custom-hooks/useAuth';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [userUid, setUserUid] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [visibleTransactions, setVisibleTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userUid) {
      const unsubscribe = onSnapshot(
        collection(db, 'transactions'), 
        where('userUid', '==', userUid),
        (snapshot) => {
          const newTransactions = snapshot.docs.map((doc) => doc.data());
          setTransactions(newTransactions);
        }
      );
      return () => {
        unsubscribe();
      };
    }
  }, [userUid]);

  // set the current currency sign with userData
  const { currentUser } = useAuth();

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

  // Update the list of visible transactions whenever showMore or transactions changes
  useEffect(() => {
    if (showMore) {
      setVisibleTransactions(transactions);
    } else {
      setVisibleTransactions(transactions.slice(0, 5));
    }
  }, [showMore, transactions]);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  return (
    <div>
  <div class="w-full max-w-lg min-w-md p-4 bg-white rounded-lg shadow sm:p-8 ">
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-black">Recent Transactions</h5>
      <NavLink to='/account/transaction-report'>
      <p className="text-sm ml-2 font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer" onClick={handleShowMoreClick}>
         View more
      </p>
      </NavLink>
    </div>
    {transactions.length === 0 ? (
      <p class="text-sm text-gray-500 dark:text-gray-600">All your transactions will be displayed here</p>
    ) : (
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-700 dark:divide-gray-700">
          {transactions.filter(transaction => transaction.userUid === userUid).slice(0, 5).map((transaction) => (
            <li key={transaction.id} class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" src={transaction.image} alt="image"/>
                </div>

                <div class="flex-1 min-w-0">
                  <p class={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.type === 'deposit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {transaction.type}
                  </p>

                  {transaction.purpose ? (
                    <p class="ml-2 text-sm text-gray-500 truncate dark:text-gray-600 capitalize">
                      {transaction.purpose}
                    </p>
                  ) : (
                    <p class="ml-2 text-sm text-gray-500 truncate dark:text-gray-600 capitalize">
                      {currentUser.email}
                    </p>
                  )}
                </div>

                <div class="flex-1 min-w-0">
                {userData && userData.currency && (
  <p class="inline-flex items-center text-base font-bold text-gray-900 dark:text-black">
    {userData.currency}{" "}
    {transaction.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
  </p>
)}


                  <p class="ml-2 text-sm text-gray-500 truncate dark:text-gray-600 capitalize">
                    {transaction.timestamp}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {transactions.length > 5 && !showMore && (
          <div class="mt-4">
            <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer" onClick={handleShowMoreClick}>
              View more
            </p>
          </div>
        )}
      </div>
    )}
  </div>
</div>

);
};

export default Transactions;
