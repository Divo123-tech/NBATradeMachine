import { useState } from "react";
import { DraftPick } from "../../services/draftpick.service";
import { Player } from "../../services/players.service";
import TeamSelected from "../TeamSelected";
import Instructions from "../Instructions";
export type Roster = {
  [team: string]: Player[];
};
const TradeMachine = () => {
  const [rostersSelected, setRostersSelected] = useState<(Player[] | null)[]>(
    []
  );
  const [draftPicksSelected, setDraftPicksSelected] = useState<DraftPick[][]>(
    []
  );
  //state to keep track of the teams in the trade to prevent duplicates
  const [teamsInTrade, setTeamsInTrade] = useState<string[]>([]);

  return (
    <>
      <div id="header" className="bg-navbar border-b border-blue-800">
        <h1 className="text-white font-semibold text-3xl py-6 px-16">
          NBA Trade Machine
        </h1>
      </div>
      <div className="px-16 py-8 bg-black flex flex-wrap justify-around w-full gap-4 border border-red-500">
        <TeamSelected
          teamsInTrade={teamsInTrade}
          setTeamsInTrade={setTeamsInTrade}
          setDraftPicksSelected={setDraftPicksSelected}
          setRostersSelected={setRostersSelected}
          rosterSelected={rostersSelected[0]}
          draftPicksSelected={
            draftPicksSelected.length > 0 ? draftPicksSelected[0] : null
          }
          index={0}
        />
        {rostersSelected.length > 0 ? (
          <TeamSelected
            teamsInTrade={teamsInTrade}
            setTeamsInTrade={setTeamsInTrade}
            setDraftPicksSelected={setDraftPicksSelected}
            setRostersSelected={setRostersSelected}
            rosterSelected={rostersSelected[1]}
            draftPicksSelected={
              draftPicksSelected.length > 1 ? draftPicksSelected[1] : null
            }
            index={1}
          />
        ) : (
          <Instructions />
        )}
      </div>
    </>
  );
};

export default TradeMachine;
