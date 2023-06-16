import { FieldValues, useForm } from "react-hook-form";
import SelectInput from "../../../components/selectInput";
import ButtonText from "../../../components/ButtonText";
import { useTeam } from "../../../services/meu-time";

interface ITeamForm {
  handler(data: FieldValues): void;
}

export default function TeamForm({ handler }: ITeamForm) {
  const { register, handleSubmit, watch } = useForm();
  const { getCountries, getSeasons, getLeagues, getTeams } = useTeam();
  let countryWatcher = watch("País");
  let seasonWatcher = watch("Temporada");
  let leagueWatcher = watch("Liga");

  return (
    <form onSubmit={handleSubmit((data) => handler(data))}>
      <SelectInput
        name="País"
        placeholder="um país"
        register={register}
        data={getCountries}
      />
      <SelectInput
        name="Temporada"
        placeholder="uma temporada"
        register={register}
        data={getSeasons}
      />
      <SelectInput
        name="Liga"
        placeholder="uma liga"
        register={register}
        disable={[countryWatcher, seasonWatcher].some((i)=> i == "" || i == undefined)}
        dependencies={[countryWatcher, seasonWatcher]}
        data={():Promise<string[][]> => {return getLeagues({country: countryWatcher, season: seasonWatcher})}}
      />
      <SelectInput
        name="Time"
        placeholder="um time"
        disable={[leagueWatcher].some((i)=> i == "" || i == undefined)}
        register={register}
        dependencies={[leagueWatcher, seasonWatcher]}
        data={():Promise<string[][]> => {return getTeams({league: leagueWatcher, season: seasonWatcher})}}
      />
      <ButtonText watcher={watch(["Time"])} className="w-full mt-10">
        Salvar
      </ButtonText>
    </form>
  );
}
