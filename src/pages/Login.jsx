import React, {useState} from 'react';
import {Form, FormGroup, Col } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate= useNavigate()

  const signIn = async (e)=>{

    e.preventDefault()
    setLoading(true)

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      if (user.uid === 'rJjROQIOGHMVu22md9VsGQphfPZ2') {
        setLoading(false)
        toast.success('Admin Successfully logged in')
        setTimeout(() => {
          navigate('/dashboard')
        }, 500);
      } else {
        setLoading(false)
        toast.success('You logged in successfully')
        setTimeout(() => {
          navigate('/account')
        }, 500);
      }
      
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }



  return (
    
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        
        <div class="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold">Welcome back</span>
          <span class="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          {
              loading ? (<Col lg='12' className='text-center'><h5 className='font-bold'>Logging In, Please wait... <div class="spinner-grow text-primary"></div></h5></Col>) : (
          <Form onSubmit={signIn}>
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
            <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           </div>
          <input type="password"  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-50 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50" placeholder="Enter User password" value={password} onChange={e=> setPassword(e.target.value)} />
        </div>
        </FormGroup>

        <button type="submit" className="w-full bg-blue-400 text-white p-2 rounded-lg mb-6 hover:bg-blue-500 hover:text-black hover:border hover:border-gray-300">Log In</button>
               

        </Form>
          )
        }
        </div>
        {/* right side */} 
        <div class="relative">
          <img
            src="https://t4.ftcdn.net/jpg/05/31/67/91/360_F_531679184_3VykZEvx3OvHKnLpl3TdaDYWT1hYjvc9.jpg"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          
          <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been using Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login