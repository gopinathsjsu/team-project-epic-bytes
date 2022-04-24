import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import { DashboardHeader } from "../components/Header/Header";
import HotelCard from "../components/Card/Card";
import "../styles/EmployeeDashboard.css";

export const EmployeeDashboard = () => {
  const user = useUser();
  const [token, setToken] = useToken();
  // We'll use the history to navigate the user
  // programmatically later on (we're not using it yet)
  const history = useHistory();

  // These states are bound to the values of the text inputs
  // on the page (see JSX below).
  const [favoriteFood, setFavoriteFood] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [bio, setBio] = useState("");

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
      <DashboardHeader history={history} user={user} />
      <div className="hotel-body">
        <HotelCard
          image={require("../images/motel6.webp")}
          name="Motel6"
          loc="SanJose"
          rooms={10}
          type="Deluxe"
        />
      </div>
    </>
  );
};
