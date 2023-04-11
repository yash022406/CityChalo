import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Account from './components/Account';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <div className=''>

      <AuthContextProvider>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={
        <ProtectedRoutes>

          <Account /> 
        </ProtectedRoutes>
        }/>
      </Routes>
      </BrowserRouter>

      </AuthContextProvider>
    </div>
  );
}

export default App;
 