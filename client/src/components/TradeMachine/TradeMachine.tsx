import { useState } from "react";
import { DraftPick } from "../../services/draftpick.service";
import { Player } from "../../services/players.service";
import TeamSelect from "./TeamSelect";
import { teams } from "../../data/teams";
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
                return (
                  <div className="hover:bg-opacity-20 hover:cursor-pointer hover:bg-gray-500">
                    <div
                      key={player.name}
                      className="text-white flex justify-between border-b border-dashed border-gray-500 px-2"
                    >
                      <div className=" py-2 ">
                        <p className="text-lg">{player.name}</p>
                        <div className="flex text-sm text-gray-400 gap-1">
                          <p>{player.position + ", "} </p>
                          <p>{player.age + " yo, "} </p>
                          <p>{player.minutesPlayed} MPG</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="border-r-2 border-gray-500 px-2 py-2 text-center">
                          <p className="font-semibold">
                            ${(player.season2425 / 1000000).toFixed(1)}M
                          </p>
                          <p>{player.contractLength}yrs</p>
                        </div>
                        <img
                          src={teams[player.team].logo}
                          className="object-contain w-14 h-14 px-2  border-gray-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-around text-sm text-white py-1 border-b border-gray-500">
                      <p>
                        {player.points}{" "}
                        <span className="text-gray-400 text-xs">PTS</span>
                      </p>
                      <p>
                        {player.assists}{" "}
                        <span className="text-gray-400 text-xs">AST</span>
                      </p>{" "}
                      <p>
                        {player.trb}{" "}
                        <span className="text-gray-400 text-xs">TRB</span>
                      </p>{" "}
                      <p>
                        {player.blocks}{" "}
                        <span className="text-gray-400 text-xs">BLK</span>
                      </p>{" "}
                      <p>
                        {player.steals}{" "}
                        <span className="text-gray-400 text-xs">STL</span>
                      </p>{" "}
                      <p>
                        {player.turnovers}{" "}
                        <span className="text-gray-400 text-xs">TOV</span>
                      </p>
                    </div>
                  </div>
                );
              })}
              {draftPicksSelected[0].map((draftPick: DraftPick, i: number) => {
                return (
                  <p key={i} className="text-white">
                    {draftPick.year}
                  </p>
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
