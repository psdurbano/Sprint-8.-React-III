import React from "react";
import { ShipList } from "../src/components/ShipList";
import { Header } from "../src/components/header";
import "./index.css";

export function Home() {
  return (
    <>
      <Header />
      <ShipList />
    </>
  );
}
