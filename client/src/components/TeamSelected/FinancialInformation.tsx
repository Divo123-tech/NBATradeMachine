import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { IoMdInformationCircleOutline } from "react-icons/io";

type Props = {
  totalCap: number;
  title: string;
  financialThreshold: number;
  thresholdName: string;
};

const FinancialInformation = ({
  totalCap,
  title,
  financialThreshold,
  thresholdName,
}: Props) => {
  return (
    <div className="border-r w-1/4 border-dashed py-3 border-gray-500 ">
      <p
        className={`${
          financialThreshold - totalCap < 0 ? "text-red-400" : "text-green-500"
        } font-semibold`}
      >
        {financialThreshold - totalCap < 0 && "-"}$
        {Math.abs((financialThreshold - totalCap) / 1000000).toFixed(1)}M
      </p>

      <HoverCard>
        <HoverCardTrigger>
          <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
            <IoMdInformationCircleOutline color="#FFFFFF" size={16} />
            <p className="text-gray-500 text-xs">
              <span className="font-bold">{title}</span> Space
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
              <p>${(financialThreshold / 1000000).toFixed(1)}M</p>
              <p>${(totalCap / 1000000).toFixed(1)}M</p>
              <p>
                {financialThreshold - totalCap < 0 && "-"}$
                {Math.abs((financialThreshold - totalCap) / 1000000).toFixed(1)}
                M
              </p>
            </div>
            <div className="flex flex-col text-left font-normal">
              <p>{thresholdName}</p>
              <p>Total Cap</p>
              <p>{title} Space</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default FinancialInformation;
