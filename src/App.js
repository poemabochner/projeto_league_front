import "./App.css";
import "./global.css";
import "./reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ListaCampeoes from "./pages/ListaCampeoes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lista" element={<ListaCampeoes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
