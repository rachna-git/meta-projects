import { useBooking } from "../context/bookingSlotsContext";
import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";

const initializeTimes = () => {
  // Initial state for available times (could also come from an API)
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      // This can be updated to generate dynamic times based on action.payload (selected date)
      return initializeTimes();
    default:
      return state;
  }
};

const BookingPage = () => {
  const { bookSlot } = useBooking();
  const [selectedDate, setSelectedDate] = useState("2025-01-01");

  // Handle form submission
  const handleFormSubmit = (reservationDetails) => {
    const { date, time } = reservationDetails;
    bookSlot(date, time); // Book the slot for the selected date
    alert(`Reservation confirmed for ${date} at ${time}!`);
  };

  return (
    <div className="reservation-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        onSubmit={handleFormSubmit}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <BookingList selectedDate={selectedDate} />
    </div>
  );
};

export default BookingPage;
