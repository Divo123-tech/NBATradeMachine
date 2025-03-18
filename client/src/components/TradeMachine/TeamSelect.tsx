import { useState } from "react";
import { Team } from "../../data/teams";

type Props = {
  options: Team[];
  className: string;
};

const TeamSelect = ({ options, className }: Props) => {
  const [selected, setSelected] = useState<Team | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative  ${className}`}>
      {/* Selected Item */}
      <div
        className="flex items-center justify-between bg-black px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? (
          <>
            <div className="flex items-center gap-2 text-white">
              <img
                src={selected.logo}
                alt={selected.abbreviation}
                className="w-8 h-8"
              />
              <span>{selected.name}</span>
              <p className="text-sm">#{selected.id}</p>
            </div>
          </>
        ) : (
          <>
            <p>Add Team 1</p>
          </>
        )}
        <span>▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-navbar border border-gray-300 shadow-lg max-h-96 overflow-y-auto">
          {options.map((option: Team) => (
            <li
              key={option.id}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-600 hover:bg-opacity-80 cursor-pointer text-white font-medium text-md"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option.id}.
              <img
                src={option.logo}
                alt={option.abbreviation}
                className="w-6 h-6"
              />
              <p className="text-xs font-bold">{option.abbreviation}</p>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamSelect;
