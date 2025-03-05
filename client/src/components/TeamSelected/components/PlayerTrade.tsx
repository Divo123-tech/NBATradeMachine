import { IoMdInformationCircleOutline } from "react-icons/io";
import { Player } from "@/services/players.service";
import { teams } from "@/data/teams";
type Props = {
  player: Player;
};

const PlayerTrade = ({ player }: Props) => {
  return (
    <div className="hover:bg-opacity-20 hover:cursor-pointer hover:bg-gray-500 border-t border-gray-500">
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
        <div className="flex items-center h-full">
          <div className="border-r-4 border-orange-500 text-center flex-col items-center h-full justify-center py-3 px-1">
            <p className=" text-md font-semibold">
              ${(player.season2425 / 1000000).toFixed(1)}M
            </p>
            <p className="text-sm font-semibold">{player.contractLength}yrs</p>
          </div>
          <div className="border-r border-gray-500 h-full flex-col items-center py-3 px-1">
            <img src={teams[player.team].logo} className=" w-10 h-10" />
          </div>
          <div className="pl-2">
            <IoMdInformationCircleOutline size={24} />
          </div>
        </div>
      </div>
      {/* player statistics */}
      <div className="flex justify-around text-sm text-white py-1 ">
        <p>
          {player.points} <span className="text-gray-400 text-xs">PTS</span>
        </p>
        <p>
          {player.assists} <span className="text-gray-400 text-xs">AST</span>
        </p>
        <p>
          {player.trb} <span className="text-gray-400 text-xs">TRB</span>
        </p>
        <p>
          {player.blocks} <span className="text-gray-400 text-xs">BLK</span>
        </p>
        <p>
          {player.steals} <span className="text-gray-400 text-xs">STL</span>
        </p>
        <p>
          {player.turnovers} <span className="text-gray-400 text-xs">TOV</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerTrade;
