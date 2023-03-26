import { createContext, useState, useEffect } from "react";
import App from "../App";

// Creamos el contexto de las StarShips
export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  // Función para obtener los datos de la API
  const fetchFunction = () => {
    return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
  };

  // Estado para guardar las StarShips
  const [starShips, setStarShips] = useState([]);

  // UseEffect para obtener los datos de la API al cargar la página
  useEffect(() => {
    fetchFunction()
      .then((res) => {
        // Guardamos las StarShips en el estado
        setStarShips(res.results);
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
