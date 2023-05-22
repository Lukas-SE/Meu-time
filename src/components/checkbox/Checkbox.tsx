import { UseFormRegister, FieldValues } from "react-hook-form";
import { useState } from "react";

interface ICheckbox {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

export default function Checkbox({ label, name, register }: ICheckbox) {
  const [selected, setSelected] = useState(true);

  function handleChange() {
    return setSelected(!selected);
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        className="h-5 w-5 rounded"
        type="checkbox"
        id={name}
        {...register(name)}
        checked={selected}
        onChange={handleChange}
      />
      <label className="text-base font-space font-medium" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
