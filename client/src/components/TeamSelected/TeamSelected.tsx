import React, { useEffect, useState } from "react";
import TeamSelect from "./components/TeamSelect";
import { Team, teams } from "../../data/teams";
import { Player } from "../../services/players.service";
import { DraftPick } from "../../services/draftpick.service";
import PlayerTrade from "./components/PlayerTrade";
import DraftPickTrade from "../DraftPickTrade";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  firstApronThreshold,
  secondApronThreshold,
  taxThreshold,
} from "../../data/apron";
import { FaTrashCan } from "react-icons/fa6";
import FinancialInformation from "./components/FinancialInformation";

type Props = {
  teamsInTrade: string[];
  setTeamsInTrade: React.Dispatch<React.SetStateAction<string[]>>;
  rosterSelected: Player[] | null;
  draftPicksSelected: DraftPick[] | null;
  setRostersSelected: React.Dispatch<React.SetStateAction<(Player[] | null)[]>>;
  setDraftPicksSelected: React.Dispatch<React.SetStateAction<DraftPick[][]>>;
  index: number;
};

const TeamSelected = ({
  teamsInTrade,
  setTeamsInTrade,
  setRostersSelected,
  setDraftPicksSelected,
  rosterSelected,
  draftPicksSelected,
  index,
}: Props) => {
  const [view, setView] = useState<string>("player");
  const [totalCap, setTotalCap] = useState<number>(0);
  const [teamSelected, setTeamSelected] = useState<Team | null>(null);
  useEffect(() => {
    //sets total cap as the cumulative result of roster's salaries using .reduce
    setTotalCap(
      rosterSelected?.reduce(
        (total, player) => total + (player.season2425 || 0),
        0
      ) || 0
    );
    //change the team select when the roster changes
    setTeamSelected(rosterSelected ? teams[rosterSelected[0].team] : null);
    //change what teams are in the trade
    setTeamsInTrade((prevTeams: string[]) => {
      prevTeams[index] = teamSelected?.abbreviation || "";
      return prevTeams;
    });
  }, [index, rosterSelected, setTeamsInTrade, teamSelected?.abbreviation]);

  const removeTeam = () => {
    setRostersSelected((prevRosters: (Player[] | null)[]) => {
      //filters the new rosters to not include the current roster being removed
      return prevRosters?.filter(
        (arr) => JSON.stringify(arr) !== JSON.stringify(rosterSelected)
      );
    });
  };

  const generateCapSummary = (): string => {
    //function to generate summary based on cap status of team
    if (totalCap < taxThreshold) {
      return "Over the cap/non-tax";
    } else if (totalCap < secondApronThreshold) {
      return "1st apron";
    } else {
      return "2nd apron";
    }
  };
  return (
    <div className="w-full md:w-[80%] lg:flex-1 lg:basis-0 lg:min-w-[30%] lg:w-[30%]  lg:max-w-[45%] border-dashed border-2 border-gray-500 px-4 py-4 min-h-96 h-fit bg-navbar flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <TeamSelect
          teamsInTrade={teamsInTrade}
          setTeamsInTrade={setTeamsInTrade}
          teams={teams}
          className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-navbar rounded-sm text-lg"
          setRostersSelected={setRostersSelected}
          setDraftPicks={setDraftPicksSelected}
          index={index}
          selected={teamSelected}
          setSelected={setTeamSelected}
        />
        {/* only show remove team button if there is a team selected */}
        {rosterSelected && (
          <FaTrashCan
            color="#FFFFFF"
            size={16}
            cursor={"pointer"}
            onClick={removeTeam}
          />
        )}
      </div>
      {rosterSelected && (
        <div className="flex justify-around border-t border-b border-gray-500 text-center">
          <div className="border-r w-1/4 border-dashed py-3 border-gray-500 ">
            <p className="text-white font-semibold">
              ${(totalCap / 1000000).toFixed(1)}M
            </p>
            <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
              <IoMdInformationCircleOutline color="#FFFFFF" size={16} />
              <p className="text-gray-500 text-xs">
                <span className="font-bold">Total</span> Cap
              </p>
            </div>
          </div>
          <FinancialInformation
            title="Tax"
            totalCap={totalCap}
            financialThreshold={taxThreshold}
            thresholdName="Tax Threshold"
          />
          <FinancialInformation
            title="1st Apron"
            totalCap={totalCap}
            financialThreshold={firstApronThreshold}
            thresholdName="1st Apron"
          />
          <FinancialInformation
            title="2nd Apron"
            totalCap={totalCap}
            financialThreshold={secondApronThreshold}
            thresholdName="2nd Apron"
          />
        </div>
      )}
      {rosterSelected && (
        <div>
          <p className="text-gray-400 text-sm text-center">
            <span className="font-bold">{generateCapSummary()}</span> team
            before trade
          </p>
        </div>
      )}
      {rosterSelected && draftPicksSelected && (
        <div className="flex gap-4 text-gray-400  pt-2 hover:cursor-pointer px-2 text-md border-t border-gray-500">
          <p
            className={`${
              view == "player" && "underline text-orange-500 underline-offset-8"
            }`}
            onClick={() => setView("player")}
          >
            Roster ({rosterSelected.length})
          </p>
          <p
            className={`${
              view == "picks" && "underline text-orange-500 underline-offset-8"
            }`}
            onClick={() => setView("picks")}
          >
            Picks ({draftPicksSelected.length})
          </p>
        </div>
      )}
      {/* generate players if the view is player */}
      {rosterSelected && view == "player" && (
        <div className="max-h-[500px] overflow-y-auto">
          {rosterSelected.map((player: Player) => {
            return <PlayerTrade player={player} key={player.name} />;
          })}
        </div>
      )}
      {/* generate players if the view is picks */}
      {draftPicksSelected && view == "picks" && (
        <div>
          {draftPicksSelected.map((draftPick: DraftPick, i: number) => {
            return (
              <DraftPickTrade
                i={i}
                draftPick={draftPick}
                key={`${draftPick.year} ${draftPick.from} ${draftPick.description} `}
              />
            );
          })}
        </div>
      )}
      {!teamSelected && (
        <div className="text-center flex justify-center py-8 w-full ">
          <p className="text-gray-400 text-2xl">Add a Team</p>
        </div>
      )}
    </div>
  );
};

export default TeamSelected;
