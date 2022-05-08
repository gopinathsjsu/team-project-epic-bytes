import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/UserInfoDashboard.css";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import BookingCard from "../components/BookingCard/BookingCard";
import { SecureAPIInstance } from "../api/axiosInstance";

export const Bookings = (props) => {
  // We'll use the history to navigate the user
  // programmatically later on (we're not using it yet)
  const history = useHistory();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    SecureAPIInstance.get("bookings/users")
      .then((response) => {
        if (response.status === 200) {
          setBookings(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

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

  const removeBookings = (bookingId) => {
    let data = [...bookings];
    data.filter((item) => item.bookingId !== bookingId);
    setBookings(data);
  };

  return (
    <>
      <Navbar history={history} />
      <>
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {bookings.map((book) => (
              <BookingCard
                image={require("../images/motel6.webp")}
                hotelName={book.hotelName}
                checkInDate={book.checkInDate}
                rooms={book.numberOfRooms}
                roomType={book.roomType}
                bookingId={book.bookingId}
                bookingsRemove={removeBookings}
              />
            ))}
          </>
        )}
      </>
    </>
  );
};
