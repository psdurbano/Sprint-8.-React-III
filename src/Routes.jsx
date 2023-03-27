import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { InfoShip } from "./components/InfoShip";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/ShipCard/:shipName" element={<InfoShip />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
