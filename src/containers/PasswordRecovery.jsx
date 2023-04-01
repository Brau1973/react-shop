import React from 'react';

const PasswordRecovery = () => {
  return (
    <div class="login">
      <div className="form-container">
        <div className="center">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        </div>
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Check your inbox for instructions</p>
        <div className="center">
          <div className="email-image">
            <img src="./icons/email.svg" alt="email" />
          </div>
        </div>
        <button className="primary-button login-button">
          Login
        </button>
        <p className="resend">
          <span>Didnt recieve the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}
export default PasswordRecovery;