import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import { CustomerHeader } from "../components/CustomerHeader/CustomerHeader";
import { SearchBar } from "../components/SearchBar/SearchBar";
import HotelDisplayCard from "../components/HotelDisplayCard/HotelDisplayCard";
import "../styles/UserInfoDashboard.css";
import Hero from "../components/hero/Hero";

export const UserInfoDashboard = () => {
  const user = useUser();
  const [token, setToken] = useToken();
  // We'll use the history to navigate the user
  // programmatically later on (we're not using it yet)
  const history = useHistory();

  // These states are bound to the values of the text inputs
  // on the page (see JSX below).

  // These state variables control whether or not we show
  // the success and error message sections after making
  // a network request (see JSX below).
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // This useEffect hook automatically hides the
  // success and error messages after 3 seconds when they're shown.
  // Just a little user interface improvement.
  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage, showErrorMessage]);

  return (
    <>
      <CustomerHeader history={history} user={user} />
      <Hero />
    </>
  );
};
