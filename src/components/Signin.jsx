import { React, useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../App.css';
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
    <div >
      <div className='bg'>
        <div className='cover'>
          <div align='center'>
              <h1>Sign In for a free account</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='text'> 
                <input onChange={(e) => emailValidation(e.target.value)} placeholder='Email id' type="email" required />
              </div>
              <div>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" required />
              </div>
              <button>Sign In</button>
              <p>Don't have an account? <Link to='/signup'> Sign Up.</Link></p>
              <div align='center'>
                <GoogleButton onClick={handleGoogleSignIn} />
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}


export default Signin