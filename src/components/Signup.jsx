import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
    <div>
      <div>
        <h1>Sign Up for a free account</h1>
        <p>Already have an account? <Link to='/'> Sign In.</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Email Address</label>
          <input onChange={(e) => emailValidation(e.target.value)} type="email" required/>
        </div>
      
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" required/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;