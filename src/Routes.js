import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Login from "./Auth/login";
import Registration from "./Auth/registration";
import { AuthProvider } from "./Auth/authContext";
import ProtectedRoute from "./Auth/protectedRoute";
import Products from "./Components/Products";
import ProductView from "./Components/Products/view";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Products />
        </ProtectedRoute>} />
        <Route path="/product-view/:id" element={<ProtectedRoute>
          <ProductView />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </AuthProvider>
  );
}

export default Router;