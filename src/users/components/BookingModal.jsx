import React, { useState } from "react";

const BookingModal = ({ table, close }) => {
    const [hours, setHours] = useState("");

    const confirmBooking = () => {
        if (!hours || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }
        alert(`Table ${table} booked for ${hours} hours.`);
        close();
    };
    return (
        <div className="modal show-modal">
            <div className="modal-content">
                <h2>Enter Booking Time (in hours)</h2>
                <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="Enter hours (e.g., 1, 2, 3)"
                />
                <div className="d-flex justify-content-center">
                    <button className="confirm-btn" onClick={confirmBooking}>Confirm</button>
                    <button className="close-btn" onClick={close}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
