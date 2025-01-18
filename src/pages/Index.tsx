import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Focus, Eye, EyeOff } from "lucide-react";
import GridView from "@/components/GridView";
import SingleCardView from "@/components/SingleCardView";
import {
  CATEGORIES,
  THAI_CHARACTERS,
  THAI_CONSONANTS,
} from "@/data/thaiCharacters";
import { ThaiItem, ThaiWord, ThaiCharacter } from "@/types/thai";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import AboutDialog from "@/components/AboutDialog";

// Helper-Guard
function isThaiWord(item: ThaiItem): item is ThaiWord {
  return "word" in item;
}

const Index = () => {
  // ----------------------------------------------------------------------------
  // STATES
  // ----------------------------------------------------------------------------
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

  // Voriger Zustand (für „Back from Practice“)
  const [previousCategory, setPreviousCategory] = useState<string | null>(null);
  const [previousCharacter, setPreviousCharacter] = useState<string | null>(
    null
  );
  const [previousViewMode, setPreviousViewMode] = useState<boolean | null>(
    null
  );

  // Ob wir explizit aus „Practice“ zurückkehren
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);

  // Letzte bekannte Kategorie, um echten Wechsel von „Back“ zu unterscheiden
  const [lastCategory, setLastCategory] = useState<string>(CATEGORIES[0]);

  // ----------------------------------------------------------------------------
  // useEffect: Echter Kategorie-Wechsel
  // ----------------------------------------------------------------------------
  useEffect(() => {
    const categoryHasChanged = selectedCategory !== lastCategory;
    const isRealUserChange =
      categoryHasChanged &&
      selectedCategory !== "Practice" &&
      !isReturningFromPractice;

    if (isRealUserChange) {
      // Reset
      setCurrentCardIndex(0);
      setSelectedClass(null);
      setSelectedCharacter(null);
    }

    setLastCategory(selectedCategory);
  }, [selectedCategory, lastCategory, isReturningFromPractice]);

  // ----------------------------------------------------------------------------
  // useEffect: Zurück aus Practice
  // ----------------------------------------------------------------------------
  useEffect(() => {
    if (isReturningFromPractice && previousCategory) {
      // z.B. SingleCardMode wiederherstellen
      if (previousViewMode !== null) {
        setIsSingleCardMode(previousViewMode);
      }
      setIsReturningFromPractice(false);
      setPreviousCharacter(null);
    }
  }, [isReturningFromPractice, previousCategory, previousViewMode]);

  // ----------------------------------------------------------------------------
  // getCurrentCategoryData
  // ----------------------------------------------------------------------------
  const getCurrentCategoryData = React.useCallback((): ThaiItem[] => {
    if (selectedCategory === "Practice") {
      const practiceItems = THAI_CHARACTERS.Practice as ThaiWord[];
      // Falls kein bestimmtes Zeichen => alle
      if (!selectedCharacter) {
        return practiceItems;
      }
      // Sonst filtern
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
      if (
        selectedClass &&
        ["Middle Class", "High Class", "Low Class"].includes(selectedClass)
      ) {
        const cArray = THAI_CONSONANTS[selectedClass];
        return cArray.map((c) => ({
          ...c,
          class: selectedClass as "Middle Class" | "High Class" | "Low Class",
        }));
      } else {
        // Alle Klassen
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

  const currentItems = React.useMemo(
    () => getCurrentCategoryData(),
    [getCurrentCategoryData]
  );

  // ----------------------------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------------------------
  const handleNavigation = (direction: "prev" | "next") => {
    const items = getCurrentCategoryData();
    setCurrentCardIndex((old) => {
      if (direction === "prev") {
        return old === 0 ? items.length - 1 : old - 1;
      }
      return old === items.length - 1 ? 0 : old + 1;
    });
  };

  // ----------------------------------------------------------------------------
  // Grid -> SingleCard
  // ----------------------------------------------------------------------------
  const handleFocusCard = (index: number) => {
    setCurrentCardIndex(index);
    setIsSingleCardMode(true);
  };

  // ----------------------------------------------------------------------------
  // Select for Practice
  // ----------------------------------------------------------------------------
  const handleSelectForPractice = (char: string) => {
    setPreviousCategory(selectedCategory);
    setPreviousViewMode(isSingleCardMode);
    setPreviousCharacter(char);

    setSelectedCharacter(char);
    setSelectedCategory("Practice");
    setCurrentCardIndex(0);
  };

  // ----------------------------------------------------------------------------
  // Back-Button
  // ----------------------------------------------------------------------------
  const handleBackClick = () => {
    if (selectedCategory === "Practice" && previousCategory) {
      setIsReturningFromPractice(true);
      setSelectedCategory(previousCategory);
      setSelectedCharacter(null);
    } else {
      setIsSingleCardMode(false);
    }
  };

  // ----------------------------------------------------------------------------
  // Render
  // ----------------------------------------------------------------------------
  const consonantClasses = ["Middle Class", "High Class", "Low Class"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {((selectedCategory === "Practice" && previousCategory) ||
                isSingleCardMode) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-gray-600 hover:text-thai-dark"
                  onClick={handleBackClick}
                >
                  ← Back
                </Button>
              )}
              <h1 className="text-xl font-bold text-thai-dark">
                Thai Alphabet
              </h1>
            </div>
            <div className="flex gap-2">
              <Toggle
                aria-label="Toggle romanization"
                pressed={hideRomanization}
                onPressedChange={setHideRomanization}
                className="h-8 data-[state=on]:bg-thai-secondary"
              >
                {hideRomanization ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Toggle>
              <ToggleGroup
                type="single"
                value={isSingleCardMode ? "single" : "grid"}
                onValueChange={(value) =>
                  setIsSingleCardMode(value === "single")
                }
              >
                <ToggleGroupItem
                  value="grid"
                  aria-label="Grid View"
                  className="h-8 w-8 p-0"
                >
                  <Grid2X2 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="single"
                  aria-label="Single Card View"
                  className="h-8 w-8 p-0"
                >
                  <Focus className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="w-px h-8 bg-gray-200 mx-1" />
              <AboutDialog />
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORY NAV */}
      <nav className="sticky top-[56px] z-40 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto pb-2 pt-2 hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "ghost"}
                className={cn(
                  "rounded-full px-4 py-1 text-sm whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-thai-secondary text-white"
                    : "hover:bg-thai-secondary/10"
                )}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === "Practice" && selectedCharacter && (
                  <span className="ml-2 text-xs">({selectedCharacter})</span>
                )}
              </Button>
            ))}
          </div>

          {/* Consonant Classes */}
          {selectedCategory === "Consonants" && (
            <div className="flex gap-1 overflow-x-auto pb-2 hide-scrollbar">
              <Button
                size="sm"
                variant="ghost"
                className={!selectedClass ? "bg-thai-secondary/20" : ""}
                onClick={() => setSelectedClass(null)}
              >
                All Classes
              </Button>
              {consonantClasses.map((classType) => (
                <Button
                  key={classType}
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedClass(classType)}
                  className={
                    selectedClass === classType ? "bg-thai-secondary/20" : ""
                  }
                >
                  {classType}
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto p-4">
        {isSingleCardMode ? (
          <SingleCardView
            items={currentItems}
            selectedCategory={selectedCategory}
            currentIndex={currentCardIndex}
            onNavigate={handleNavigation}
            hideRomanization={hideRomanization}
            onSelectForPractice={
              selectedCategory !== "Practice"
                ? handleSelectForPractice
                : undefined
            }
          />
        ) : (
          <GridView
            items={currentItems}
            selectedCategory={selectedCategory}
            hideRomanization={hideRomanization}
            onSelectForPractice={
              selectedCategory !== "Practice"
                ? handleSelectForPractice
                : undefined
            }
            onFocusCard={handleFocusCard}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
