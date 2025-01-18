import React from "react";
import { ViewProps } from "@/types/thai";
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
          hideRomanization={hideRomanization}
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
      <div className="w-full max-w-lg mx-auto">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
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
