import React, { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import BackToTop from "./components/backToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SaleRevenue from "./components/Widgets/SaleRevenue";

const OrdersPage = () => {
    const [orders, setOrders] = useState([
        { id: 1, orderNum: "3214321", orderTime: "12/2/2025 10-22", totalPrice: "10$", drinks: "Coke, Water", hours: 2 },
        { id: 2, orderNum: "1234323", orderTime: "12/2/2025 10-22", totalPrice: "20$", drinks: "Coffee, Tea", hours: 3 },
        { id: 3, orderNum: "1243215", orderTime: "12/2/2025 10-22", totalPrice: "15$", drinks: "Juice, Soda", hours: 1 }
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const modalRef = useRef(null);

    const openDetailsModal = (order) => {
        setSelectedOrder(order);
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
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
                    <div className="container-fluid pt-4 px-4">
                        <SaleRevenue />
                        <br />
                        <div className="bg-light rounded h-100 p-4">
                            <h6>Orders Table</h6>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Num</th>
                                        <th>Order Time</th>
                                        <th>Total Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <th>{order.id}</th>
                                            <td>{order.orderNum}</td>
                                            <td>{order.orderTime}</td>
                                            <td>{order.totalPrice}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => openDetailsModal(order)}>View Details</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal for Order Details */}
                    <div className="modal fade" ref={modalRef} id="orderDetailsModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="false">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Order Details</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {selectedOrder && (
                                        <>
                                            <p className="text-secondary text-start"><strong>Order Number:</strong> {selectedOrder.orderNum}</p>
                                            <p className="text-secondary text-start"><strong>Order Time:</strong> {selectedOrder.orderTime}</p>
                                            <p className="text-secondary text-start"><strong>Drinks:</strong> {selectedOrder.drinks}</p>
                                            <p className="text-secondary text-start"><strong>Hours:</strong> {selectedOrder.hours} hours</p>
                                            <p className="text-secondary text-start"><strong>Total Price:</strong> {selectedOrder.totalPrice}</p>
                                        </>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrdersPage;
