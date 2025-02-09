import React from "react";
import normalTable from "../../assets/img/normal-table.png.jpg";
import snookerTable from "../../assets/img/snooker-table.png";
import regularTable from "../../assets/img/regular-table.png";

const tableImages = {
    normal: normalTable,
    snooker: snookerTable,
    regular: regularTable,
};

const TableGrid = ({ type, openBooking, openDrinkModal, openBillModal }) => {
    return (
        <div className="grid">
            {[1, 2, 3].map((table) => (
                <div key={table} className="card">
                    <img src={tableImages[type]} alt={`Table ${table}`} />
                    <p>Table {table}</p>
                    <button onClick={() => openBooking(table)}>Book</button>
                    <button onClick={() => openDrinkModal(table)}>Menu</button>
                    <button onClick={() => openBillModal(table)}>Bill</button>
                </div>
            ))}
        </div>
    );
};

export default TableGrid;
