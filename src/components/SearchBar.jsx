import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={() => onChange("")} aria-label="Clear search">Clear</button>
    </div>
  );
}
