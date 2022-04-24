import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [username, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const { LoginUser, isErrorLoading } = useContext(AppContext);

  useEffect(() => {
    if (isErrorLoading) {
      setErrorMessage("Error Occurred while trying to login");
    }
  }, [isErrorLoading]);

  const onLogInClicked = async () => {
    LoginUser(username, passwordValue);
    history.push("/");
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Log In</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="button-input"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          className="button-input"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
        />
        <hr />
        <button
          className="button-input"
          disabled={!username || !passwordValue}
          onClick={onLogInClicked}
        >
          Log In
        </button>
        <button
          className="button-input"
          onClick={() => history.push("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
};
