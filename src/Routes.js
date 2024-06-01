import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Login from "./Auth/login";
import Registration from "./Auth/registration";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />}/>
    </Routes>
  );
}

export default Router;