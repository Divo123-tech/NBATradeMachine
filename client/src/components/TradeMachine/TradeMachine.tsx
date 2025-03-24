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
    <>
      <div id="header" className="bg-navbar border-b border-blue-800">
        <h1 className="text-white font-semibold text-3xl py-6 px-16">
          NBA Trade Machine
        </h1>
      </div>
      <div className="px-16 py-8 bg-black flex justify-around">
        <TeamSelected
          setDraftPicksSelected={setDraftPicksSelected}
          setRostersSelected={setRostersSelected}
          rosterSelected={
            rostersSelected.length > 0 ? rostersSelected[0] : null
          }
          draftPicksSelected={
            draftPicksSelected.length > 0 ? draftPicksSelected[0] : null
          }
          index={0}
        />
        {rostersSelected.length > 1 ? (
          <TeamSelected
            setDraftPicksSelected={setDraftPicksSelected}
            setRostersSelected={setRostersSelected}
            rosterSelected={
              rostersSelected.length > 1 ? rostersSelected[1] : null
            }
            draftPicksSelected={
              draftPicksSelected.length > 1 ? draftPicksSelected[1] : null
            }
            index={1}
          />
        ) : (
          <div className="min-w-1/4 w-1/2 max-w-[45%] border border-gray-700 px-4 py-4 min-h-96 bg-navbar flex flex-col gap-8 text-white text-lg">
            <p>Select 2-5 Teams</p>
            <p>Trade Players and Draft Picks</p>
            <p>Try your trade!</p>
            <p>
              Get an AI analysis of your trade from the perspectives of your
              teams' GMs
            </p>
            <p>Post and share your trade as a post</p>
            <p>View, vote and comment on trades!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TradeMachine;
