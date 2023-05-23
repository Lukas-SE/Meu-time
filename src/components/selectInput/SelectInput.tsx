import { useEffect, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ISelect {
  name: string;
  data: Array<Array<string>>;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  watcher?: Array<string>;
}

export default function SelectInput({
  name,
  data,
  placeholder,
  register,
  watcher,
}: ISelect) {
  const [disable, setDisable] = useState(watcher ? true : false);

  async function enabler() {
    const enabler = await (watcher as Array<string>).some(item => item === "" || item == undefined);
    setDisable(enabler);
    return enabler
  }

  useEffect(() => {
    watcher && enabler();
  }, [watcher]);

  const styles = "enabled:hover:bg-dark-700 enabled:cursor-pointer w-full rounded font-normal pl-4 h-[3.75rem] appearance-none text-light-400 invalid:text-dark-600 bg-light-700 outline-none disabled:bg-light-400 disabled:text-dark-700";
  return (
    <div className="flex flex-col items-start justify-center font-spaceMono text-dark-700">
      <label htmlFor={name} className="font-bold capitalize py-2">
        {name}
      </label>
      <div className="relative w-full">
        <svg className=" pointer-events-none absolute right-4 top-0 bottom-0 m-auto rotate-180 fill-dark-600 scale-[0.6] md:scale-100" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
          <path
            stroke="none"
            d="M5.1339745962156 1.8038475772934a1 1 0 0 1 1.7320508075689 0l4.2679491924311 7.3923048454133a1 1 0 0 1 -0.86602540378444 1.5l-8.5358983848622 0a1 1 0 0 1 -0.86602540378444 -1.5"
          >
          </path>
        </svg>
        <select
          defaultValue={""}
          disabled={disable ?? false}
          id={name}
          {...register(name)}
          required
          className={styles}
        >
          <option value="" disabled>Selecione {placeholder}...</option>
          {data.map((data) => (
            <option key={data[0]} className="text-light-400" value={data[0]}>
              {data[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
