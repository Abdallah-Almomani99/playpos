import React, { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import BackToTop from "./components/backToTop";
import Cola from "../assets/img/cola.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DrinksPage = () => {
    const [drinks, setDrinks] = useState([
        { name: "Cola", price: 1, Qty: 20, photo: Cola }
    ]);

    const [drinkName, setDrinkName] = useState("");
    const [drinkPrice, setDrinkPrice] = useState("");
    const [drinkQty, setDrinkQty] = useState("");
    const [drinkPhoto, setDrinkPhoto] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const modalRef = useRef(null);

    const openModal = (index = null) => {
        if (index !== null) {
            const drink = drinks[index];
            setDrinkName(drink.name);
            setDrinkPrice(drink.price);
            setDrinkQty(drink.Qty);
            setDrinkPhoto(drink.photo);
            setEditingIndex(index);
        } else {
            setDrinkName("");
            setDrinkPrice("");
            setDrinkQty("");
            setDrinkPhoto(null);
            setEditingIndex(null);
        }
        new bootstrap.Modal(modalRef.current).show();
    };

    const saveDrink = () => {
        if (drinkName && drinkPrice && drinkPhoto) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const updatedDrinks = [...drinks];
                if (editingIndex !== null) {
                    updatedDrinks[editingIndex] = { name: drinkName, price: drinkPrice, Qty: drinkQty, photo: e.target.result };
                } else {
                    updatedDrinks.push({ name: drinkName, price: drinkPrice, Qty: drinkQty, photo: e.target.result });
                }
                setDrinks(updatedDrinks);
                bootstrap.Modal.getInstance(modalRef.current).hide();
            };
            reader.readAsDataURL(drinkPhoto);
        }
    };

    const deleteDrink = (index) => {
        setDrinks(drinks.filter((_, i) => i !== index));
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

                        <h3 className="text-center">Manage Drinks</h3>
                        <div className="container my-4">
                            <div className="row" id="drinks-container">
                                {drinks.map((drink, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="table-box position-relative" onClick={() => openModal(index)}>
                                            <button className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle" onClick={(e) => { e.stopPropagation(); deleteDrink(index); }}>
                                                <i className="fa fa-times" />
                                            </button>
                                            <img src={drink.photo} alt="Drink" style={{ width: 100, height: 100, borderRadius: 10 }} />
                                            <div className="mt-2 text-center">
                                                <h5>{drink.name}</h5>
                                                <p>${drink.price}</p>
                                                <p>{drink.Qty}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="table-box add-table" onClick={() => openModal()}>
                                        <div className="text-center">
                                            <h3>+</h3>
                                            <p>Add Drink</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" ref={modalRef} id="drinkModal" tabIndex={-1} aria-labelledby="drinkModalLabel" aria-hidden="true" data-bs-backdrop="false">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{editingIndex !== null ? "Edit Drink" : "Add Drink"}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Drink Name</label>
                                                <input type="text" className="form-control" value={drinkName} onChange={(e) => setDrinkName(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Price</label>
                                                <input type="number" className="form-control" value={drinkPrice} onChange={(e) => setDrinkPrice(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Qty</label>
                                                <input type="number" className="form-control" value={drinkQty} onChange={(e) => setDrinkQty(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Photo</label>
                                                <input type="file" className="form-control" accept="image/*" onChange={(e) => setDrinkPhoto(e.target.files[0])} required />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={saveDrink}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinksPage;
