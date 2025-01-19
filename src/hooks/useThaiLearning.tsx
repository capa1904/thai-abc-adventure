import { useState, useCallback } from "react";
import { CATEGORIES, THAI_CHARACTERS, THAI_CONSONANTS } from "@/data/thaiCharacters";
import { ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";

export const useThaiLearning = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isSingleCardMode, setIsSingleCardMode] = useState<boolean>(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [hideRomanization, setHideRomanization] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [previousCategory, setPreviousCategory] = useState<string | null>(null);
  const [previousCharacter, setPreviousCharacter] = useState<string | null>(null);
  const [previousViewMode, setPreviousViewMode] = useState<boolean | null>(null);
  const [previousCardIndex, setPreviousCardIndex] = useState<number | null>(null);
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);
  const [lastCategory, setLastCategory] = useState<string>(CATEGORIES[0]);

  const getCurrentCategoryData = useCallback((): ThaiItem[] => {
    if (selectedCategory === "Practice") {
      const practiceItems = THAI_CHARACTERS.Practice as ThaiWord[];
      if (!selectedCharacter) {
        return practiceItems;
      }
      const normChar = selectedCharacter
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return practiceItems.filter((word) => {
        const normWord = word.word
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return normWord.includes(normChar);
      });
    }

    if (selectedCategory === "Consonants") {
      if (selectedClass && ["Middle Class", "High Class", "Low Class"].includes(selectedClass)) {
        const cArray = THAI_CONSONANTS[selectedClass];
        return cArray.map((c) => ({
          ...c,
          class: selectedClass as "Middle Class" | "High Class" | "Low Class",
        }));
      } else {
        return Object.entries(THAI_CONSONANTS).flatMap(([cls, chars]) =>
          chars.map((c) => ({
            ...c,
            class: cls as "Middle Class" | "High Class" | "Low Class",
          }))
        );
      }
    }

    if (selectedCategory === "Vowels") {
      return THAI_CHARACTERS.Vowels as ThaiCharacter[];
    }
    if (selectedCategory === "Tones") {
      return THAI_CHARACTERS.Tones as ThaiCharacter[];
    }

    return [];
  }, [selectedCategory, selectedCharacter, selectedClass]);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedClass,
    setSelectedClass,
    isSingleCardMode,
    setIsSingleCardMode,
    currentCardIndex,
    setCurrentCardIndex,
    hideRomanization,
    setHideRomanization,
    selectedCharacter,
    setSelectedCharacter,
    previousCategory,
    setPreviousCategory,
    previousCharacter,
    setPreviousCharacter,
    previousViewMode,
    setPreviousViewMode,
    previousCardIndex,
    setPreviousCardIndex,
    isReturningFromPractice,
    setIsReturningFromPractice,
    lastCategory,
    setLastCategory,
    getCurrentCategoryData,
  };
};