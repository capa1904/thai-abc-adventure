import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  character: string;
  romanization: string;
  meaning?: string;
  className?: string;
}

const CharacterCard = ({ character, romanization, meaning, className }: CharacterCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors hover:bg-thai-primary",
        className
      )}
    >
      <span className="text-6xl font-bold text-thai-dark">{character}</span>
      <span className="text-xl text-thai-secondary font-medium">{romanization}</span>
      {meaning && <span className="text-sm text-gray-600">{meaning}</span>}
    </motion.div>
  );
};

export default CharacterCard;