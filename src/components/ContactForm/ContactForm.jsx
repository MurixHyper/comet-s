import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () =>{
    const myFormRef=useRef(null);
    return(
        <Form className="form">
            <h2 className="form-header">Contact Us:</h2>
            <div className="main-form">
                <div className="left-part">
                    <Form.Group controlId="formName" className="group">
                        <Form.Label className="group-text">Name</Form.Label>
                        <Form.Control className="group-input" type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="group">
                        <Form.Label className="group-text">Email</Form.Label>
                        <Form.Control className="group-input" type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="group">
                        <Form.Label className="group-text">Phone</Form.Label>
                        <Form.Control className="group-input" type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                </div>
                <div className="right-part">
                    <Form.Group controlId="formMessage" className="group group-message">
                        <Form.Label className="group-text">Your Message</Form.Label>
                        <Form.Control className="group-input message" as="textarea" placeholder="Enter your message" />
                    </Form.Group>
                    <div className="text-right">
                        <Button className="form-button" variant="primary" type="submit">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default ContactForm;