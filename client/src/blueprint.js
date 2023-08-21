import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/header";

function BluePrint() {
  return (
    <main className="max-w-5xl p-3 my-0 mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default BluePrint;
