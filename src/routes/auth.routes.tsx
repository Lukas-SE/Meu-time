import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
