import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

