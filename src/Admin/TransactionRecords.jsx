import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc, updateDoc, collection, onSnapshot, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

const TransactionRecords = () => {
const { data: transactionsData, loading } = useGetData('transactions');
const [editingTransaction, setEditingTransaction] = useState(null);
const [hiddenTransactions, setHiddenTransactions] = useState([]);

useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, 'hiddenTransactions'), (snapshot) => {
    const data = snapshot.docs.map((doc) => doc.id);
    setHiddenTransactions(data);
  });

  return unsubscribe;
}, []);

const deletetransaction = async (id) => {
await deleteDoc(doc(db, 'transactions', id));
toast.success('Transaction deleted!');
};

const saveEditedtransaction = async (id, newData) => {
await updateDoc(doc(db, 'transactions', id), newData);
toast.success('Transaction updated!');
setEditingTransaction(null);
};

const hideTransaction = async (id) => {
  // Add the transaction to the hiddenUsers collection
  try {
    const transactionRef = doc(db, 'hiddenTransactions', id);
    await setDoc(transactionRef, { hidden: true });
    toast.success('Transaction pulled!');
  } catch (error) {
    console.log(error);
    toast.error('Error pulling transaction!');
  }
}


const visibleTransactionsData = transactionsData?.filter(transaction => !hiddenTransactions.includes(transaction.id));

const renderEditForm = (transaction) => (
<tr key={transaction.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-green-700 dark:text-700">
<td class="px-6 py-4">
<img src={transaction.image} alt="" className="w-10 h-10 rounded-full" />
</td>

<td class="px-6 py-4">
<input
type="text"
defaultValue={transaction.displayName} disabled/>
</td>

<td class="px-6 py-4">
<input
type="text"
defaultValue={transaction.userUid} disabled/>
</td>
<td class="px-6 py-4">
<input
type="number"
defaultValue={transaction.amount}
onChange={(e) =>
setEditingTransaction({ ...transaction, amount: e.target.value })
}
/>
</td>
<td class="px-6 py-4">
<input
type="text"
defaultValue={transaction.type}
onChange={(e) =>
setEditingTransaction({ ...transaction, type: e.target.value })
}
/>
</td>
<td class="px-6 py-4">
<input
type="text"
defaultValue={transaction.purpose}
onChange={(e) =>
setEditingTransaction({ ...transaction, purpose: e.target.value })
}
/>
</td>
<td class="px-6 py-4">
<input
type="date"
defaultValue={transaction.timestamp}
onChange={(e) =>
setEditingTransaction({ ...transaction, timestamp: e.target.value })
}
/>
</td>
<td>
<button
className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2"
onClick={() => saveEditedtransaction(transaction.id, editingTransaction)}
>
Save
</button>
<button
className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2"
onClick={() => setEditingTransaction(null)}
>
Cancel
</button>
</td>
</tr>
);

const rendertransactionRow = (transaction) => (
<tr key={transaction.id} class="bg-white border-b dark:bg-white dark:border-gray-700 text-black">
<td class="px-6 py-4">
<img class="w-10 h-10 rounded-full" src={transaction.image} alt="" />
</td>
<td class="px-6 py-4 capitalize">{transaction.displayName}</td>
<td class="px-6 py-4">{transaction.userUid}</td>
<td class="px-6 py-4">${transaction.amount}</td>
<td class={`ml-2 inline-flex items-center px-2.5 py-0.5 mt-12 rounded-full capitalize text-xs font-medium ${transaction.type === 'deposit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{transaction.type}</td>
<td class="px-6 py-4 capitalize">{transaction.purpose}</td>
<td class="px-6 py-4">{transaction.timestamp}</td>
<td class="px-6 py-4">
<button
className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
onClick={() => deletetransaction(transaction.id)}
>
Delete
</button>
<button
className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2  text-center mr-2 mb-2"
onClick={() => setEditingTransaction(transaction)}
>
Edit
</button>
<button className='mx-2 bg-white dark:bg-white hover:bg-white text-white dark:text-white py-1 px-3 rounded-lg mt-5' onClick={() => hideTransaction(transaction.id)}>Pull</button>
</td>
</tr>
);

  return (
     <div>
    <AdminNavbar/>
    <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">

    <section>
<Container>
<Row>
<Col lg="12">
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" class="px-6 py-3">User Image</th>
<th scope="col" class="px-6 py-3">User Name</th>
<th scope="col" class="px-6 py-3">User UID</th>
<th scope="col" class="px-6 py-3">Amount</th>
<th scope="col" class="px-6 py-3">Transaction Type</th>
<th scope="col" class="px-6 py-3">Transaction Purpose</th>
<th scope="col" class="px-6 py-3">Transaction Time</th>
<th scope="col" class="px-6 py-3">Action</th>

</tr>
</thead>
<tbody>
{loading ? (
<h4 className="py-5 text-center fw-bold">Loading...</h4>
) : (
<>
                            {editingTransaction && renderEditForm(editingTransaction)}
                            {visibleTransactionsData?.map((transaction) =>
                              editingTransaction && editingTransaction.id === transaction.id ? (
                                renderEditForm(editingTransaction)
                              ) : (
                                rendertransactionRow(transaction)
                              )
                            )}
                          </>
)}
</tbody>
</table>
</div>
</Col>
</Row>
</Container>
</section>

  </div>
  </div>
  </div>
  )
}

export default TransactionRecords;