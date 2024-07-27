import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Layouts/Home";
import Login from "./Auth/login";
import Registration from "./Auth/registration";
import { AuthProvider } from "./Auth/authContext";
import ProtectedRoute from "./Auth/protectedRoute";
import Products from "./Components/Products";
import ProductView from "./Components/Products/view";
import { CartProvider } from "./ContextApi/CartContext";
import Cart from "./Components/Products/cart";
import ReduxExample from "./Components/Products/reduxExample";

const Router = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <Products />
          </ProtectedRoute>} />
          <Route path="/product-view/:id" element={<ProtectedRoute>
            <ProductView />
          </ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/counter" element={<ReduxExample />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default Router;