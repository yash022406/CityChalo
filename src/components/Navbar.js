import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBus} from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert' 

const Navbar = () => {

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
    <nav className='flex justify-between bg-green-100 h-[90px] items-center w-full mx-auto px-10'>
        {/* <div className='flex justify-between items-center w-[70%] px-10'> */}
        <i className="fa-solid fa-bus fa-2xl"></i>
        
          <p className='text-4xl font-semibold'>
            CityChalo
          </p>
          <div>
            <button className='text-2xl border-[2px] border-green-800 rounded-md w-[120px] h-[54px] hover:bg-green-300 ease-in-out duration-500 ' onClick={handleLogout}>Logout</button>
          </div>
          {/* </div> */}
      </nav>
  )
}

export default Navbar
