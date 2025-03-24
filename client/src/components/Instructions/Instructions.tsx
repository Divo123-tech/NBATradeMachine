import { AiOutlineSelect } from "react-icons/ai";
import { RiExchangeBoxLine } from "react-icons/ri";
import { MdCurrencyExchange } from "react-icons/md";
import { ImMagicWand } from "react-icons/im";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
const Instructions = () => {
  return (
    <div className="min-w-1/4 w-1/2 max-w-[45%] border border-gray-700 px-4 py-4 min-h-96 bg-navbar flex flex-col text-gray-400 text-md">
      <div className="flex gap-2 items-center hover:cursor-pointer text-white font-bold py-4">
        <AiOutlineSelect size={26} color="#FFFFFF" />
        <p>Select 2-5 Teams</p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:font-bold hover:text-white border-dashed border-gray-500 border-t py-4">
        <RiExchangeBoxLine size={26} color="#FFFFFF" />
        <p>Trade Players and Draft Picks</p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:font-bold hover:text-white border-dashed border-gray-500 border-t py-4">
        <MdCurrencyExchange size={26} color="#FFFFFF" />
        <p>Try your trade!</p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:font-bold hover:text-white border-dashed border-gray-500 border-t py-4">
        <ImMagicWand size={26} color="#FFFFFF" />
        <p>Get an AI analysis of your trade</p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:font-bold hover:text-white border-dashed border-gray-500 border-t py-4">
        <FaShareFromSquare size={26} color="#FFFFFF" />
        <p>Post and share your trade as a post</p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:font-bold hover:text-white border-dashed border-gray-500 border-t py-4">
        <FaComments size={26} color="#FFFFFF" />
        <p>View, vote and comment on trades!</p>
      </div>
    </div>
  );
};

export default Instructions;
