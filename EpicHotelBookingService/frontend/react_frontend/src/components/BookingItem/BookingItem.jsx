import "./bookingItem.css";
import { useState } from "react";
import { SecureAPIInstance } from "../../api/axiosInstance";
import ConfirmDeleteCard from "../ConfirmDeleteCard/ConfirmDeleteCard";

// Array(6)
// 0:
// bookingId: "5ef1dc35-7ee6-413e-87d2-efd380cf7f96"
// checkInDate: "2022-05-28"
// checkOutDate: "2022-05-31"
// email: "teethi@gmail.com"
// hotelId: 7
// hotelImage: "https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg"
// hotelName: "Courtyard Mumbai International Airport"
// id: 15
// localDateTime: "2022-05-08T14:31:08"
// numberOfGuestsPerRoom: 0
// numberOfRooms: 5
// phone: "1234567890"
// price: 3900
// rewardPoints: 3900
// roomId: 2
// roomType: "Single Room"
// username: "teethi123"

const BookingItem = ({ hotelImage, hotelName, bookingId, roomType, rewardPoints, checkOutDate, checkInDate, phone, email, price }) => {
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
          <span className="siDistance">Booking Id: {bookingId}</span>
          <span className="siDistance">{roomType}</span>
          <span className="siTaxiOp">Reward points: {rewardPoints}</span>
          <span className="siSubtitle">
            Check-in-date: {checkInDate}, Check-out-date: {checkOutDate}
          </span>
          <span className="siFeatures">
          Contact: {phone}
          </span>
          <span className="siFeatures">
          Email: {email}
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">${price}</span>
            <span className="siTaxOp">Total booking amount</span>
            <button className="siCheckButton" onClick={() => openEditModal()}>Edit booking</button>
            <button className="siCheckButton" onClick={() => openDeleteModal()}>Cancel booking</button>
          </div>
        </div>
      </div>
      <ConfirmDeleteCard open={isOpen && deleteModalOpen} onClose={closeModal} onConfirm={deleteBooking} />
    </>
  );
};

export default BookingItem;
