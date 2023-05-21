interface ICheckbox {
  label: string;
  name: string;
}

export default function Checkbox({ label, name }: ICheckbox) {
  return (
    <div className="flex items-center space-x-2">
      <input
        className="h-5 w-5 rounded"
        type="checkbox"
        name={name}
        id={name}
      />
      <label className="text-base font-space font-medium" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
