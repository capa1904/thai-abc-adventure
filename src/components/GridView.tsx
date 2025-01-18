import React from "react";
import { ViewProps, ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";
import CharacterCard from "./CharacterCard";
import PracticeCard from "./PracticeCard";

const GridView: React.FC<ViewProps> = ({
  items,
  selectedCategory,
  hideRomanization,
  onSelectForPractice,
  onFocusCard,
}) => {
  const renderCard = (item: ThaiItem, index: number) => {
    if (!item) return null;

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
