import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import BookingItem from "../components/BookingItem/BookingItem";
import { SecureAPIInstance } from "../api/axiosInstance";

export const MyBookingsPage = (props) => {
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

  return (
    <>
      <Navbar history={history} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <h2 className="pageHeading">My Bookings</h2>
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {bookings.map((booking) => (
                  <BookingItem {...booking} key={booking.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
