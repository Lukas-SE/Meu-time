import ButtonText from "../ButtonText/ButtonText";
import Checkbox from "../checkbox/Checkbox";
import TextInput from "../textInput/TextInput";
import Tooltip from "../tooltip/Tooltip";
import { useForm } from "react-hook-form";

interface IForm {
  handler(key: string): void
}

export default function KeyForm({handler}: IForm) {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="flex justify-start w-[30.5rem]">
        <form
          className="w-full flex space-between space-x-2"
          onSubmit={handleSubmit((data) => handler(data.key))}
        >
          <div className="flex-1">
            <TextInput
              name="key"
              placeholder="79bee7hidg36?6a9a425fee746?hj75xc537"
              register={register}
            />
            <div className="flex justify-between py-5">
              <Checkbox
                label="Manter conectado"
                name="manterLogin"
                register={register}
              />
              <div className="h-5 w-5 rounded m-0 pt-[1px] font-space font-bold group bg-light-600 flex justify-center items-center text-light-400 relative cursor-default">
                !
                <Tooltip>
                  Manter-se conectado ajuda a reduzir os usos diarios da API
                  key.
                </Tooltip>
              </div>
            </div>
          </div>
          <ButtonText>gol!</ButtonText>
        </form>
      </div>
    </>
  );
}
