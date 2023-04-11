import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Form, FormGroup, Col } from 'reactstrap';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {auth} from '../firebase.config.js';
import { storage } from '../firebase.config.js';
import {toast} from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config.js';

const AddUser = () => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password,setPassword] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterOccupation, setEnterOccupation] = useState('');
  const [enterAddress, setEnterAddress] = useState('');
  const [enterCurrency, setEnterCurrency] = useState('');
  const [file,setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const storageRef = ref(storage, `/images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
      const realAccountNumber = accountNumber.toString();
      const routingNumber = "021611342";
    
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress updates
        },
        (error) => {
          console.error(error);
          toast.error(error.message);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
              category: enterCategory,
              address: enterAddress,
              phoneNumber: phoneNumber,
              accountNumber: realAccountNumber,
              routingNumber: routingNumber,
              currency: enterCurrency,
              occupation: enterOccupation,
            });

            // store user data on firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
              category: enterCategory,
              address: enterAddress,
              phoneNumber: phoneNumber,
              accountNumber: realAccountNumber,
              routingNumber: "021611342",
              currency: enterCurrency,
              occupation: enterOccupation,
            });
            setLoading(false);
            toast.success('Your Account is created');
            navigate('/login');
          } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error('Error getting download URL');
          }
        }
      );
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Something went wrong');
    }
  }

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        
        <div class="flex flex-col justify-start p-8 md:p-14 overflow-y-auto max-h-screen">
          <span class="mb-3 text-4xl font-bold">Sign Up</span>
          <span class="font-light text-gray-400 mb-8">
            Please enter your details to create an account.
          </span>
          {
              loading ? (<Col lg='12' className='text-center'><h5 className='font-bold'>Signing Up, Please wait... <div class="spinner-grow text-primary"></div></h5></Col>) : (
    <Form onSubmit={handleSignUp}>
      <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
           </div>
          <input type="text" className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter Username" value={username} onChange={e=> setUsername(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           </div>
          <input type="email"  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User email" value={email} onChange={e=> setEmail(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           </div>
          <input type="text"  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User Address" value={enterAddress} onChange={e=> setEnterAddress(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           </div>
          <input type="number" className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User Phone Number" value={phoneNumber} onChange={e=> setPhoneNumber(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
           </div>
          <input type="text" className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User Occupation" value={enterOccupation} onChange={e=> setEnterOccupation(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup>
        <div class="relative">
           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           </div>
          <input type="password"  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User password" value={password} onChange={e=> setPassword(e.target.value)} />
        </div>
        </FormGroup>

        <FormGroup className="form__group w-50">
                <select 
                  className='bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'  
                  value={enterCategory} 
                  onChange={e=> setEnterCategory(e.target.value)}
                >
                <option>Account Type</option>
                  <option value="current account">Current Account</option>
                  <option value="savings account">Savings Account</option>
                  <option value="salary account">Salary Account</option>
                  <option value="fixed deposit account">Fixed Deposit Account</option>
                  <option value="recurring deposit account">Recurring Deposit Account</option>
                  <option value="non resident ordinary">Non-Resident Ordinary (NRO) Account</option>
                </select>
              </FormGroup>

              <FormGroup className="form__group w-50">
                <select 
                  className='bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'  
                  value={enterCurrency} 
                  onChange={e=> setEnterCurrency(e.target.value)}
                >
                <option>Account Currency</option>
                  <option value="$">$</option>
                  <option value="€">€</option>
                  <option value="₹">₹</option>
                  <option value="¥">¥</option>
                  <option value="₵">₵</option>
                  <option value="£">£</option>
                  <option value="₦">₦</option>
                </select>
              </FormGroup>
        
        <FormGroup>                 
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="" onChange={(e) => setFile(e.target.files[0])} />
    </label>
</div> 
                </FormGroup>
         
                <button type="submit" className="w-full bg-blue-400 text-white p-2 rounded-lg mb-6 hover:bg-blue-500 hover:text-black hover:border hover:border-gray-300">Create an Account</button>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
          </Form>
              )}
          </div>
          
          
        
        {/* right side */} 
        <div class="relative">
          <img
            src="https://pbs.twimg.com/media/DeTqNSmV4AE8tbu.jpg"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          
          <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >Create an account with Us.<br />We are reliable and efficient. <br /> Sign up today.
            </span>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default AddUser