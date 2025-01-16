import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Initialize booking slots for multiple dates
  const [bookingSlots, setBookingSlots] = useState({
    "2025-01-01": [
      { time: "17:00", isBooked: false },
      { time: "18:00", isBooked: false },
      { time: "19:00", isBooked: false },
      { time: "20:00", isBooked: false },
      { time: "21:00", isBooked: false },
      { time: "22:00", isBooked: false },
    ],
    "2025-01-02": [
      { time: "17:00", isBooked: false },
      { time: "18:00", isBooked: false },
      { time: "19:00", isBooked: false },
      { time: "20:00", isBooked: false },
      { time: "21:00", isBooked: false },
      { time: "22:00", isBooked: false },
    ],
  });

  // Function to book a slot for a specific date
  const bookSlot = (date, time) => {
    setBookingSlots((prevSlots) => ({
      ...prevSlots,
      [date]: prevSlots[date].map((slot) =>
        slot.time === time ? { ...slot, isBooked: true } : slot
      ),
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingSlots, bookSlot }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
