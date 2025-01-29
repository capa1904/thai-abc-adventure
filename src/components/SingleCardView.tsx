// \\?\C:\git\temp\thai-abc-adventure\src\components\SingleCardView.tsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ViewProps, ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";
import CharacterCard from "./CharacterCard";
import PracticeCard from "./PracticeCard";
import { VowelCard } from "./VowelCard";

/**
 * SingleCardView: Zeigt immer nur ein Element an (Index 'currentIndex'),
 * mit Buttons für "Prev" / "Next".
 */
const SingleCardView: React.FC<ViewProps> = ({
  items,
  selectedCategory,
  currentIndex = 0,
  onNavigate,
  hideRomanization,
  onSelectForPractice,
}) => {
  // Das derzeit selektierte Element
  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  /**
   * Rendert die passende Card-Komponente abhängig von 'selectedCategory'.
   */
  const renderCard = (item: ThaiItem) => {
    // 1) Practice-Wörter
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

    // 2) Vowels
    if (selectedCategory === "Vowels") {
      // Hier hat das Item zusätzlich displayForm
      const vowelItem = item as ThaiCharacter & { displayForm: string };
      return (
        <VowelCard
          char={vowelItem.char}
          displayForm={vowelItem.displayForm}
          romanization={vowelItem.romanization}
          meaning={vowelItem.meaning}
          letterName={vowelItem.letterName}
          hideRomanization={hideRomanization}
          // Actions: onSelectForPractice, etc.
          onSelectForPractice={onSelectForPractice}
          // In der Single-Card-Ansicht ist "Focus" nicht immer relevant,
          // aber falls du es möchtest, kannst du hier etwas wie
          // onFocus={() => console.log("Focus clicked")} übergeben.
        />
      );
    }

    // 3) Consonants oder Tones -> CharacterCard
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
        isRare={characterItem.isRare}
        rareInfo={characterItem.rareInfo}
      />
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Card-Container (Framer Motion für Slide-Effekte) */}
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

      {/* Navigations-Leiste (Prev / Next) */}
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
