import ReactDOM from "react-dom/client";
import App from "./App";
import { StarsContextProvider } from "./context/contextStarship";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StarsContextProvider>
    <App />
  </StarsContextProvider>
);
