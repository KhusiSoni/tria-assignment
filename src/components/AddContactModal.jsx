import React, { useState } from "react";

export default function AddContactModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return alert("Please provide a name.");
    onAdd({ name: name.trim(), email: email.trim(), phone: phone.trim() });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Add contact</h3>
        <form onSubmit={submit}>
          <label>
            Name
            <input value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Email
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Phone
            <input value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" className="primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
