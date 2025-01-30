// \\?\C:\git\temp\thai-abc-adventure\src\hooks\useThaiLearning.tsx

import { useState, useCallback } from "react";
import {
  CATEGORIES,
  THAI_CHARACTERS,
  THAI_CONSONANTS, // <-- Wichtig: importieren
} from "@/data/thaiCharacters";
import { ExtendedThaiWord } from "@/data/practiceWords";
import { ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";

export const useThaiLearning = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isSingleCardMode, setIsSingleCardMode] = useState<boolean>(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [hideRomanization, setHideRomanization] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [previousCategory, setPreviousCategory] = useState<string | null>(null);
  const [previousCharacter, setPreviousCharacter] = useState<string | null>(
    null
  );
  const [previousViewMode, setPreviousViewMode] = useState<boolean | null>(
    null
  );
  const [previousCardIndex, setPreviousCardIndex] = useState<number | null>(
    null
  );
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);
  const [lastCategory, setLastCategory] = useState<string>(CATEGORIES[0]);

  /**
   * Prüfen, ob ein String zu den Vokalen gehört
   * (entweder in char oder displayForm).
   */
  const isVowelChar = useCallback((charOrDisplay: string) => {
    const vowels = THAI_CHARACTERS.Vowels as (ThaiCharacter & {
      displayForm?: string;
    })[];
    return vowels.some(
      (v) =>
        v.char === charOrDisplay ||
        (v.displayForm && v.displayForm === charOrDisplay)
    );
  }, []);

  const getCurrentCategoryData = useCallback((): ThaiItem[] => {
    // 1) PRACTICE
    if (selectedCategory === "Practice") {
      const practiceItems = THAI_CHARACTERS.Practice as ExtendedThaiWord[];
      if (!selectedCharacter) {
        return practiceItems;
      }

      // Falls Vokal => Filtern via associatedVowels
      if (isVowelChar(selectedCharacter)) {
        return practiceItems.filter((word) => {
          if (!word.associatedVowels) return false;
          return word.associatedVowels.includes(selectedCharacter);
        });
      } else {
        // Consonant/Tone -> includes
        const normChar = selectedCharacter
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return practiceItems.filter((w) => {
          const normWord = w.word
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return normWord.includes(normChar);
        });
      }
    }

    // 2) CONSONANTS
    if (selectedCategory === "Consonants") {
      // Falls "Middle Class", "High Class", "Low Class" gewählt:
      if (
        selectedClass &&
        ["Middle Class", "High Class", "Low Class"].includes(selectedClass)
      ) {
        const cArray = THAI_CONSONANTS[selectedClass]; // <-- WICHTIG
        // cArray existiert jetzt, also kein undefined.map mehr
        return cArray.map((c) => ({
          ...c,
          class: selectedClass as "Middle Class" | "High Class" | "Low Class",
        }));
      } else {
        // "All Classes": Alle Consonants zusammenfassen
        return Object.values(THAI_CONSONANTS)
          .flat()
          .map((c) => ({ ...c })); // optional, wenn du class=... willst, füg es manuell hinzu
      }
    }

    // 3) VOWELS
    if (selectedCategory === "Vowels") {
      return THAI_CHARACTERS.Vowels as ThaiCharacter[];
    }

    // 4) TONES
    if (selectedCategory === "Tones") {
      return THAI_CHARACTERS.Tones as ThaiCharacter[];
    }

    return [];
  }, [selectedCategory, selectedCharacter, selectedClass, isVowelChar]);

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
