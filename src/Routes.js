import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Login from "./Auth/login";
import Registration from "./Auth/registration";
import { AuthProvider } from "./Auth/authContext";
import ProtectedRoute from "./Auth/protectedRoute";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </AuthProvider>
  );
}

export default Router;