interface ICard {
  name: string;
  age: string;
  nationality: string;
  photo?:string
}

export default function PlayerCard({ name, age, nationality, photo }: ICard) {
  return (
    <div className="flex h-[6.25rem] rounded-lg space-x-4 p-2 items-center justify-start bg-dark-600 bg-opacity-50 text-light-400  whitespace-nowrap lg:h-[11vh]">
      <div className="rounded-l-lg rounded-r-[0.25rem] basis-[4.75rem] shrink-0 h-full bg-black">{photo && <img className="rounded-l-lg rounded-r-[0.25rem] w-full h-full object-cover" src={photo} alt="playerimg" />}</div>
      <div className="justify-start items-center mx-4 space-y-1">
        <p className="font-bold font-space text-2xl lg:text-[2.4vmin] capitalize">{name}</p>
        <div className="text-light-600 flex lg:text-[1.6vmin]">
          <p className="font-spaceMono pr-3 border-[#F2F2F2] border-opacity-30 border-r-[1px]">
            {age} anos
          </p>
          <p className="font-spaceMono pl-3 capitalize">{nationality}</p>
        </div>
      </div>
    </div>
  );
}
