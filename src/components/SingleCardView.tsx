import React from "react";
import { ViewProps } from "@/types/thai";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CharacterCard from "./CharacterCard";
import PracticeCard from "./PracticeCard";

const SingleCardView: React.FC<ViewProps> = ({
  items,
  selectedCategory,
  currentIndex = 0,
  onNavigate,
  hideRomanization,
}) => {
  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  const renderCard = (item: any) => {
    if (selectedCategory === "Practice") {
      return (
        <PracticeCard
          word={item.word}
          phonetic={item.phonetic}
          meaning={item.meaning}
        />
      );
    }
    return (
      <CharacterCard
        character={item.char}
        romanization={item.romanization}
        meaning={item.meaning}
        letterName={item.letterName}
        class={item.class}
        hideRomanization={hideRomanization}
      />
    );
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-lg mx-auto"
      >
        {renderCard(currentItem)}
      </motion.div>
      <div className="flex gap-4 mt-6">
        <Button
          variant="outline"
          onClick={() => onNavigate?.("prev")}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => onNavigate?.("next")}
          className="flex items-center gap-2"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Card {currentIndex + 1} of {items.length}
      </p>
    </div>
  );
};

export default SingleCardView;