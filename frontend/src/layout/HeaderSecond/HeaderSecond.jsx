import React from "react";
import "./HeaderSecond.css";
import { useNavigate } from "react-router-dom";

function HeaderSecond() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
    console.log("navigate");
  }

  return (
    <nav className="navbar-second">
      <h1 onClick={handleClick}>CVBuilder</h1>
    </nav>
  );
}

export default HeaderSecond;
