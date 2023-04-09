import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signin.css';
const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const emailValidation = (val) => {
    if(val.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g)){
      console.log("true");
    }else{
      console.log("false");
    }
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try{
      await createUser(email,password);
      navigate('/account')
    }catch(e){
      setError(e.message);
      console.log(e);
    }
  }

  return ( 
    <div className='body'>
      <div className='cover'>
        <div>
        <h1>Sign Up </h1>
        <p className='lol'>Already have an account? <Link to='/'> Sign In.</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='text'>
          
          <input onChange={(e) => emailValidation(e.target.value)} placeholder='Email Id' type="email" required/>
        </div>
      
        <div className='text'>
          
          <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" required/>
        </div>
        <button className='si'>Sign Up</button>
      </form>
      </div>
    </div>
  )
}

export default Signup;