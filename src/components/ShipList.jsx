import { Link } from "react-router-dom";
import "../index.css";
import { FrameStarShips } from "../styles/styled";
import React, { useContext } from "react";
import { StarsContext } from "../context/contextStarship";

// Definiendo el componente ShipList
export function ShipList() {
  // Obteniendo la lista de naves espaciales del contexto StarsContext
  const ships = useContext(StarsContext);

  // Retornando el JSX del componente
  return (
    <>
      {/* Iterando sobre la lista de naves espaciales */}
      {ships.map(({ name, model }) => (
        // Creando un componente Link para cada nave espacial
        <Link key={name} to={"/ShipCard/" + name}>
          {/* Creando un componente FrameStarShips para cada nave espacial */}
          <FrameStarShips key={name}>
            {/* Mostrando el nombre de la nave espacial en mayúsculas */}
            <p className="starshipName">{name.toUpperCase()}</p>
            {/* Mostrando el modelo de la nave espacial */}
            <p className="starshipModel">{model}</p>
          </FrameStarShips>
        </Link>
      ))}
    </>
  );
}
