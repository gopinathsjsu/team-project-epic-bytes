import { createContext, useCallback, useState } from "react";
import { ApiInstance } from "../api/axiosInstance";
import { admin_username } from "../api/constants";

const initialContext = {
  userData: { username: "", token: "", userType: "" },
  isDataLoading: false,
  isErrorLoading: false,
  LoginUser: (username, password) => {},
  RegisterUser: (data) => {},
  clearLoginUser: () => {},
  getHotels: (location) => {},
  hotelData: {
    data: [],
    isDataLoading: false,
    isErrorLoading: false,
  },
};

export const AppContext = createContext(initialContext);

export const AppContextComponent = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const [hotelData, setHotelData] = useState({
    data: [],
    isDataLoading: false,
    isErrorLoading: false,
  });
  const [userData, setUserData] = useState({
    username: "",
    token: "",
    userType: "",
  });

  const LoginUser = useCallback(
    (username, password) => {
      setIsDataLoading(true);
      setIsErrorLoading(false);
      ApiInstance.post("login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
            let data = {
              username: username,
              token: response.data?.jwt,
              userType: "user",
            };
            if (username === admin_username) {
              data.userType = "admin";
            }
            setUserData(data);
          }
          setIsErrorLoading(false);
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setIsErrorLoading(true);
        });
    },
    [setUserData]
  );

  const RegisterUser = useCallback(
    (data) => {
      setIsDataLoading(true);
      ApiInstance.post("users", data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
            setUserData({
              username: data.username,
              token: response.data?.jwt,
            });
          }
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setIsErrorLoading(true);
        });
    },
    []
  );

  const clearLoginUser = () => {
    localStorage.removeItem("token");
    setUserData({
      username: "",
      token: "",
      userType: "",
    });
  };

  const getHotels = useCallback(
    (data) => {
      setHotelData({ ...hotelData, isDataLoading: true });
      let url = data === undefined ? "hotels" : `hotels?location=${data}`;
      ApiInstance.get(url)
        .then((response) => {
          if (response.status === 200) {
            setHotelData({ ...hotelData, data: response.data });
          }
          setHotelData({
            ...hotelData,
            isDataLoading: false,
            isErrorLoading: false,
          });
        })
        .catch((error) => {
          console.error(error);
          setHotelData({
            ...hotelData,
            isDataLoading: false,
            isErrorLoading: true,
          });
        });
    },
    [hotelData]
  );

  return {
    LoginUser,
    isDataLoading,
    isErrorLoading,
    userData,
    RegisterUser,
    clearLoginUser,
    getHotels,
    hotelData,
  };
};
