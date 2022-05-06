import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DashboardHeader } from "../components/Header/Header";
import HotelCard from "../components/Card/Card";
import { AppContext } from "../store/appContext";
import { getPayloadFromToken } from "../util/useQueryParams";
import "../styles/EmployeeDashboard.css";

export const EmployeeDashboard = () => {
  // We'll use the history to navigate the user
  // programmatically later on (we're not using it yet)
  const history = useHistory();

  const { hoteldata, getHotels } = useContext(AppContext);

  // These state variables control whether or not we show
  // the success and error message sections after making
  // a network request (see JSX below).
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // This useEffect hook automatically hides the
  // success and error messages after 3 seconds when they're shown.
  // Just a little user interface improvement.
  useEffect(() => {
    getHotels();
  }, []);
  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage, showErrorMessage]);
  console.log(hoteldata.data);
  return (
    <>
      <DashboardHeader history={history} />
      <div className="hotel-body">
        {hoteldata &&
          hoteldata.data.map((item) => {
            return (
              <HotelCard
                image={require("../images/motel6.webp")}
                name={item.hotelName}
                loc={item.location}
                rooms={10}
                type="Deluxe"
              />
            );
          })}
      </div>
    </>
  );
};
