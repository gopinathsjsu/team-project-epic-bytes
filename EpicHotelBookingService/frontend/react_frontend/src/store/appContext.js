import { createContext, useCallback, useState } from "react";
import { ApiInstance } from "../api/axiosInstance";

const initialContext = {
  userdata: { username: "", password: "", token: "" },
  isDataLoading: false,
  isErrorLoading: false,
  LoginUser: (username, password) => {},
};

export const AppContext = createContext(initialContext);

export const AppContextComponent = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isErrorLoading, setisErrorLoading] = useState(false);
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
    token: "",
  });

  const LoginUser = useCallback(
    (username, password) => {
      setIsDataLoading(true);
      setUserData({ username, password });
      ApiInstance.post("login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem("token", response.data);
            setUserData({ ...userdata, token: response.data });
          }
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setisErrorLoading(true);
        });
    },
    [userdata, setUserData]
  );

  return {
    LoginUser,
    isDataLoading,
    isErrorLoading,
    userdata,
  };
};
