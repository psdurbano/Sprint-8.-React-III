import { createContext, useState, useEffect } from "react";
import App from "../App";

// Creamos el contexto de las StarShips
export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  // Estado para guardar las StarShips
  const [Ships, setShips] = useState([]);
  // Estado para guardar la página actual
  const [page, setPage] = useState(1);

// UseEffect para obtener los datos de la API al cargar la página
useEffect(() => {
  fetch(`https://swapi.dev/api/starships/?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      // Guardamos las StarShips en el estado
      setShips((prevShips) => [...prevShips, ...data.results]);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}, [page]);

// UseEffect para agregar el evento de scroll
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Función para cargar más datos cuando se llega al final de la página
const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    setPage((prevPage) => prevPage < 4 ? prevPage + 1: prevPage);
  }
};

  // Renderizamos el componente App dentro del contexto de las StarShips
  return (
    <StarsContext.Provider value={Ships}>
      <App />
    </StarsContext.Provider>
  );
};
