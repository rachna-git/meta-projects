const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Example: Generate dynamic times based on the selected date
      const selectedDate = action.payload;

      // Placeholder logic for dynamic time generation
      if (selectedDate === "2025-01-01") {
        return ["17:00", "18:00", "19:00", "20:00"];
      } else if (selectedDate === "2025-01-02") {
        return ["19:00", "20:00", "21:00", "22:00"];
      }

      // Default times for other dates
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};
