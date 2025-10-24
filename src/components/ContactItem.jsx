import React from "react";

export default function ContactItem({ contact }) {
  return (
    <li className="contact-item">
      <div className="card-center">
        <div className="contact-name">{contact.name}</div>
        <div className="contact-phone">{contact.phone}</div>
        <div className="contact-email">{contact.email}</div>
      </div>
    </li>
  );
}


