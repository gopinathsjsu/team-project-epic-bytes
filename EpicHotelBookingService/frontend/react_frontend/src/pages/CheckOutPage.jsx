import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import CheckOutItem from "../components/CheckOutItem/CheckOutItem";
import Navbar from "../components/navbar/Navbar";
import { ApiInstance } from "../api/axiosInstance";
import Footer from "../components/Footer/Footer";


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
          <div className="listResult">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                  <CheckOutItem room={room} imageUrl={imageUrl} date={date} options={options} hotelId ={hotelId} amenities={amenities}/>
              </>
            )}
           
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default CheckOutPage;
