import React from "react";
import { useBooking } from "../context/bookingSlotsContext";
import BookingSlot from "./BookingSlot";

const BookingList = ({ selectedDate }) => {
  const { bookingSlots } = useBooking();

  // Get slots for the selected date
  const slotsForDate = bookingSlots[selectedDate] || [];

  return (
    <div className="booking-list">
      <h2>Available Booking Slots for {selectedDate}</h2>
      <ul>
        {slotsForDate.map((slot) => (
          <BookingSlot
            key={slot.time}
            time={slot.time}
            isBooked={slot.isBooked}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
