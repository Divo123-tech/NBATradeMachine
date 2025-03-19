import { DraftPick } from "../../services/draftpick.service";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { teams } from "../../data/teams";

type Props = {
  i: number;
  draftPick: DraftPick;
};

const DraftPickTrade = ({ i, draftPick }: Props) => {
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
          <img src={teams[draftPick.team].logo} className="w-10 h-10" />
        </div>
        <div className="pl-2 flex items-center justify-center">
          <IoMdInformationCircleOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default DraftPickTrade;
