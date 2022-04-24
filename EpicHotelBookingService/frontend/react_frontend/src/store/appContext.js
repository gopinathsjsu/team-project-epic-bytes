import { createContext, useCallback, useState } from "react";
import { ApiInstance } from "../api/axiosInstance";

const initialContext = {
  userdata: { username: "", password: "", token: "" },
  isDataLoading: false,
  isErrorLoading: false,
  LoginUser: (username, password) => {},
  regdata: {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  RegisterUser: (data) => {},
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

  const [regdata, setRegData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const LoginUser = useCallback(
    (username, password) => {
      setIsDataLoading(true);
      setUserData({ username, password });
      ApiInstance.post("login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem("token", response.data?.jwt);
            setUserData({ ...userdata, token: response.data?.jwt });
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

  const RegisterUser = useCallback(
    (data) => {
      setIsDataLoading(true);
      setRegData(data);
      ApiInstance.post("users", data)
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem("token", response.data?.jwt);
            setUserData({
              username: data.username,
              password: data.password,
              token: response.data?.jwt,
            });
          }
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setisErrorLoading(true);
        });
    },
    [setRegData]
  );

  return {
    LoginUser,
    isDataLoading,
    isErrorLoading,
    userdata,
    regdata,
    RegisterUser,
  };
};
