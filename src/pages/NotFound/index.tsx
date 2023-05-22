import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const autoredirect = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      autoredirect("/");
    }, 3000);
  }, []);
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <h1 className="font-spaceMono font-bold text-6xl">
        404
        <br />
        Not found
      </h1>
    </div>
  );
}
