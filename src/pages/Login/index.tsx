import KeyForm from "../../components/keyForm/KeyForm";
import Logo from "../../components/logo/Logo";
import VerticalBanner from "../../components/verticalBanner/VerticalBanner";
import { useAuth } from "../../contexts/auth";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState(false);

  function handleKey(key: string, manterLogin: boolean) {
    login(key, manterLogin).catch(() => setError(true));
  }
  return (
    <>
      <div className="flex justify-center overflow-hidden md:justify-between h-screen w-screen bg-light-400">
        <div className="w-max md:pl-20 px-12">
          <div className="flex h-full justify-between flex-col">
            <div className="pt-[4.25rem]">
              <div className="narrow:pb-0 pb-[4.25rem]">
                <Logo />
              </div>
              <div className="pt-20 pb-5">
                <h1 className="font-spaceMono font-bold italic text-[2.75rem] text-light-600">
                  ACOMPANHE SEU TIME
                </h1>
                <p className="font-space leading-5 font-medium text-base text-light-700">
                  Atualizações em tempo real para qualquer torcedor!
                  <br />
                  Insira sua API key e começe já.
                </p>
              </div>
              <div>
                <div className="py-2 font-spaceMono font-bold text-xl border-t-[0.063rem] border-light-700 border-opacity-30 pt-8 text-light-700">
                  {error ? (
                    <p>
                      API key <span className="text-red-500">inválida!</span>
                    </p>
                  ) : (
                    <p>API key</p>
                  )}
                </div>
                <KeyForm handler={handleKey} />
              </div>
            </div>
            <div className="pb-20 font-space text-light-700 cursor-default">
              <p>Não possúi uma API key? <span className="cursor-pointer font-bold underline">Saiba como</span></p>
            </div>
          </div>
        </div>
        <VerticalBanner />
      </div>
    </>
  );
}
