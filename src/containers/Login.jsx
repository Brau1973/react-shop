import React from "react";
import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <div className="center">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        </div>
        <h1 className="title">Create a new Password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="**********"
            className="input input-password"
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="**********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;