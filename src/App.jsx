import React, { useContext } from "react";
import Header from "./components/header";
import { StarsContext } from "./context/contextStarship";
import { FrameStarShips } from "./styles/styled";

function App() {
  // Obtener la lista de naves espaciales desde el contexto
  const starships = useContext(StarsContext);

  // Renderizar el componente
  return (
    <div>
      <Header/>
      {/* Recorrer la lista de naves y mostrar sus nombres y modelos */}
      {starships.map((starship) => (
        <FrameStarShips key={starship.name}>
          <div>
            {/* Mostrar el nombre de la nave en mayúsculas */}
            <p className="starshipName" style={{ marginTop: "15px" }}>
              {starship.name.toUpperCase()}
            </p>
            {/* Mostrar el modelo de la nave */}
            <p
              className="starshipModel"
              style={{ marginTop: "-15px", marginLeft: "0px" }}
            >
              {starship.model}
            </p>
          </div>
        </FrameStarShips>
      ))}
    </div>
  );
}

export default App;
