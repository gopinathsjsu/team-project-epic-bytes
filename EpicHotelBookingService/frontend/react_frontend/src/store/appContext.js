import { createContext, useCallback, useState } from "react";
import { ApiInstance } from "../api/axiosInstance";

const initialContext = {
  isDataLoading: false,
  isErrorLoading: false,
  LoginUser: (username, password) => {},
  RegisterUser: (data) => {},
  clearLoginUser: () => {},
  getHotels: (location) => {},
  getToken: () => {},
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

  const LoginUser = useCallback(
    (username, password) => {
      setIsDataLoading(true);
      setIsErrorLoading(false);
      ApiInstance.post("login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
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
    []
  );

  const RegisterUser = useCallback(
    (data) => {
      setIsDataLoading(true);
      setIsErrorLoading(false);
      ApiInstance.post("users", data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data?.jwt);
          }
          setIsDataLoading(false);
          setIsErrorLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsDataLoading(false);
          setIsErrorLoading(true);
        });
    },
    []
  );

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const clearLoginUser = () => {
    localStorage.removeItem("token");
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
    RegisterUser,
    clearLoginUser,
    getHotels,
    getToken,
    hotelData,
  };
};
