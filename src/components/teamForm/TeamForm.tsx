import { FieldValues, useForm } from "react-hook-form";
import SelectInput from "../selectInput/SelectInput";
import ButtonText from "../ButtonText/ButtonText";

interface ITeamForm {
  handler(data: FieldValues): void;
}

export default function TeamForm({ handler }: ITeamForm) {
  const { register, handleSubmit, watch } = useForm();  

  return (
    <form onSubmit={handleSubmit((data) => handler(data))}>
      <SelectInput
        name="teste1"
        placeholder="um teste1"
        register={register}
        data={[
          ["tst1", "test1"],
          ["cs1", "case1"],
        ]}
      />
      <SelectInput
        name="teste2"
        placeholder="um teste2"
        register={register}
        data={[
          ["tst2", "test2"],
          ["cs2", "case2"],
        ]}
      />
      <SelectInput
        name="teste3"
        placeholder="um teste3"
        register={register}
        watcher={watch(["teste1", "teste2"])}
        data={[
          ["tst3", "test3"],
          ["cs3", "case3"],
        ]}
      />
      <SelectInput
        name="teste4"
        placeholder="um teste4"
        register={register}
        watcher={watch(["teste3"])}
        data={[
          ["tst4", "test4"],
          ["cs4", "case4"],
        ]}
      />
      <ButtonText watcher={watch(["teste4"])} className="w-full mt-10">Salvar</ButtonText>
    </form>
  );
}
