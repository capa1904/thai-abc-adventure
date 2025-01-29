import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CharacterActions } from "./character/CharacterActions";
import { CharacterInfo } from "./character/CharacterInfo";
import { useCharacterAudio } from "./character/useCharacterAudio";

interface CharacterCardProps {
  character: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
  class?: string;
  className?: string;
  hideRomanization?: boolean;
  onSelectForPractice?: (char: string) => void;
  onFocus?: () => void;
  isRare?: boolean;
  rareInfo?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  romanization,
  meaning,
  letterName,
  class: characterClass,
  className,
  hideRomanization = false,
  onSelectForPractice,
  onFocus,
  isRare,
  rareInfo,
}) => {
  const { playAudio } = useCharacterAudio(letterName, character);

  const getClassSymbol = (classType?: string) => {
    switch (classType) {
      case "Middle Class":
        return "◆";
      case "High Class":
        return "▲";
      case "Low Class":
        return "▼";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-xl relative",
        className
      )}
      data-char={character}
    >
      {characterClass && (
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span className="text-sm text-gray-300" title={characterClass}>
            {getClassSymbol(characterClass)}
          </span>
        </div>
      )}

      <CharacterInfo isRare={isRare} rareInfo={rareInfo} className="absolute bottom-2 left-2" />
      <CharacterActions
        onPlayAudio={playAudio}
        onSelectForPractice={onSelectForPractice}
        onFocus={onFocus}
        character={character}
      />

      <span
        className={cn(
          "text-6xl font-bold select-text",
          isRare ? "text-gray-400" : "text-thai-dark"
        )}
      >
        {character}
      </span>

      {!hideRomanization && (
        <>
          <span className="text-xl text-thai-secondary font-medium select-text">
            {romanization}
          </span>
          {meaning && (
            <span className="text-sm text-gray-600 select-text">{meaning}</span>
          )}
        </>
      )}

      {letterName && (
        <span className="text-sm text-thai-secondary select-text">
          {letterName}
        </span>
      )}
    </motion.div>
  );
};

export default CharacterCard;
