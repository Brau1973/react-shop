import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login_SignUp from '../containers/Login_SignUp';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login-sign-up' element={<Login_SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/password-recovery' element={<PasswordRecovery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;