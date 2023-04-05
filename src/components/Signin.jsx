import {React,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (e) {
      setError(e)
      console.log(e)
    }
  }

  return (
    <div>
      <div>
        <h1>Sign In for a free account</h1>
        <p>Don't have an account? <Link to='/signup'> Sign Up.</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" /> 
        </div>
      
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Signin