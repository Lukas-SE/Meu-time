import Logo from "../logo/Logo";

export default function ApiCountSmall() {
  return (
    <div className="h-[3.125rem] flex mb-5 items-center">
      <Logo />
      <div className="font-spaceMono uppercase font-bold pl-5 align flex flex-col justify-between">
        <div className="flex justify-between whitespace-nowrap items-center">
          <div className="flex items-center">
            <p className="text-xl pr-2">API KEY</p>
            <p className="text-xs px-2 lg:pl-3 border-l-[1px] border-dark-600 border-opacity-30">
              USOS DIÁRIOS
            </p>
          </div>
        </div>
        <div className="mb-1">
          <div className=" bg-dark-700 rounded-full">
            <div className="w-1/4 h-2 bg-light-600 rounded-full"></div>
          </div>
          <p className="text-xs pt-1 text-light-600">25 <span className="text-dark-700">DE</span> 100</p>
        </div>
      </div>
    </div>
  );
}
