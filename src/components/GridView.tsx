// \\?\C:\git\temp\thai-abc-adventure\src\components\GridView.tsx
import React from "react";
import { ViewProps, ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";
import CharacterCard from "./CharacterCard";
import PracticeCard from "./PracticeCard";
import { VowelCard } from "./VowelCard";

const GridView: React.FC<ViewProps> = ({
  items,
  selectedCategory,
  hideRomanization,
  onSelectForPractice,
  onFocusCard,
}) => {
  const renderCard = (item: ThaiItem, index: number) => {
    if (!item) return null;

    // 1) Practice
    if (selectedCategory === "Practice") {
      const practiceItem = item as ThaiWord;
      return (
        <PracticeCard
          key={practiceItem.word}
          word={practiceItem.word}
          phonetic={practiceItem.phonetic}
          meaning={practiceItem.meaning}
          hideRomanization={hideRomanization}
        />
      );
    }

    // 2) Vowels
    if (selectedCategory === "Vowels") {
      const vowelItem = item as ThaiCharacter & { displayForm: string };
      return (
        <VowelCard
          key={vowelItem.char + vowelItem.displayForm}
          char={vowelItem.char}
          displayForm={vowelItem.displayForm}
          romanization={vowelItem.romanization}
          meaning={vowelItem.meaning}
          letterName={vowelItem.letterName}
          hideRomanization={hideRomanization}
          onSelectForPractice={onSelectForPractice}
          onFocus={onFocusCard ? () => onFocusCard(index) : undefined}
        />
      );
    }

    // 3) Consonants / Tones
    const characterItem = item as ThaiCharacter;
    return (
      <CharacterCard
        key={characterItem.char}
        character={characterItem.char}
        romanization={characterItem.romanization}
        meaning={characterItem.meaning}
        letterName={characterItem.letterName}
        class={characterItem.class}
        hideRomanization={hideRomanization}
        onSelectForPractice={onSelectForPractice}
        onFocus={onFocusCard ? () => onFocusCard(index) : undefined}
        isRare={characterItem.isRare}
        rareInfo={characterItem.rareInfo}
      />
    );
  };

  return (
    <div
      className={`grid gap-4 animate-fade-in ${
        selectedCategory === "Practice"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {items.map((item, index) => renderCard(item, index))}
    </div>
  );
};

export default GridView;
