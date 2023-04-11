import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {toast} from 'react-toastify';

import {db,storage} from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../custom-hooks/useAuth';

const AddUserTransactions = () => {
 
  const {currentUser} = useAuth()

  const [accountBalance, setAccountBalance] = useState('');
  const [deposit, setDeposit] = useState('');
  const [enterRecipient1, setEnterRecipient1] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [enterRecipientAddress, setEnterRecipientAddress] = useState('');
  const [enterSender, setEnterSender] = useState('');
  
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // ======= add product to firebase database =======
    try {
      const docRef = await collection(db, "products");
  
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // handle upload progress
        },
        (error) => {
          setLoading(false);
          toast.error("Image not uploaded! Error: " + error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
          // generate tracking pin
          const trackingPin = Math.random().toString(36).substring(2, 8);
  
          await addDoc(docRef, {
            accountBalance: accountBalance,
            shortDesc: deposit,
            recipient: enterRecipient1,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL,
            recipientAddress: enterRecipientAddress,
            sender: enterSender,
            trackingPin: trackingPin, // add tracking pin to database
            addedBy: currentUser.uid, // add the uid of the current user who added the product
            displayName: currentUser.displayName
          });
          setLoading(false);
          toast.success("Product added successfully!");
          navigate("/mini/dashboard/all-orders");
        }
      );
    } catch (err) {
      setLoading(false);
      toast.error("Product not added! Error: " + err.message);
    }
  };
  
  
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {
              loading ? <h4 className='py-5'>Loading</h4> : <>
               <h1 className='text-center text-2xl font-bold text-blue-500 dark:text-blue-400'>Add Transaction</h1>
            <Form onSubmit={addProduct} className='justify-center items-center m-10 p-10 shadow-xl'>
              <FormGroup className="justify-center items-center">
                <span className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Account Balance</span>
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='10000000' value={accountBalance} onChange={e=> setAccountBalance(e.target.value)} required />
              </FormGroup>
              
              <FormGroup className="form__group">
                <span className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Description</span>
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Description...'  value={deposit} onChange={e=> setDeposit(e.target.value)} required />
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className="form__group w-50">
                <span>Price</span>
                <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='$100'  value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required />
              </FormGroup>

              <FormGroup className="form__group w-50">
                <span>Status</span>
                <select 
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  
                  value={enterCategory} 
                  onChange={e=> setEnterCategory(e.target.value)}
                >
                <option>Status</option>
                  <option value="pending">pending</option>
                  <option value="awaiting-payment">Awaiting Payment</option>
                  <option value="awaiting-fulfillment">Awaiting Fulfillment</option>
                  <option value="awaiting-shipment">Awaiting Shipment</option>
                  <option value="partially-shipped">Partially Shipped</option>
                  <option value="awaiting-pickup">Awaiting Pickup</option>
                  <option value="completed">Completed</option>
                  <option value="shipped">Shipped</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="declined">Declined</option>
                  <option value="refunded">Refunded</option>
                  <option value="disputed">Disputed</option>
                  <option value="manual-verification-required">Manual Verification Required</option>
                  <option value="partially-refunded">Partially Refunded</option>
                </select>
              </FormGroup>
              </div>

              <div>
              <FormGroup className="form__group">
                <span>Product Image</span>
                <input type="file" onChange={e=> setEnterProductImg(e.target.files[0])} required />
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className="form__group w-50">
                <span>Sender  Name</span>
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Daniel...'  value={enterSender} onChange={e=> setEnterSender(e.target.value)} required />
              </FormGroup>

              <FormGroup className="form__group w-50">
              <span>Recipient Name</span>
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='John Doe'  value={enterRecipient1} onChange={e=> setEnterRecipient1(e.target.value)} required />
              
              </FormGroup>
              </div>

              <FormGroup className="form__group">
                <span>Recipient Address</span>
                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='John Doe'  value={enterRecipientAddress} onChange={e=> setEnterRecipientAddress(e.target.value)} required />
              </FormGroup>
              
              </div>

              <button className="p-3 bg-blue-300 font-bold text-center" type="submit">Add Product</button>
            </Form>
              </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddUserTransactions;