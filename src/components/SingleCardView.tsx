import React from "react";
import { ViewProps, ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";
import { motion, AnimatePresence } from "framer-motion";
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
  onSelectForPractice,
}) => {
  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  const renderCard = (item: ThaiItem) => {
    if (selectedCategory === "Practice") {
      const practiceItem = item as ThaiWord;
      return (
        <PracticeCard
          word={practiceItem.word}
          phonetic={practiceItem.phonetic}
          meaning={practiceItem.meaning}
          hideRomanization={hideRomanization}
        />
      );
    }
    const characterItem = item as ThaiCharacter;
    return (
      <CharacterCard
        character={characterItem.char}
        romanization={characterItem.romanization}
        meaning={characterItem.meaning}
        letterName={characterItem.letterName}
        class={characterItem.class}
        hideRomanization={hideRomanization}
        onSelectForPractice={onSelectForPractice}
      />
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg mx-auto">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: -50 }}
            transition={{
              duration: 0.12,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {renderCard(currentItem)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => onNavigate?.("prev")}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <p className="text-sm text-gray-500 min-w-[100px] text-center">
          Card {currentIndex + 1} of {items.length}
        </p>
        <Button
          variant="outline"
          onClick={() => onNavigate?.("next")}
          className="flex items-center gap-2"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SingleCardView;
