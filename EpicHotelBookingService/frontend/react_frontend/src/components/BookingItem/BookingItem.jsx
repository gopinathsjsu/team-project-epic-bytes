import "./bookingItem.css";
import { useState } from "react";
import { SecureAPIInstance } from "../../api/axiosInstance";
import ConfirmDeleteCard from "../ConfirmDeleteCard/ConfirmDeleteCard";
import SummaryOfCharges from "../SummaryOfCharges/SummaryOfCharges";


const BookingItem = ({ hotelImage, hotelName, bookingId, roomType, rewardPoints, checkOutDate, checkInDate, phone, email, price, id ,
    perRoomPerNightPrice, totalNights, totalRoomPrice, numberOfRooms, surcharge, surchargeType, tax, taxableAmount, totalAmenityPrice, loyaltyDiscount, loyaltyType,  }) => {
  const [isOpen, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
  };

  const openDeleteModal = () => {
    setOpen(true);
    setDeleteModalOpen(true);
  };

  const openEditModal = () => {
    setOpen(true);
    setEditModalOpen(true);
  };

  const deleteBooking = () => {
    console.log(`Delete the booking :: ${bookingId}`);
    // TODO Call Backend API to delete the booking
  };

//   amenitiesResponse: "Daily Parking : 1 * 60.0,Access to fitness room : 2 * 50.0,"
// bookingId: "364ad49c-32f5-4c91-9774-4671ba84bec2"
// checkInDate: "2022-05-28"
// checkOutDate: "2022-05-31"
// email: "teethi123@gmail.com"
// hotelId: 7
// hotelImage: "https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg"
// hotelName: "JW Mariott Downtown"
// id: 79
// localDateTime: "2022-05-09T00:37:09"
// loyaltyDiscount: 576
// loyaltyType: "PLATINUM - 20.0%"
// numberOfGuestsPerRoom: 4
// numberOfRooms: 2
// perRoomPerNightPrice: 400
// phone: "1234567890"
// price: 2592
// rewardPoints: 2592
// roomId: 3
// roomType: "Family Room"
// surcharge: 0
// surchargeType: "Surcharge"
// tax: 288
// taxableAmount: 2880
// totalAmenityPrice: 160
// totalNights: 3
// totalRoomPrice: 800
// username: "teethi123"

  return (
    <>
      <div className="searchItem">
        <img
          src = {hotelImage}
          alt="hotel image"
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{hotelName}</h1>
          <span className="siDistance">Booking Id: {id}</span>
          <span className="siDistance">Check-in-date: {checkInDate}</span>
          <span className="siDistance">Check-out-date: {checkOutDate}</span>
          <span className="siDistance">Room type: {roomType}</span>
          <span className="siFeatures">Customer contact: {phone}</span>
          <span className="siFeatures">Customer email: {email}</span>
          <span className="siTaxiOp">Reward points: {rewardPoints}</span>
          <button className="siCheckButton" onClick={() => openEditModal()}>Edit booking</button>
          <button className="siCheckButton" onClick={() => openDeleteModal()}>Cancel booking</button>
        </div>
        <div className="siDetails">
          <div className="siRating">
          </div>
          <div className="siDetailTexts">
            <span className="siDistance">Room Price: {perRoomPerNightPrice}</span>
            <span className="siDistance">No. of rooms: * {numberOfRooms}</span>
            <span className="siDistance">-------------------</span>
            <span className="siDistance">Total Room Price: {totalRoomPrice}</span>
            <span className="siDistance">Amenities Price: + {totalAmenityPrice}</span>
            <span className="siDistance">No. of nights: * {totalNights}</span>
            <span className="siDistance">------------------</span>
            <span className="siDistance">Taxable Amount: {taxableAmount}</span>
            <span className="siDistance">Tax (10%): + {tax}</span>
            <span className="siDistance">{surchargeType}:  + {surcharge}</span>
            <span className="siDistance">{loyaltyType}: - {loyaltyDiscount}</span>
            <span className="siPrice">${price}</span>
            <span className="siTaxOp">Total booking amount</span>
            {/* <button className="siCheckButton" onClick={() => openEditModal()}>Edit booking</button> */}
            {/* <button className="siCheckButton" onClick={() => openDeleteModal()}>Cancel booking</button> */}
          </div>
         
        </div>
        
        
      </div>
      <SummaryOfCharges />

      <ConfirmDeleteCard open={isOpen && deleteModalOpen} onClose={closeModal} onConfirm={deleteBooking} />
    </>
  );
};

export default BookingItem;
