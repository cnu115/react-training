import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Login from "./Auth/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;