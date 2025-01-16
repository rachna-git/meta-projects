import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";
const navList = [
  { navName: "Home", navURL: "/" },
  { navName: "About", navURL: "/about" },
  { navName: "Menu", navURL: "/menu" },
  { navName: "Reservations", navURL: "/reservations" },
  { navName: "Order Online", navURL: "/order-online" },
  { navName: "Login", navURL: "/login" },
];

function App() {
  return (
    <>
      <Header navList={navList}></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/table-booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
