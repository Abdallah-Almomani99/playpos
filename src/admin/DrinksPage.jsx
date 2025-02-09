import React, { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import BackToTop from "./components/backToTop";
import Cola from "../assets/img/cola.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DrinksPage = () => {
    const [drinks, setDrinks] = useState([
        { name: "Cola", price: 1, photo: Cola }
    ]);

    const [drinkName, setDrinkName] = useState("");
    const [drinkPrice, setDrinkPrice] = useState("");
    const [drinkPhoto, setDrinkPhoto] = useState(null);

    const modalRef = useRef(null);

    const addNewDrink = () => {
        setDrinkName("");
        setDrinkPrice("");
        setDrinkPhoto(null);
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
    };

    const saveDrink = () => {
        if (drinkName && drinkPrice && drinkPhoto) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setDrinks([...drinks, { name: drinkName, price: drinkPrice, photo: e.target.result }]);
                const modal = bootstrap.Modal.getInstance(modalRef.current);
                modal.hide();
            };
            reader.readAsDataURL(drinkPhoto);
        }
    };

    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <Sidebar />

            <div className="content">
                <Navbar />
                <>
                    <div className="container py-4">
                        <h1 className="text-center mb-4">Billiards POS System</h1>

                        <div className="container my-4">
                            <h3 className="text-center">Manage Drinks</h3>
                            <div className="row" id="drinks-container">
                                {drinks.map((drink, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="table-box position-relative">
                                            <img
                                                src={drink.photo}
                                                alt="Drink"
                                                style={{ width: 100, height: 100, borderRadius: 10 }}
                                            />
                                            <div className="mt-2 text-center">
                                                <h5>{drink.name}</h5>
                                                <p>${drink.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="table-box add-table" onClick={addNewDrink}>
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
                                        <h5 className="modal-title">Add/Edit Drink</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Drink Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={drinkName}
                                                    onChange={(e) => setDrinkName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={drinkPrice}
                                                    onChange={(e) => setDrinkPrice(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Photo</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept="image/*"
                                                    onChange={(e) => setDrinkPhoto(e.target.files[0])}
                                                    required
                                                />
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
                </>
            </div>

            <BackToTop />
        </div>
    );
};

export default DrinksPage;
