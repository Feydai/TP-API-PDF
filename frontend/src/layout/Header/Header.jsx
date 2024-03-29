import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
    console.log("navigate");
  }

  return (
    <nav className="navbar">
      <h1 onClick={handleClick}>CVBuilder</h1>
    </nav>
  );
}

export default Header;
