import React, { createRef } from "react";
import logo  from "../assets/logo.webp";


export const Header = () => {
    return (
    <>
    <img className="logo" src={logo}/>
    <p>LOG IN // SIGN UP</p>
    <div>
        <p className="nav">HOME</p>
        <p className="nav">STARSHIP</p>
    </div>
    </>
  );
}