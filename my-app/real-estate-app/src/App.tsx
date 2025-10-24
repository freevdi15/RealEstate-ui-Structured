import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PropertyProvider } from "./contexts/PropertyContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => (
  <AuthProvider>
    <PropertyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          // Add other routes here as needed
        </Routes>
      </Router>
    </PropertyProvider>
  </AuthProvider>
);

export default App;
