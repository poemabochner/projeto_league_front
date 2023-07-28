import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import ListaCampeoes from "./pages/ListaCampeoes";

import { useAuth } from "./contexts/auth";

const AppRoutes = () => {
  const { AuthProvider } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<ListaCampeoes />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
