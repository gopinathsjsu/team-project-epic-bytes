import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/EmployeeDashboard.css";
import Navbar from "../components/navbar/Navbar";
import AddNewHotelCard from "../components/NewHotelCard/AddHotel";
import AddNewRoomCard from "../components/NewRoomCard/AddRoom";
import { ApiInstance } from "../api/axiosInstance";
import Button from "@mui/material/Button";
import HotelCard from "../components/Card/Card";

export const EmployeeDashboard = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState('hotels');
  const [hotels, setHotels] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [addHotelOpen, setAddHotelOpen] = useState(false);
  const [addRoomOpen, setAddRoomOpen] = useState(false);

  useEffect(() => {
    if(display === 'hotels') {
      setIsLoading(true);
      ApiInstance.get("hotels")
      .then((response) => {
        if (response.status === 200) {
          console.log('Hotels ::', response.data)
          setHotels(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }, [display]);

  useEffect(() => {
    if(display === 'bookings') {
      setIsLoading(true);
      ApiInstance.get("bookings")
      .then((response) => {
        if (response.status === 200) {
          console.log('Bookings ::', response.data)
          setBookings(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }, [display]);

  const onAddNewHotel = () => {
    setOpen(true);
    setAddHotelOpen(true);
  };

  const onAddNewRoom = () => {
    setOpen(true);
    setAddRoomOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setAddHotelOpen(false);
    setAddRoomOpen(false);
  };

  return (
    <>
      <Navbar history={history} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Admin Operations</h1>
            <div className="lsItem">
              <Button variant="contained" onClick={onAddNewHotel}>Add hotel</Button>
            </div>
            <div className="lsItem">
              <Button variant="contained" onClick={onAddNewRoom}>Add Room</Button>
            </div>
            <div className="lsItem">
              <Button variant="contained">Add Amenity</Button>
            </div>
            <div className="lsItem">
              <Button variant="contained" onClick={() => setDisplay('bookings')}>Show Bookings</Button>
            </div>
            <div className="lsItem">
              <Button variant="contained" onClick={() => setDisplay('hotels')}>Show Hotels</Button>
            </div>
          </div>
          <div className="listResult">
            {isLoading ? "Loading..." : (
              <>
                {display === 'bookings' ? 
                  <>
                    <div>Bookings will be displayed here</div>
                  </> :
                  <>
                    {hotels.map((hotel) =>
                     <HotelCard
                       image={require("../images/motel6.webp")}
                       name={hotel.hotelName}
                       loc={hotel.location}
                       rooms={10}
                       type="Deluxe"
                       key={hotel.id}
                     />
                    )}
                  </>
                }
              </>
            )}
          </div>
        </div>
      </div>
      <AddNewHotelCard open={isOpen && addHotelOpen} onClose={closeModal} />
      <AddNewRoomCard open={isOpen && addRoomOpen} onClose={closeModal} />
    </>
  );
};
