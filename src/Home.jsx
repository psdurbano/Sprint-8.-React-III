import React from "react";
import { Header } from "../src/components/header";
import welcome from "../src/assets/welcome.jpg";
import "./index.css";

export function Home() {
  return (
    <>
      <Header />
      <div className="welcome-section">
        <img src={welcome} alt="Star Wars" className="star-wars-image" />
        <h1 className="welcome-text">¡Bienvenid@s!</h1>
      </div>
    </>
  );
}
