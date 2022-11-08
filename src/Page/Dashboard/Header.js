import React from "react";
import { Link } from "react-router-dom";

function Header({ setIsAdding, onLogout }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Employee Management Software</h1>
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button onClick={() => setIsAdding(true)} className="round-button">
            Add Button
          </button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button
            onClick={onLogout}
            style={{ background: "#f05656" }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
