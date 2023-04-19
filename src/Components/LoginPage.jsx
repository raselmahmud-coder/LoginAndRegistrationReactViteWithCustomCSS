import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic for submitting the login form
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="rowLogin">
          <fieldset>
            <legend>Email:</legend>
            <input type="email" value={email} onChange={handleEmailChange} />
          </fieldset>
          <br />
          <fieldset>
            <legend>Password:</legend>
            <input type="password" value={email} onChange={handleEmailChange} />
          </fieldset>
        </div>
        <br />
        <button className="loginBtn" type="submit">
          Log In
        </button>
        <p>
          Are You New User? <Link to={"/register"}>Register Here</Link>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
