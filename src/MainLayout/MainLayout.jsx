
import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import Auth from '../Page/Auth/Auth';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Page/Home/Home';
import Error from '../Page/Error/Error';
import Login from '../Page/Auth/Login/Login'
import Register from '../Page/Auth/Register/Register'
import AuthCheck from '../AuthCheck/AuthCheck';


const MainLayout = () => {
  return (
    <BrowserRouter>
    {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path='/' element={
          <AuthCheck>
                <Home/>
          </AuthCheck>
          } />
        <Route path = 'auth' element={<Auth/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>

       
          {/* Not found route */}
          <Route path='*' element={<Error/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default MainLayout
