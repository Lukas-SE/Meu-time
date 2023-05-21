import ButtonText from "../ButtonText/ButtonText";
import Checkbox from "../checkbox/Checkbox";
import TextInput from "../textInput/TextInput";
import Tooltip from "../tooltip/Tooltip";

export default function KeyForm() {
  
  return (
    <>
      <div className="flex justify-start w-[30.5rem]">
        <form className="w-full flex space-between space-x-2">
          <div className="flex-1">
            <TextInput
              name="key"
              placeholder="79bee7hidg36?6a9a425fee746?hj75xc537"
            />
            <div className="flex justify-between">
              <Checkbox label="Manter conectado" name="manterLogin" />
              <p className="h-5 w-5 rounded m-0 pt-[1px] font-space font-bold group bg-light-600 flex justify-center items-center text-light-400 relative">
                !
                <Tooltip>
                  Manter-se conectado ajuda a reduzir os usos diarios da API
                  key.
                </Tooltip>
              </p>
            </div>
          </div>
          <ButtonText>gol!</ButtonText>
        </form>
      </div>
    </>
  );
}
