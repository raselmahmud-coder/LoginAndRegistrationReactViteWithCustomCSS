import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countries, setCountries] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState("");
  console.log(defaultCountry, countries);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/countries.json",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  useEffect(() => {
    if (countries?.data?.[18]) {
      setDefaultCountry(countries?.data?.[18].country);
    }
  }, [countries]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic for submitting the registration form
  };
  const handleCountryChange = (event) => {
    setDefaultCountry(event.target.value);
  };
  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="rowRegister">
          <fieldset>
            <legend>First Name</legend>
            <input type="text" value={email} onChange={handleEmailChange} />
          </fieldset>
          <fieldset>
            <legend>Sure Name</legend>
            <input type="text" value={email} onChange={handleEmailChange} />
          </fieldset>
        </div>
        <br />
        <br />
        <div className="rowRegister">
          <fieldset>
            <legend>E-mail</legend>
            <input type="email" value={email} onChange={handleEmailChange} />
          </fieldset>
          <fieldset>
            <legend>Date of Birth</legend>
            <input type="date" value={email} onChange={handleEmailChange} />
          </fieldset>
        </div>

        <br />
        <br />
        <div className="rowRegister">
          <fieldset>
            <legend>Password</legend>
            <input type="password" value={email} onChange={handleEmailChange} />
          </fieldset>
          <fieldset>
            <legend>Re-enter Password</legend>
            <input type="password" value={email} onChange={handleEmailChange} />
          </fieldset>
        </div>
        <br />
        <div className="instruction">
          <h5>For your security please ensure your password:</h5>
          <p>Is between 8 and 30 characters long</p>
          <p>Contains a mix of upper (capital)and lower case letters</p>
          <p> Contains at least one number</p>
          <p>
            Contains at least one special character
            {" (*:@|#%,;[]{}?-_~$&<>'“^()/!`)"}
          </p>
        </div>
        <br />
        <div className="rowRegister">
          <fieldset>
            <legend>Gender</legend>
            <select name="gender" defaultValue={"default"} id="gender">
              <option value={"default"} disabled>
                Not Specified
              </option>
              <option value="Male">Male</option>
              <option value="FeMale">FeMale</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Country</legend>
            <select
              id="country"
              name="country"
              value={defaultCountry}
              onChange={handleCountryChange}>
              {countries?.data?.map((cy, key) => (
                <option
                  key={key}
                  value={cy.country}>
                  {cy.country}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <br />
        <br />
        <button className="loginBtn" type="submit">
          Register
        </button>
        <p>
          Already Have An Account? <Link to={"/"}>Login</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
