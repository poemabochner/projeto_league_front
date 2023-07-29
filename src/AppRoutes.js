

import {
  BrowserRouter as Router,
  Route,
  Routes,
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
          <Route exact path="/" element={<Login />} />
          <Route exact path="/listacampeoes" element={<ListaCampeoes />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
