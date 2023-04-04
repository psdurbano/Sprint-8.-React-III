import React from "react";
import logo from "../assets/logo.webp";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import "../index.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com/starwars/" target="_blank">
              <img src={instagram} alt="Instagram Icon" />
            </a>
            <a href="https://www.youtube.com/user/starwars" target="_blank">
              <img src={youtube} alt="Youtube Icon" />
            </a>
          </div>
        </div>
        <div className="header-center">
          <img className="logo" src={logo} alt="Logo de Star Wars" />
        </div>
        <div className="header-right">
          <p className="register">
            <a href="#" className="register-link">
              LOG IN
            </a>{" "}
            //{" "}
            <a href="#" className="register-link">
              REGISTER
            </a>
          </p>
        </div>
      </div>
      <div className="line">
        <Link to="/">
          <p className="nav">HOME</p>
        </Link>
        <p className="nav">
          <Link to="/ShipList">STARSHIP</Link>
        </p>
      </div>
    </>
  );
};
