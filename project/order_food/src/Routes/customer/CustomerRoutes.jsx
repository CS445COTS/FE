import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../components/home/Home";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

export default function CustomerRoutes() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
