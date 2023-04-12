import { React, useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './signin.css';
const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth();
  const { googleSignIn, user } = UserAuth();
  const emailValidation = (val) => {
    if (val.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e)
      console.log(e)
    }
  }

  return (
    <div className='body' >
      <div className='cover signincover'>
        <div align='center'>
          <h1>login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='text'>
            
            <input onChange={(e) => emailValidation(e.target.value)} placeholder='Email id' type="email" required />
            
          </div>
          <div className='text'>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="Password" required />
          </div>
          <button className='si'>Sign In</button>
          <p className='lol'>Don't have an account? <Link to='/signup'> Sign Up.</Link></p>
          <div align='center'>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </form>
      </div>
    </div>
  )
}


export default Signin