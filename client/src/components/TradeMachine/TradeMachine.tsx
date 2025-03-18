import { teams } from "../../data/teams";
import TeamSelect from "./TeamSelect";
const TradeMachine = () => {
  return (
    <div>
      <div id="header" className="bg-navbar border-b border-blue-800">
        <h1 className="text-white font-semibold text-3xl py-6 px-16">
          NBA Trade Machine
        </h1>
      </div>
      <div className="px-16 py-8 bg-black">
        <div className="w-1/3 border-dashed border-2 border-gray-500 px-4 py-4">
          <TeamSelect
            options={teams}
            className="w-full border border-gray-500 px-2 py-1 text-gray-400 font-semibold bg-black rounded-sm text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeMachine;
