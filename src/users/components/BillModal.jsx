import React from "react";
import { Modal, Button, ListGroup, Container, Row, Col } from "react-bootstrap";

const BillModal = ({ table, close }) => {
    const billItems = [
        { name: "Item 1", price: 10 },
        { name: "Item 2", price: 15 },
        { name: "Item 3", price: 20 },
    ];

    const total = billItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <Modal show centered onHide={close} backdrop={false}>

            <Modal.Header closeButton>
                <Modal.Title>Bill Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Col>
                            <h5>Table Number: {table}</h5>
                        </Col>
                    </Row>
                    <ListGroup>
                        {billItems.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between">
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Row className="mt-3">
                        <Col className="text-end">
                            <h5>Total: <strong>${total}</strong></h5>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => alert("Bill confirmed!")}>Confirm</Button>
                <Button variant="secondary" onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BillModal;
