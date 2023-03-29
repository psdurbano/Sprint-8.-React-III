import React, { useContext } from "react";
import {
  FrameStarShips,
  Titlestyled,
  StyledText,
  StyledImage,
} from "../styles/styled";
import { StarsContext } from "../context/contextStarship";
import { useParams } from "react-router-dom";
import defaultImage from "../assets/default-image.png";

export const ShipCard = () => {
  const Ships = useContext(StarsContext);

  const currentShipName = useParams().shipName;

  const currentShip = Ships.find((ship) => currentShipName === ship.name);
  const id = currentShip.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <>
      <FrameStarShips>
        <Titlestyled>{currentShip.name.toUpperCase()}</Titlestyled>

        <StyledImage
          src={image}
          alt="No se pudo mostrar la imagen de la nave"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />

        <StyledText>
          <p>Model: {currentShip.model}</p>
          <p>Starship class: {currentShip.starship_class}</p>
          <p>Manufacturer: {currentShip.manufacturer}</p>
          <p>cost: {currentShip.cost}</p>
          <p>Crew: {currentShip.crew}</p>
          <p>Passengers: {currentShip.passengers}</p>
          <p>Cargo capacity: {currentShip.cargo_capacity}</p>
          <p>Consumables: {currentShip.consumables}</p>
          <p>Length: {currentShip.length}</p>
          <p>
            Maximum atmosphering speed: {currentShip.max_atmosphering_speed}
          </p>
          <p>Hyperdrive rating: {currentShip.hyperdrive_rating}</p>
          <p>Maximum speed in real space: {currentShip.MGLT + "MGLT"}</p>
        </StyledText>
      </FrameStarShips>
    </>
  );
};
