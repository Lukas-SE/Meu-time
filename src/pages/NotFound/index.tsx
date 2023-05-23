// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// implementar loading para 404 não aparecer durante routes e talvez substituir autoredirect por botao voltar home (talvez não seja necessario, ja que o loading não retorna routes não autenticadas)

export default function NotFound() {
  // const autoredirect = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     autoredirect("/");
  //   }, 3000);
  // }, []);
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
