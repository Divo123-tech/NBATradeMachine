import { useState } from "react";
import { Team, Teams } from "../../../data/teams";
import { getPlayersByTeam, Player } from "../../../services/players.service";
import {
  DraftPick,
  getDraftPickByTeam,
} from "../../../services/draftpick.service";
type Props = {
  teamsInTrade: string[];
  setTeamsInTrade: React.Dispatch<React.SetStateAction<string[]>>;
  teams: Teams;
  className: string;
  setRostersSelected: React.Dispatch<React.SetStateAction<Player[][]>>;
  setDraftPicks: React.Dispatch<React.SetStateAction<DraftPick[][]>>;
  index: number;
  selected: Team | null;
  setSelected: React.Dispatch<React.SetStateAction<Team | null>>;
};

const TeamSelect = ({
  teamsInTrade,
  setTeamsInTrade,
  teams,
  className,
  setRostersSelected,
  setDraftPicks,
  index,
  selected,
  setSelected,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const select = async (abbreviation: string) => {
    setSelected(teams[abbreviation]);
    setIsOpen(false);
    const roster = await getPlayersByTeam(abbreviation);
    console.log(roster);
    setRostersSelected((prevRosters) => {
      const updatedRoster = [...prevRosters];
      updatedRoster[index] = roster;
      return updatedRoster;
    });
    setTeamsInTrade((prevTeams) => {
      const updatedTeams = [...prevTeams];
      updatedTeams[index] = abbreviation;
      return updatedTeams;
    });
    const draftPicks = await getDraftPickByTeam(abbreviation);
    setDraftPicks((prevPicks) => {
      const updatedPicks = [...prevPicks];
      updatedPicks[index] = draftPicks;
      return updatedPicks;
    });
  };

  const teamExists = (abbreviation: string) => {
    return teamsInTrade.some((team: string) => team === abbreviation);
  };
  return (
    <div className={`relative  ${className}`}>
      {/* Selected Item */}
      <div
        className="flex items-center justify-between px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? (
          <>
            <div className="flex items-center gap-2 text-white ">
              <img
                src={selected.logo}
                alt={selected.name}
                className="w-8 h-8"
              />
              <span>{selected.name}</span>
              <p className="text-sm">#{selected.id}</p>
            </div>
          </>
        ) : (
          <p>Add Team {index + 1}</p>
        )}
        <span>▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-navbar border border-gray-300 shadow-lg max-h-96 overflow-y-auto">
          {Object.keys(teams).map((abbreviation: string) => (
            <li
              key={abbreviation}
              className={`flex ${
                // check if the team has already been selected
                teamExists(abbreviation)
                  ? "opacity-50 hover:cursor-not-allowed"
                  : " hover:bg-gray-600 hover:bg-opacity-80 cursor-pointer"
              } items-center gap-2 px-4 py-2  text-white font-medium text-md`}
              onClick={
                //only select if the team isn't already in the trade
                teamExists(abbreviation) ? () => {} : () => select(abbreviation)
              }
            >
              {teams[abbreviation].id}.
              <img
                src={teams[abbreviation].logo}
                alt={abbreviation}
                className="w-6 h-6"
              />
              <p className="text-xs font-bold">{abbreviation}</p>
              {teams[abbreviation].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamSelect;
