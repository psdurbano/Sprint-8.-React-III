import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { InfoShip } from "./components/InfoShip";
import { ShipList } from "./components/ShipList";
import LoginForm from "./pages/LoginForm";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/ShipList" element={<ShipList />} />
      <Route path="/ShipCard/:shipName" element={<InfoShip />} />
      <Route path="/LoginForm" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
