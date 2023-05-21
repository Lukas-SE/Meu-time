
interface ITextInput {
  name: string;
  placeholder: string;
}

export default function TextInput({ name, placeholder}: ITextInput) {
  return (
    <div className="flex font-spaceMono text-base font-normal flex-1">
      <input
        className="pl-4 h-[3.75rem] bg-light-700 placeholder-dark-600 text-light-400 outline-none rounded w-full"
        id={name}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
}
