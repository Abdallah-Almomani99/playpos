import React, { useState } from "react";
import Tabs from "./users/components/Tabs";
import TableGrid from "./users/components/TableGrid";
import BookingModal from "./users/components/BookingModal";
import DrinkModal from "./users/components/DrinkModal";
import BillModal from "./users/components/BillModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/user.css"; // Ensure you import necessary styles

const App = () => {
  const [activeTab, setActiveTab] = useState("normal");
  const [bookingTable, setBookingTable] = useState(null);
  const [drinkTable, setDrinkTable] = useState(null);
  const [billTable, setBillTable] = useState(null);

  const openBooking = (table) => {
    // console.log("Booking modal opened for table:", table);
    setBookingTable(table);
  };
  const closeBooking = () => {
    // console.log("Closing Booking modal");
    setBookingTable(null);
  };

  const openDrinkModal = (table) => {
    console.log("Drink modal opened for table:", table);
    setDrinkTable(table);
  };
  const closeDrinkModal = () => {
    // console.log("Closing Drink modal");
    setDrinkTable(null);
  };

  const openBillModal = (table) => {
    console.log("Bill modal opened for table:", table);
    setBillTable(table);
  };
  const closeBillModal = () => {
    // console.log("Closing Bill modal");
    setBillTable(null);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <a href="signin.html" className="btn btn-primary">
          Log out
        </a>
      </div>
      <h1>Billiardo POS</h1>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TableGrid
        type={activeTab}
        openBooking={openBooking}
        openDrinkModal={openDrinkModal}
        openBillModal={openBillModal}
      />

      {bookingTable && <BookingModal table={bookingTable} close={closeBooking} />}
      {drinkTable && <DrinkModal table={drinkTable} close={closeDrinkModal} />}
      {billTable && <BillModal table={billTable} close={closeBillModal} />}
    </div>
  );
};

export default App;
