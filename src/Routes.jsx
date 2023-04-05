import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { InfoShip } from "./components/InfoShip";
import { ShipList } from "./components/ShipList";
import LoginForm from "./pages/LoginForm";
import Login from "./pages/Login";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ShipList" element={<ShipList />} />
      <Route path="/ShipCard/:shipName" element={<InfoShip />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
