import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import RoomItem from "../components/RoomItem/RoomItem";
import Navbar from "../components/navbar/Navbar";
import { ApiInstance } from "../api/axiosInstance";


const CheckOutPage = () => {
  const history = useHistory();
  const location = useLocation();
  const initDateData = location?.state?.date ? location?.state?.date : [{ startDate: new Date(), endDate: new Date(), key: "selection",}];
  const [date, setDate] = useState(initDateData);
  const [openDate, setOpenDate] = useState(false);
  const initOptionsData = location?.state?.options? location?.state?.options : { adult: 1, children: 0, room: 1, };
  const [options, setOptions] = useState(initOptionsData);
  const [isLoading, setIsLoading] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const imageUrl = location?.state?.imageUrl;
  const room = location?.state?.room;
  const hotelId = location?.state?.hotelId;

  useEffect(() => {
    setIsLoading(true);
    ApiInstance.get("amenities")
      .then((response) => {
        if (response.status === 200) {
          setAmenities(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);


  return (
    <div>
      <Navbar history={history} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {/* {rooms.map((room, index) => (
                  <RoomItem room={room} key={room.id} imageUrl={photos[index]} date={date} options={options} />
                ))} */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
