import { Link } from "react-router-dom";
import "../index.css";
import { StyleStarshipList } from "../styles/styled";
import React, { useContext } from "react";
import { StarsContext } from "../context/contextStarship";
import { Header } from "./header";

// Definiendo el componente ShipList
export function ShipList() {
  // Obteniendo la lista de naves espaciales del contexto StarsContext
  const ships = useContext(StarsContext);

  // Retornando el JSX del componente
  return (
    <>
      <Header />
      {/* Iterando sobre la lista de naves espaciales */}
      {ships.map(({ name, model }) => (
        // Creando un componente Link para cada nave espacial
        <Link key={name} to={"/ShipCard/" + name}>
          {/* Creando un componente FrameStarShips para cada nave espacial */}
          <StyleStarshipList key={name}>
            {/* Mostrando el nombre de la nave espacial en mayúsculas */}
            <p className="starshipName">{name.toUpperCase()}</p>
            {/* Mostrando el modelo de la nave espacial */}
            <p className="starshipModel">{model}</p>
          </StyleStarshipList>
        </Link>
      ))}
    </>
  );
}
