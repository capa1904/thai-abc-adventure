import React from "react";
import { ViewProps } from "@/types/thai";
import CharacterCard from "./CharacterCard";
import PracticeCard from "./PracticeCard";

const GridView: React.FC<ViewProps> = ({
  items,
  selectedCategory,
  hideRomanization,
}) => {
  const renderCard = (item: any) => {
    if (!item) return null;

    if (selectedCategory === "Practice") {
      return (
        <PracticeCard
          key={item.word}
          word={item.word}
          phonetic={item.phonetic}
          meaning={item.meaning}
          hideRomanization={hideRomanization}
        />
      );
    }
    return (
      <CharacterCard
        key={item.char}
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
    <div
      className={`grid gap-4 animate-fade-in ${
        selectedCategory === "Practice"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {items.map((item) => renderCard(item))}
    </div>
  );
};

export default GridView;
