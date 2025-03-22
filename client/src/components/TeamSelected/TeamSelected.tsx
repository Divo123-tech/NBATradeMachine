import React, { useEffect, useState } from "react";
import TeamSelect from "../TradeMachine/TeamSelect";
import { Team, teams } from "../../data/teams";
import { Player } from "../../services/players.service";
import { DraftPick } from "../../services/draftpick.service";
import PlayerTrade from "../PlayerTrade";
import DraftPickTrade from "../DraftPickTrade";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  firstApronThreshold,
  secondApronThreshold,
  taxThreshold,
} from "../../data/apron";
import { FaTrashCan } from "react-icons/fa6";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
  }, [rosterSelected]);

  const removeTeam = () => {
    setTeamSelected(null);
    setRostersSelected((prevRosters: Player[][]) => {
      //filters the previous rosters to remove the current roster only
      return prevRosters.filter(
        (arr) => JSON.stringify(arr) !== JSON.stringify(rosterSelected)
      );
    });
  };

  const generateCapSummary = (): string => {
    //function to generate summary based on cap status of team
    if (totalCap < taxThreshold) {
      return "Over the cap/non-tax";
    } else if (totalCap < firstApronThreshold) {
      return "1st apron";
    } else {
      return "2nd apron";
    }
  };
  return (
    <div className="min-w-1/4 w-1/2 max-w-[45%] border-dashed border-2 border-gray-500 px-4 py-4 min-h-96 bg-navbar flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <TeamSelect
          teams={teams}
          className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-navbar rounded-sm text-lg"
          setRostersSelected={setRostersSelected}
          setDraftPicks={setDraftPicksSelected}
          index={0}
          selected={teamSelected}
          setSelected={setTeamSelected}
        />
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
          <div className="border-r w-1/4 border-dashed py-3 border-gray-500 ">
            <p
              className={`${
                taxThreshold - totalCap < 0 ? "text-red-400" : "text-green-500"
              } font-semibold`}
            >
              {taxThreshold - totalCap < 0 && "-"}$
              {Math.abs((taxThreshold - totalCap) / 1000000).toFixed(1)}M
            </p>

            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
                  <IoMdInformationCircleOutline color="#FFFFFF" size={16} />
                  <p className="text-gray-500 text-xs">
                    <span className="font-bold">Tax</span> Space
                  </p>
                </div>
              </HoverCardTrigger>

              <HoverCardContent className="bg-black border-gray-500">
                <div className="flex gap-2 text-white">
                  <div className="flex flex-col">
                    <br></br>
                    <p>-</p>
                    <p>=</p>
                  </div>
                  <div className="flex flex-col">
                    <p>${(taxThreshold / 1000000).toFixed(1)}M</p>
                    <p>${(totalCap / 1000000).toFixed(1)}M</p>
                    <p>
                      {taxThreshold - totalCap < 0 && "-"}$
                      {Math.abs((taxThreshold - totalCap) / 1000000).toFixed(1)}
                      M
                    </p>
                  </div>
                  <div className="flex flex-col text-left font-normal">
                    <p>Tax Threshold</p>
                    <p>Total Cap</p>
                    <p>Tax Space</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="border-r w-1/4 border-dashed py-3 border-gray-500 ">
            <p
              className={`${
                firstApronThreshold - totalCap < 0
                  ? "text-red-400"
                  : "text-green-500"
              } font-semibold`}
            >
              {firstApronThreshold - totalCap < 0 && "-"}$
              {Math.abs((firstApronThreshold - totalCap) / 1000000).toFixed(1)}M
            </p>
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
                  <IoMdInformationCircleOutline color="#FFFFFF" size={16} />
                  <p className="text-gray-500 text-xs">
                    <span className="font-bold">1st Apron</span> Space
                  </p>
                </div>
              </HoverCardTrigger>

              <HoverCardContent className="bg-black border-gray-500">
                <div className="flex gap-2 text-white">
                  <div className="flex flex-col">
                    <br></br>
                    <p>-</p>
                    <p>=</p>
                  </div>
                  <div className="flex flex-col">
                    <p>${(firstApronThreshold / 1000000).toFixed(1)}M</p>
                    <p>${(totalCap / 1000000).toFixed(1)}M</p>
                    <p>
                      {firstApronThreshold - totalCap < 0 && "-"}$
                      {Math.abs(
                        (firstApronThreshold - totalCap) / 1000000
                      ).toFixed(1)}
                      M
                    </p>
                  </div>
                  <div className="flex flex-col text-left font-normal">
                    <p>1st Apron </p>
                    <p>Total Cap</p>
                    <p>Tax Space</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="border-r w-1/4 border-dashed py-3 border-gray-500 ">
            <p
              className={`${
                secondApronThreshold - totalCap < 0
                  ? "text-red-400"
                  : "text-green-500"
              } font-semibold`}
            >
              {secondApronThreshold - totalCap < 0 && "-"}$
              {Math.abs((secondApronThreshold - totalCap) / 1000000).toFixed(1)}
              M
            </p>
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
                  <IoMdInformationCircleOutline color="#FFFFFF" size={16} />
                  <p className="text-gray-500 text-xs">
                    <span className="font-bold">2nd Apron</span> Space
                  </p>
                </div>
              </HoverCardTrigger>

              <HoverCardContent className="bg-black border-gray-500">
                <div className="flex gap-2 text-white">
                  <div className="flex flex-col">
                    <br></br>
                    <p>-</p>
                    <p>=</p>
                  </div>
                  <div className="flex flex-col">
                    <p>${(secondApronThreshold / 1000000).toFixed(1)}M</p>
                    <p>${(totalCap / 1000000).toFixed(1)}M</p>
                    <p>
                      {secondApronThreshold - totalCap < 0 && "-"}$
                      {Math.abs(
                        (secondApronThreshold - totalCap) / 1000000
                      ).toFixed(1)}
                      M
                    </p>
                  </div>
                  <div className="flex flex-col text-left font-normal">
                    <p>2nd Apron </p>
                    <p>Total Cap</p>
                    <p>Tax Space</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
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
        <div>
          {rosterSelected.map((player: Player) => {
            return <PlayerTrade player={player} />;
          })}
        </div>
      )}
      {/* generate players if the view is picks */}
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
