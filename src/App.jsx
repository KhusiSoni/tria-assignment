import React, { useEffect, useState } from "react";
import './App.css';
import { initialContacts } from "./data/contacts";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/AddContactModal";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setContacts(initialContacts);
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  function addContact(newContact) {
    const id = contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    setContacts(prev => [...prev, { id, ...newContact }]);
    setShowAdd(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="heading-attractive">Contact List</h1>
        <button
          className="primary"
          onClick={() => setShowAdd(true)}
        >
          + Add Contact
        </button>
      </header>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search by name..."
        onClear={() => setQuery("")}
      />

      {loading ? (
        <div className="loading">Loading contacts…</div>
      ) : (
        <ContactList contacts={filtered} />
      )}

      {showAdd && (
        <AddContactModal
          onAdd={addContact}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
