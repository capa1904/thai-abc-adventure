// \\?\C:\git\temp\thai-abc-adventure\src\components\VowelCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCharacterAudio } from "./character/useCharacterAudio";
import { CharacterActions } from "./character/CharacterActions";

interface VowelCardProps {
  char: string;
  displayForm: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
  hideRomanization?: boolean;
  onSelectForPractice?: (char: string) => void;
  onFocus?: () => void;
}

export const VowelCard: React.FC<VowelCardProps> = ({
  char,
  displayForm,
  romanization,
  meaning,
  letterName,
  hideRomanization = false,
  onSelectForPractice,
  onFocus,
}) => {
  const { playAudio } = useCharacterAudio(letterName, char);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-xl relative"
      )}
      data-char={char}
    >
      <span className="text-4xl font-bold text-thai-dark leading-none">
        {displayForm}
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

      <CharacterActions
        onPlayAudio={playAudio}
        onSelectForPractice={
          onSelectForPractice
            ? () => onSelectForPractice(displayForm)
            : undefined
        }
        onFocus={onFocus}
        character={char}
      />
    </motion.div>
  );
};
