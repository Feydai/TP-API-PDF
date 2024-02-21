import React from "react";
import "./HeaderSecond.css";
import { useNavigate } from "react-router-dom";

function HeaderSecond({ text }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
    console.log("navigate");
  }

  return (
    <nav className="navbar-second">
      <h1 className="title-name" onClick={handleClick}>
        CVBuilder
      </h1>
      <h1 className="title-text">{text}</h1>
    </nav>
  );
}

export default HeaderSecond;