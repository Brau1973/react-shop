import React from 'react';
import '../styles/Login_SignUp.scss';

const Login_SignUp = () => {
  return (
    <div className="login">
      <div className="form-container">
        <div className="center">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        </div>
        <form action="/" className="form" >
          <label htmlFor="email" className="label">Email Address</label>
          <input type="text" id="email" placeholder="ejemplo@gmail.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="**********" className="input input-password" />
          <input type="submit" defaultValue="Log In" value="Log In" className="primary-button login-button" />
          <a href="./">Forgot your password?</a>
        </form>
        <button className="secondary-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login_SignUp;