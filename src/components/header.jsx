import React from "react";
import logo from "../assets/logo.webp";
import "../index.css";

export const Header = () => {
  return (
    <>
      <img className="logo" src={logo} alt="Logo de Star Wars" />
      <p className="login">LOG IN // SIGN UP</p>
      <div className="line">
        <p className="nav">HOME </p>
        <p className="nav">STARSHIP</p>
      </div>
    </>
  );
};
