import React, { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import BackToTop from "./components/backToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const UsersPage = () => {
    const [users, setUsers] = useState([
        { id: 1, firstName: "John", lastName: "Doe", email: "john@email.com" },
        { id: 2, firstName: "Mark", lastName: "Otto", email: "mark@email.com" },
        { id: 3, firstName: "Jacob", lastName: "Thornton", email: "jacob@email.com" }
    ]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const modalRef = useRef(null);

    const openModal = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
    };

    const saveUser = () => {
        if (firstName && lastName && email) {
            setUsers([...users, { id: users.length + 1, firstName, lastName, email }]);
            const modal = bootstrap.Modal.getInstance(modalRef.current);
            modal.hide();
        }
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
                        <div className="bg-light rounded h-100 p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h6>Users Table</h6>
                                <button className="btn btn-primary" onClick={openModal}>Add User</button>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <th>{user.id}</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal for Adding Users */}
                    <div className="modal fade" ref={modalRef} id="userModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop="false">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add User</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={saveUser}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
