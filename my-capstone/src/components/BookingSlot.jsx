import React from "react";
import "./BookingSlot.css";

const BookingSlot = ({ time, isBooked }) => {
  return (
    <li className={`booking-slot ${isBooked ? "booked" : "available"}`}>
      {time} - {isBooked ? "Booked" : "Available"}
    </li>
  );
};

export default BookingSlot;
