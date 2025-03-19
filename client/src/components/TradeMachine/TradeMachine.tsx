import { useState } from "react";
import { DraftPick } from "../../services/draftpick.service";
import { Player } from "../../services/players.service";
import TeamSelected from "../TeamSelected";
export type Roster = {
  [team: string]: Player[];
};
const TradeMachine = () => {
  const [rostersSelected, setRostersSelected] = useState<Player[][]>([]);
  const [draftPicksSelected, setDraftPicksSelected] = useState<DraftPick[][]>(
    []
  );

  return (
    <div>
      <div id="header" className="bg-navbar border-b border-blue-800">
        <h1 className="text-white font-semibold text-3xl py-6 px-16">
          NBA Trade Machine
        </h1>
      </div>
      <div className="px-16 py-8 bg-black">
        <TeamSelected
          setDraftPicksSelected={setDraftPicksSelected}
          setRostersSelected={setRostersSelected}
          rosterSelected={
            rostersSelected.length > 0 ? rostersSelected[0] : null
          }
          draftPicksSelected={
            draftPicksSelected.length > 0 ? draftPicksSelected[0] : null
          }
        />
      </div>
    </div>
  );
};

export default TradeMachine;
