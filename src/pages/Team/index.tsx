import { FieldValues } from "react-hook-form";
import TeamForm from "../../components/teamForm/TeamForm";

export default function Team() {
  function handleTeam(teste: FieldValues) {
    console.log(teste);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-light-400">
      <div className="w-3/5 md:w-1/3 lg:w-1/4 relative">
        <div className="absolute w-4/5 h-4/5 bg-light-600 right-0 left-0 m-auto top-[-40%] rounded-[100px] blur-2xl opacity-30"></div>
        <TeamForm handler={handleTeam} />
      </div>
    </div>
  );
}
