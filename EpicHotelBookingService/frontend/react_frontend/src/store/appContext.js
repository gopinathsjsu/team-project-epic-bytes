import { createContext, useCallback, useState } from "react";
import { ApiInstance } from "../api/axiosInstance";
import { admin_username } from "../api/constants";

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
  clearLoginUser: () => {},
  getHotels: (location) => {},
  hoteldata: {
    data: [],
    isDataLoading: false,
    isErrorLoading: false,
  },
};

export const AppContext = createContext(initialContext);

export const AppContextComponent = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isErrorLoading, setisErrorLoading] = useState(false);
  const [hoteldata, setHotelData] = useState({
    data: [],
    isDataLoading: false,
    isErrorLoading: false,
  });
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
    token: "",
    usertype: "",
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
      setisErrorLoading(false);
      ApiInstance.post("login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
            let data = {
              username: username,
              password: password,
              token: response.data?.jwt,
              usertype: "user",
            };
            if (username === admin_username) {
              data.usertype = "admin";
            }
            setUserData(data);
          }
          setisErrorLoading(false);
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setisErrorLoading(true);
        });
    },
    [setUserData]
  );

  const RegisterUser = useCallback(
    (data) => {
      setIsDataLoading(true);
      setRegData(data);
      ApiInstance.post("users", data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
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

  const clearLoginUser = () => {
    localStorage.removeItem("token");
    setUserData({
      username: "",
      password: "",
      token: "",
      usertype: "",
    });
  };

  const getHotels = useCallback(
    (data) => {
      setHotelData({ ...hoteldata, isDataLoading: true });
      let url = data === undefined ? "hotels" : `hotels?location=${data}`;
      ApiInstance.get(url)
        .then((response) => {
          if (response.status === 200) {
            setHotelData({ ...hoteldata, data: response.data });
          }
          setHotelData({
            ...hoteldata,
            isDataLoading: false,
            isErrorLoading: false,
          });
        })
        .catch((error) => {
          console.error(error);
          setHotelData({
            ...hoteldata,
            isDataLoading: false,
            isErrorLoading: true,
          });
        });
    },
    [hoteldata]
  );

  return {
    LoginUser,
    isDataLoading,
    isErrorLoading,
    userdata,
    regdata,
    RegisterUser,
    clearLoginUser,
    getHotels,
    hoteldata,
  };
};
