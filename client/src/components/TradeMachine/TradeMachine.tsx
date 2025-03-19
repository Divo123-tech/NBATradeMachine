import { useState } from "react";
import { DraftPick } from "../../services/draftpick.service";
import { Player } from "../../services/players.service";
import TeamSelect from "./TeamSelect";
import { teams } from "../../data/teams";
import PlayerTrade from "../PlayerTrade";
import { IoMdInformationCircleOutline } from "react-icons/io";
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
        <div className="min-w-1/4 w-1/2 max-w-[45%] border-dashed border-2 border-gray-500 px-4 py-4 min-h-96 bg-navbar">
          <TeamSelect
            teams={teams}
            className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-navbar rounded-sm text-lg"
            setRostersSelected={setRostersSelected}
            setDraftPicks={setDraftPicksSelected}
            index={0}
          />
          {rostersSelected.length > 0 && draftPicksSelected.length > 0 ? (
            <div>
              {rostersSelected[0].map((player: Player) => {
                return <PlayerTrade player={player} />;
              })}
              {draftPicksSelected[0].map((draftPick: DraftPick, i: number) => {
                return (
                  <div
                    key={i}
                    className="text-white flex items-center justify-between border-b border-gray-500 hover:bg-opacity-20 hover:cursor-pointer hover:bg-gray-500"
                  >
                    <div className="max-w-[80%] flex-grow">
                      <p className="text-md">
                        {draftPick.year} - Round {draftPick.round}
                      </p>
                      {draftPick.from !== "Own" && (
                        <p>
                          {draftPick.from} -{" "}
                          <span className="text-gray-300 text-xs">
                            {draftPick.description}
                          </span>
                        </p>
                      )}
                    </div>
                    <div className="flex items-center border-l-4 border-orange-500 h-full">
                      <div className="border-r h-full px-1 py-2">
                        <img
                          src={teams[draftPick.team].logo}
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="pl-2 flex items-center justify-center">
                        <IoMdInformationCircleOutline size={24} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-2xl">Add a Team</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeMachine;
