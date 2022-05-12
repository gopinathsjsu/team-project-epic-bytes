import "./checkOutItem.css";
import { useHistory } from "react-router-dom";
import FeatureItem from "../FeatureItem/FeatureItem";
import { format } from "date-fns";
import SummaryOfCharges from "../SummaryOfCharges/SummaryOfCharges";



const CheckOutItem = ({room, imageUrl, date, options, hotelId, amenities}) => {
  const history = useHistory();
  const handleSelect = () => {
    history.push({
        pathname: '/book',
        state: { 
          amenities, // location state
          room,
          hotelId,
          imageUrl,
          date,
          options
        },
    });
  };


  return (
    <>
    <div className="searchItem">
      <img
        src = {imageUrl}
        alt="room image"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{room.roomType} Executive Guest Room</h1>
        <span className="siTaxiOp">Member Flexible Rate</span>     
        <span className="siCancelOp">Check in:  {format(date[0].startDate, "MM/dd/yyyy")}</span>
        <span className="siCancelOp">Check out: {format(date[0].endDate, "MM/dd/yyyy")}</span>
        <span className="siDistance">Room(s): {options.room}</span>
        <span className="siDistance">Guest(s) per room: {options.adult}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
        </div>
        <div className="siDetailTexts">
          <span className="siTaxOp">from</span>
          <span className="siPrice">${room.perNightPrice}/night</span>
          <span className="siTaxOp">Excludes taxes and fees</span>
  
          <button className="siCheckButton" onClick={handleSelect}>Get Summary Of Charges</button>
        </div>
        

      </div>
    </div>
    <FeatureItem noOfRooms = {options.room} amenities={amenities} />
    <br></br>
    <SummaryOfCharges/>
    <br></br>
    <div className="siDesc">
        <h1 className="siTitle">Hotel Cancellation Policy</h1>     
        <span className="siCancelOp">About this reservation: </span>
        <span className="siDistance">You may cancel your reservation for no charge before 11:59 PM local hotel time on day before your Check-in date.</span>
        <span className="siDistance">After this time, please note that your prepayment for this special rate is non-refundable.</span>
      </div>
      <br></br>
      <button className="siCheckButton">Confirm Booking</button>
    </>
  );
};


export default CheckOutItem;
