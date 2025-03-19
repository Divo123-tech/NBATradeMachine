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
  return (
    <div className="min-w-1/4 w-1/2 max-w-[45%] border-dashed border-2 border-gray-500 px-4 py-4 min-h-96 bg-navbar">
      <TeamSelect
        teams={teams}
        className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-navbar rounded-sm text-lg"
        setRostersSelected={setRostersSelected}
        setDraftPicks={setDraftPicksSelected}
        index={0}
      />
      {rosterSelected && draftPicksSelected ? (
        <div>
          {rosterSelected.map((player: Player) => {
            return <PlayerTrade player={player} />;
          })}
          {draftPicksSelected.map((draftPick: DraftPick, i: number) => {
            return <DraftPickTrade i={i} draftPick={draftPick} />;
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400 text-2xl">Add a Team</p>
        </div>
      )}
    </div>
  );
};

export default TeamSelected;
