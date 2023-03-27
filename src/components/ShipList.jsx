import { Link } from "react-router-dom";
import "../index.css";
import { FrameStarShips } from "../styles/styled";
import logo from "../assets/logo.webp";
import React, { useState, useContext, useEffect } from "react";
import { StarsContext } from "../context/contextStarship";
import { ShipCard } from "../components/ShipCard";

export function ShipList() {
  const Ship = useContext(StarsContext);

  const [currentShip, setCurrentShip] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setShowInfo(!showInfo);
  }, [currentShip]);

  const saveName = (shipName) => {
    setCurrentShip(shipName);
  };

  return (
    <>
      {Ship.map((ship) => (
        <Link to={"/ShipCard/" + ship.name}>
          <FrameStarShips key={ship.name} onClick={() => saveName(ship.name)}>
            <p className="starshipName"> {ship.name.toUpperCase()} </p>
            <p className="starshipModel"> {ship.model} </p>
          </FrameStarShips>
        </Link>
      ))}
    </>
  );
}
