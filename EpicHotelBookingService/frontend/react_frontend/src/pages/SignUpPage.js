import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../store/appContext";
import { useToken } from "../auth/useToken";

export const SignUpPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [latName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const { RegisterUser, isErrorLoading } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    if (isErrorLoading) {
      setErrorMessage("Error Occurred while trying to register the user");
    }
  }, [isErrorLoading]);

  const onSignUpClicked = async () => {
    RegisterUser({
      username: emailValue,
      password: passwordValue,
      firstName: firstName,
      lastName: latName,
      email: emailValue,
      phone: phoneNumber,
    });
    history.push("/");
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Sign Up</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="button-input"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="someone@gmail.com"
        />
        <input
          className="button-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first Name"
        />
        <input
          className="button-input"
          value={latName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          className="button-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          className="button-input"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
        />
        <input
          className="button-input"
          type="password"
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          placeholder="confirm Password"
        />
        <hr />
        <button
          className="button-input"
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onSignUpClicked}
        >
          Sign Up
        </button>
        <button className="button-input" onClick={() => history.push("/login")}>
          Already have an account? Log In
        </button>
      </div>
    </div>
  );
};
