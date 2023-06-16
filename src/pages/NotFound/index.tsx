import { useNavigate } from "react-router-dom";

import ButtonText from "../../components/ButtonText";

export default function NotFound() {
  const autoRedirect = useNavigate();
  async function redirector() {
    autoRedirect("/");
  }
  return (
    <div className="h-screen flex items-center justify-center text-center flex-col space-y-10">
      <h1 className="font-spaceMono font-bold text-6xl">
        404
        <br />
        Not found
      </h1>
      <ButtonText className="px-10" action={redirector}>Voltar para home</ButtonText>
    </div>
  );
}
