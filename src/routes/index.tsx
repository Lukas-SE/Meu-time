import { Routes, Route } from "react-router-dom";
import AppRoutes from "./App.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../contexts/auth";

export default function TeamRoutes() {
  const { signed} = useAuth();

  return (
    <Routes>
      <Route path="/*" element={signed ? <AppRoutes /> : <AuthRoutes />} />
    </Routes>
  );
}
