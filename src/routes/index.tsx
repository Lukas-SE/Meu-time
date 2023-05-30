import { Routes, Route, useLocation } from "react-router-dom";
import AppRoutes from "./App.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../contexts/auth";

export default function TeamRoutes() {
  const location = useLocation()
  const { signed } = useAuth();

  return (
        <Routes location={location}>
          <Route path="/*" element={signed ? <AppRoutes /> : <AuthRoutes />} />
        </Routes>
  );
}
