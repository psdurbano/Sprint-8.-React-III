import { createContext, useState, useEffect } from "react";
import App from "../App";

// Creamos el contexto de las StarShips
export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  // Estado para guardar las StarShips
  const [starShips, setStarShips] = useState([]);

  // UseEffect para obtener los datos de la API al cargar la página
  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((data) => {
        // Guardamos las StarShips en el estado
        setStarShips(data.results);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  // Renderizamos el componente App dentro del contexto de las StarShips
  return (
    <StarsContext.Provider value={starShips}>
      <App />
    </StarsContext.Provider>
  );
};