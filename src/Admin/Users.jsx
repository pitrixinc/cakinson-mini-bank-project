import React, { useState, useEffect } from 'react';
import { Container, Row , Col } from 'reactstrap';
import useGetData from "../custom-hooks/useGetData";
import { deleteDoc, doc, collection, onSnapshot, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import {toast} from 'react-toastify';
import useAuth from '../custom-hooks/useAuth';
import AdminNavbar from './AdminNavbar';

const Users = () => {
  const { currentUser } = useAuth();
    const {data: usersData, loading} = useGetData('users');
    const [hiddenUsers, setHiddenUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'hiddenUsers'), (snapshot) => {
          const data = snapshot.docs.map((doc) => doc.id);
          setHiddenUsers(data);
        });
      
        return unsubscribe;
      }, []);
      
    

    const deleteUser = async (id) => {
        try {
            // First, delete the user from Firestore
            await deleteDoc(doc(db, 'users', id));

            // Then, get the user object from Firebase Authentication
            const user = await auth.getUser(id);

            // Check if the user UID is the one that shouldn't be deleted
            if (user.uid === 'rJjROQIOGHMVu22md9VsGQphfPZ2') {
                toast.error('Cannot delete this user!');
                return;
            }

            // Check if the current user has permission to delete a user
            if (currentUser && currentUser.uid !== user.uid) {
                toast.error('You do not have permission to delete this user!');
                return;
            }

            // Finally, delete the user from Firebase Authentication
            await auth.deleteUser(id);
            toast.success('User deleted!');

            // Remove the user from the hiddenUsers collection if they were hidden
           await db.collection('hiddenUsers').doc(id).delete();

        } catch (error) {
            console.log(error);
            toast.error('Error deleting user!');
        }
    }



    const hideUser = async (id) => {
        // Add the user to the hiddenUsers collection
        try {
          const userRef = doc(db, 'hiddenUsers', id);
          await setDoc(userRef, { hidden: true });
          toast.success('User Pulled!');
        } catch (error) {
          console.log(error);
          toast.error('Error pulling user!');
        }
      }
      
      
      const visibleUsersData = usersData?.filter(user => !hiddenUsers.includes(user.id));
    
    

  return (
    <div>
    <AdminNavbar/>
    <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">
    <section>
            <Container>
                <Row>
                    <Col lg="12"><h4 className="fw-bold"> Users </h4></Col>
                    <Col lg='12' className='pt-5'>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th scope="col" class="px-6 py-3">Image</th>
                                    <th scope="col" class="px-6 py-3">Username</th>
                                    <th scope="col" class="px-6 py-3">User UID</th>
                                    <th scope="col" class="px-6 py-3">Email</th>
                                    <th scope="col" class="px-6 py-3">Account Number</th>
                                    <th scope="col" class="px-6 py-3">Routine Number</th>
                                    <th scope="col" class="px-6 py-3">Account Balance</th>
                                    <th scope="col" class="px-6 py-3">Account Type</th>
                                    <th scope="col" class="px-6 py-3">Occupation</th>
                                    <th scope="col" class="px-6 py-3">Phone Number</th>
                                    <th scope="col" class="px-6 py-3">Address</th>
                                    <th scope="col" class="px-6 py-3">Action</th>
                                     
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    loading ? (<h5 className='pt-5 font-bold'>Loading...</h5>) :
                                    (visibleUsersData?.map(user=> (
                                        <tr key={user.uid} class="bg-white border-b dark:bg-white dark:border-gray-700">
                                            <td class="px-6 py-4"><img src={user.photoURL} alt="" class="w-10 h-10 rounded-full" /></td>
                                            <td class="px-6 py-4">{user.displayName}</td>
                                            <td class="px-6 py-4">{user.uid}</td>
                                            <td class="px-6 py-4">{user.email}</td>
                                            <td class="px-6 py-4">{user.accountNumber}</td>
                                            <td class="px-6 py-4">{user.routingNumber}</td>
                                            {user.balance ? (
                                            <td class="px-6 py-4">{user.currency} {user.balance}</td>
                                            ) : (
                                            <td class="px-6 py-4">{user.currency}0</td>
                                            )}
                                            <td class="px-6 py-4">{user.category}</td>
                                            <td class="px-6 py-4">{user.occupation}</td>
                                            <td class="px-6 py-4">{user.phoneNumber}</td>
                                            <td class="px-6 py-4">{user.address}</td>

                                            {user && user.uid == 'rJjROQIOGHMVu22md9VsGQphfPZ2' ?
                                    <td class="px-6 py-3 text-black font-bold">
                                        Admin
                                    </td> :
                                    <td class="px-6 py-3">
                                    <button onClick={() => deleteUser(user.id)} className="bg-red-600 rounded py-3 px-5 text-white font-semibold">Delete</button>
                                    <button className='mx-2 bg-white dark:bg-white hover:bg-white text-white dark:text-white py-1 px-3 rounded-lg mt-5' onClick={() => hideUser(user.id)}>Pull</button>
                                </td>
 } </tr>
                                    
                                    )))
                                }
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

export default Users