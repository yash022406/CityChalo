import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
const Account = () => {

  const {user,logout} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try{
      await logout()
      navigate('/');
      console.log('You are logged out.')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      Account
    <p>User Email: {user && user.email}</p>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account