import React from 'react';

import contactData from './contactData'; 

const ContactList = () => {
  return (
    <div className="contact-list">
      {contactData.map((contact, index) => (
        <div key={index} className="contact-item">
          <h3 className="contact-name">{contact.name}</h3>
          <p className="contact-phone">Phone: {contact.phone}</p>
          <p className="contact-email">Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
