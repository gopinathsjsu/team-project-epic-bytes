import "./bookingItem.css";
import { useState } from "react";
import { SecureAPIInstance } from "../../api/axiosInstance";
import ConfirmDeleteCard from "../ConfirmDeleteCard/ConfirmDeleteCard";
import SummaryOfCharges from "../SummaryOfCharges/SummaryOfCharges";


const BookingItem = ({ booking, customerName, hotelAddress, hotelImage, hotelName, bookingId, roomType, rewardPoints, checkOutDate, checkInDate, phone, email, price, id ,
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
          <span className="siDistance">{hotelAddress}</span>
          <span className="siDistance">Booking Id: {id}</span>
          <span className="siDistance">Check-in-date: {checkInDate}</span>
          <span className="siDistance">Check-out-date: {checkOutDate}</span>
          <span className="siDistance">Room type: {roomType}</span>
          <span className="siFeatures">Customer name: {customerName}</span>
          <span className="siFeatures">Customer contact: {phone}</span>
          <span className="siFeatures">Customer email: {email}</span>
          <span className="siTaxiOp">Reward points: {rewardPoints}</span>
          {/* <button className="siCheckButton" onClick={() => openEditModal()}>Edit booking</button>
          <button className="siCheckButton" onClick={() => openDeleteModal()}>Cancel booking</button> */}
        </div>
        <div className="siDetails">
          <div className="siRating">
          </div>
          <div className="siDetailTexts">
            {/* <span className="siDistance">Room Price: {perRoomPerNightPrice}</span>
            <span className="siDistance">No. of rooms: * {numberOfRooms}</span>
            <span className="siDistance">-------------------</span>
            <span className="siDistance">Total Room Price: {totalRoomPrice}</span>
            <span className="siDistance">Amenities Price: + {totalAmenityPrice}</span>
            <span className="siDistance">No. of nights: * {totalNights}</span>
            <span className="siDistance">------------------</span>
            <span className="siDistance">Taxable Amount: {taxableAmount}</span>
            <span className="siDistance">Tax (10%): + {tax}</span>
            <span className="siDistance">{surchargeType}:  + {surcharge}</span>
            <span className="siDistance">{loyaltyType}: - {loyaltyDiscount}</span> */}
            <span className="siPrice">${price}</span>
            <span className="siTaxOp">Total booking amount</span>
            <button className="siCheckButton" onClick={() => openEditModal()}>Edit booking</button>
            <button className="siCheckButton" onClick={() => openDeleteModal()}>Cancel booking</button>
          </div>
         
        </div>
      </div>
      <SummaryOfCharges {...booking} key={booking.id}/>
      <br />
      <hr />
      <ConfirmDeleteCard open={isOpen && deleteModalOpen} onClose={closeModal} onConfirm={deleteBooking} />
    </>
  );
};

export default BookingItem;
