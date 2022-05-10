import "./roomItem.css";
import { Link } from "react-router-dom";



const RoomItem = ({ room , imageUrl}) => {
  return (
    <div className="searchItem">
      <img
        src = {imageUrl}
        alt="room image"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{room.roomType} Executive Guest Room</h1>
        {/* <span className="siDistance">{hotel.location}</span> */}
        <span className="siTaxiOp">Member Flexible Rate</span>     
        {/* <span className="siSubtitle">{hotel.description}</span> */}
        <span className="siCancelOp">Free cancellation </span>
        <span className="siDistance">No. of Guests: {room.beds}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          {/* <span>Excellent</span>
          <button>8.9</button> */}
        </div>
        <div className="siDetailTexts">
          <span className="siTaxOp">from</span>
          <span className="siPrice">${room.perNightPrice}/night</span>
          <span className="siTaxOp">Excludes taxes and fees</span>
  
          <button className="siCheckButton">Select</button>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
