import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h2 className="contact-detail-header">Contact Information</h2>
            <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-item">
                        <strong>Name:</strong> Syed Danyal Raza
                    </div>
                    <div className="contact-item">
                        <strong>Email:</strong> danyalboy145@gmail.com
                    </div>
                    <div className="contact-item">
                        <strong>Phone:</strong> +92 317-7212605
                    </div>
                    <div className="contact-item">
                        <strong>Address:</strong> Islamabad, Pakistan.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;