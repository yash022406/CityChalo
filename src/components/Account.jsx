import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './styleAccount.css';
import {faBus} from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert' 
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
    <div className='navbarmain'>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
        <div>
        <i class="fa-solid fa-bus fa-xl"></i>
        </div>
          <div class='namemain'>
            CityChalo
          </div>
          <div class="d-flex">
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            <button class="btn btn-outline-success" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      
    </div>
  ) 
}

export default Account