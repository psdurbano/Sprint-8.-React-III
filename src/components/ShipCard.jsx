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
          <div className="text-wrap">
            <p>Model:</p> <p className="p-info"> {currentShip.model}</p>
          </div>

          <div className="text-wrap">
            <p>Starship class:</p>{" "}
            <p className="p-info"> {currentShip.starship_class}</p>
          </div>
          <div className="text-wrap">
            <p>Manufacturer:</p>{" "}
            <p className="p-info"> {currentShip.manufacturer}</p>
          </div>
          <div className="text-wrap">
            <p>cost:</p>{" "}
            <p className="p-info"> {currentShip.cost || "Unknown"}</p>
          </div>
          <div className="text-wrap">
            <p>Crew:</p> <p className="p-info"> {currentShip.crew}</p>
          </div>
          <div className="text-wrap">
            <p>Passengers:</p>{" "}
            <p className="p-info"> {currentShip.passengers}</p>
          </div>
          <div className="text-wrap">
            <p>Cargo capacity:</p>{" "}
            <p className="p-info"> {currentShip.cargo_capacity}</p>
          </div>

          <div className="text-wrap">
            <p>Consumables:</p>{" "}
            <p className="p-info"> {currentShip.consumables}</p>
          </div>
          <div className="text-wrap">
            <p>Length:</p> <p className="p-info"> {currentShip.length}</p>
          </div>
          <div className="text-wrap">
            <p>Maximum atmosphering speed:</p>{" "}
            <p className="p-info"> {currentShip.max_atmosphering_speed}</p>
          </div>
          <div className="text-wrap">
            <p>Hyperdrive rating:</p>{" "}
            <p className="p-info"> {currentShip.hyperdrive_rating}</p>
          </div>
          <div className="text-wrap">
            <p>Maximum speed in real space:</p>{" "}
            <p className="p-info"> {currentShip.MGLT + "MGLT"}</p>
          </div>
        </StyledText>
      </FrameStarShips>
    </>
  );
};
