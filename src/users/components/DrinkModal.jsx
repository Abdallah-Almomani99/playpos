import React, { useState } from "react";
import "../../assets/css/drinks.css";
import cola from "../../assets/img/cola.png";

const drinks = [
    { name: "Coke", price: "1$", image: cola },
    { name: "Pepsi", price: "1$", image: cola },
    { name: "Sprite", price: "1$", image: cola },
    { name: "Fanta", price: "1$", image: cola },
];

const DrinkModal = ({ table, close }) => {
    const [selectedDrinks, setSelectedDrinks] = useState({});

    // Change drink quantity (increments or decrements)
    const changeQuantity = (drink, change) => {
        setSelectedDrinks((prev) => {
            const currentCount = prev[drink] || 0;
            const newCount = Math.max(1, currentCount + change); // Ensure minimum is 1
            return { ...prev, [drink]: newCount };
        });
    };

    // Add drink to order
    const addToOrder = (drink) => {
        const quantity = selectedDrinks[drink] || 1;
        alert(`${quantity} ${drink}(s) added to order!`);
    };

    // Confirm order
    const confirmOrder = () => {
        if (Object.keys(selectedDrinks).length === 0) {
            alert("No drinks selected!");
            return;
        }
        console.log("Order confirmed:", selectedDrinks);
        alert("Order confirmed! Check the console for details.");
        close();
    };

    return (
        <div className="modal show-modal">
            <div className="modal-content">
                <h2>Drinks Menu</h2>
                <div className="drinks-container">
                    {drinks.map((drink) => (
                        <div key={drink.name} className="drink-card">
                            <img src={drink.image} alt={drink.name} />
                            <h3>{drink.name}</h3>
                            <p className="mx-3 my-0">{drink.price}</p>
                            <div className="quantity-container">
                                <button
                                    className="qty-btn"
                                    onClick={() => changeQuantity(drink.name, -1)}
                                >
                                    -
                                </button>
                                <input
                                    className="m-0"
                                    type="number"
                                    value={selectedDrinks[drink.name] || 0}
                                    readOnly
                                />
                                <button
                                    className="qty-btn"
                                    onClick={() => changeQuantity(drink.name, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button onClick={() => addToOrder(drink.name)} className="add-btn m-2">
                                Add
                            </button>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={confirmOrder} className="confirm-btn">Confirm Order</button>
                    <button onClick={close} className="close-btn">Close</button>
                </div>
            </div>
        </div>
    );
};

export default DrinkModal;
