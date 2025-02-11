import React, { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import BackToTop from "./components/backToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Table = () => {
    const [tables, setTables] = useState([
        { number: 1, type: "Snooker", price: 10 }
    ]);
    const [tableNumber, setTableNumber] = useState("");
    const [tableType, setTableType] = useState("Snooker");
    const [tablePrice, setTablePrice] = useState("");
    const [editingTableIndex, setEditingTableIndex] = useState(null);

    const modalRef = useRef(null);

    const addNewTable = () => {
        setTableNumber("");
        setTableType("Snooker");
        setTablePrice("");
        setEditingTableIndex(null);
        new bootstrap.Modal(modalRef.current).show();
    };

    const editTable = (index) => {
        const table = tables[index];
        setTableNumber(table.number);
        setTableType(table.type);
        setTablePrice(table.price);
        setEditingTableIndex(index);
        new bootstrap.Modal(modalRef.current).show();
    };

    const saveTable = () => {
        if (!tableNumber || !tablePrice) return;
        const updatedTables = [...tables];
        if (editingTableIndex !== null) {
            updatedTables[editingTableIndex] = { number: tableNumber, type: tableType, price: tablePrice };
        } else {
            updatedTables.push({ number: tableNumber, type: tableType, price: tablePrice });
        }
        setTables(updatedTables);
        bootstrap.Modal.getInstance(modalRef.current).hide();
    };

    const deleteTable = (index) => {
        setTables(tables.filter((_, i) => i !== index));
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState([false]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className={`content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
                    <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <div className="container py-4">
                        {/* <h1 className="text-center mb-4">Billiards POS System</h1> */}
                        <h3 className="text-center">Manage Tables</h3>
                        <div className="container my-4">
                            <div className="row g-3 " id="tables-container">
                                {tables.map((table, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="table-box position-relative" onClick={() => editTable(index)}>
                                            <div>
                                                <h5>Table {table.number}</h5>
                                                <p>Type: {table.type}</p>
                                                <p>Price: ${table.price}/hour</p>
                                            </div>
                                            <button className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle" onClick={(e) => { e.stopPropagation(); deleteTable(index); }}>
                                                <i className="fa fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="table-box add-table" onClick={addNewTable}>
                                        <div className="text-center">
                                            <h3>+</h3>
                                            <p>Add Table</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" ref={modalRef} id="tableModal" tabIndex={-1} aria-labelledby="tableModalLabel" aria-hidden="true" data-bs-backdrop="false">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{editingTableIndex !== null ? "Edit Table" : "Add New Table"}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Table Number</label>
                                            <input type="number" className="form-control" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Type</label>
                                            <select className="form-select" value={tableType} onChange={(e) => setTableType(e.target.value)} required>
                                                <option value="Snooker">Snooker Table</option>
                                                <option value="Billiard">Billiard Table</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Price/hour</label>
                                            <input type="number" className="form-control" value={tablePrice} onChange={(e) => setTablePrice(e.target.value)} required />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={saveTable}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BackToTop /> */}
            </div>
        </div>
    );
};

export default Table;
