import React, { useState } from "react";
import TeamSelect from "../TradeMachine/TeamSelect";
import { Team, teams } from "../../data/teams";
import { Player } from "../../services/players.service";
import { DraftPick } from "../../services/draftpick.service";
import PlayerTrade from "../PlayerTrade";
import DraftPickTrade from "../DraftPickTrade";

type Props = {
  rosterSelected: Player[] | null;
  draftPicksSelected: DraftPick[] | null;
  setRostersSelected: React.Dispatch<React.SetStateAction<Player[][]>>;
  setDraftPicksSelected: React.Dispatch<React.SetStateAction<DraftPick[][]>>;
};

const TeamSelected = ({
  setRostersSelected,
  setDraftPicksSelected,
  rosterSelected,
  draftPicksSelected,
}: Props) => {
  const [view, setView] = useState<string>("player");
  return (
    <div className="min-w-1/4 w-1/2 max-w-[45%] border-dashed border-2 border-gray-500 px-4 py-4 min-h-96 bg-navbar flex flex-col gap-4">
      <TeamSelect
        teams={teams}
        className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-navbar rounded-sm text-lg"
        setRostersSelected={setRostersSelected}
        setDraftPicks={setDraftPicksSelected}
        index={0}
      />
      <div className="flex gap-4 text-gray-400  pt-2 hover:cursor-pointer px-2 text-md border-t border-gray-500">
        <p
          className={
            view == "player"
              ? "underline text-orange-500 underline-offset-8"
              : ""
          }
          onClick={() => setView("player")}
        >
          Roster ({rosterSelected?.length})
        </p>
        <p
          className={
            view == "picks"
              ? "underline text-orange-500 underline-offset-8"
              : ""
          }
          onClick={() => setView("picks")}
        >
          Picks ({draftPicksSelected?.length})
        </p>
      </div>
      {rosterSelected && view == "player" && (
        <div>
          {rosterSelected.map((player: Player) => {
            return <PlayerTrade player={player} />;
          })}
        </div>
      )}
      {draftPicksSelected && view == "picks" && (
        <div>
          {draftPicksSelected.map((draftPick: DraftPick, i: number) => {
            return <DraftPickTrade i={i} draftPick={draftPick} />;
          })}
        </div>
      )}
      {!rosterSelected && !draftPicksSelected && (
        <div className="text-center py-8">
          <p className="text-gray-400 text-2xl">Add a Team</p>
        </div>
      )}
    </div>
  );
};

export default TeamSelected;
