import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './styleAccount.css';
import {faBus} from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert' 
import Navbar from './Navbar';
import SearchBus from './SearchBus';
const Account = () => {

  
  return (
    <div className='navbarmain'>
      <Navbar />
      <SearchBus />
    </div>
  ) 
}

export default Account