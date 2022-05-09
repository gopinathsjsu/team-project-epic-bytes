import "./HotelItem.css";

const HotelItem = ({ hotel }) => {
  return (
    <div className="searchItem">
      <img
        src = {hotel.imageURL}
        alt="hotel image"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.hotelName}</h1>
        <span className="siDistance">{hotel.location}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {hotel.description}
        </span>
        <span className="siFeatures">
         Front desk: {hotel.hotelPhone}
        </span>
        <span className="siFeatures">
         Email: {hotel.hotelEmail}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">From ${hotel.hotelBasePrice}</span>
          <span className="siTaxOp">Excludes taxes and fees</span>
          <button className="siCheckButton">View Rates</button>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
