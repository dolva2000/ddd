import React from "react";

import Header from "./components/header";
import Fotter from "./components/fotter";

export default function index({ children }) {
  return (
    <>
      <Header />
      {children}
      <Fotter />
    </>
  );
}
