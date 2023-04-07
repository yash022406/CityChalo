import {React,useEffect,useState} from 'react';
import GoogleButton from 'react-google-button';
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth();
  const {googleSignIn,user} = UserAuth();
  const emailValidation = (val) => {
    if(val.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g)){
      console.log("true");
    }else{
      console.log("false");
    }
  }

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();

    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    if(user != null){
      navigate('/account');
    }
  },[user]);

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
          <input onChange={(e) => emailValidation(e.target.value)} type="email" required/> 
        </div>
      
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" required/>
        </div>
        <button>Sign In</button>
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </form>
    </div>
  )
}

export default Signin