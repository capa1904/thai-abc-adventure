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

// Helper to check if an item is a word or a character
function isThaiWord(item: ThaiItem): item is ThaiWord {
  return "word" in item;
}

const Index: React.FC = () => {
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

  // The character that triggered going to Practice:
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  // Store previous category info so we can go back from Practice
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

  // If we are explicitly returning from Practice
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);

  // Track the last category to differentiate a real user change from a "Practice" return
  const [lastCategory, setLastCategory] = useState<string>(CATEGORIES[0]);

  // ----------------------------------------------------------------------------
  // 1) useEffect: Real Category Change
  // ----------------------------------------------------------------------------
  useEffect(() => {
    const categoryHasChanged = selectedCategory !== lastCategory;
    const isRealUserChange =
      categoryHasChanged &&
      selectedCategory !== "Practice" &&
      !isReturningFromPractice;

    // If user truly picked a new category
    if (isRealUserChange) {
      // Reset index, class, character
      setCurrentCardIndex(0);
      setSelectedClass(null);
      setSelectedCharacter(null);
    }

    setLastCategory(selectedCategory);
  }, [selectedCategory, lastCategory, isReturningFromPractice]);

  // ----------------------------------------------------------------------------
  // 2) useEffect: Return from Practice => restore single-card index
  // ----------------------------------------------------------------------------
  useEffect(() => {
    if (isReturningFromPractice && previousCategory) {
      // Restore Single/Grid mode
      if (previousViewMode !== null) {
        setIsSingleCardMode(previousViewMode);
      }

      // Then do a small timeout so the array can build, and we can set the correct card index
      setTimeout(() => {
        if (previousCardIndex !== null) {
          setCurrentCardIndex(previousCardIndex);
        }
        setIsReturningFromPractice(false);
        // Clear out so we don't keep reusing them
        setPreviousCharacter(null);
        setPreviousCardIndex(null);
      }, 120);
    }
  }, [
    isReturningFromPractice,
    previousCategory,
    previousViewMode,
    previousCardIndex,
  ]);

  // ----------------------------------------------------------------------------
  // getCurrentCategoryData
  // ----------------------------------------------------------------------------
  const getCurrentCategoryData = React.useCallback((): ThaiItem[] => {
    if (selectedCategory === "Practice") {
      const practiceItems = THAI_CHARACTERS.Practice as ThaiWord[];
      // If no specific char -> show all
      if (!selectedCharacter) {
        return practiceItems;
      }
      // else filter for the selectedCharacter
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
        // All classes combined
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
  // handleNavigation (Single-Card)
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
  // handleFocusCard -> Switch from Grid to Single-Card
  // ----------------------------------------------------------------------------
  const handleFocusCard = (index: number) => {
    setCurrentCardIndex(index);
    setIsSingleCardMode(true);
  };

  // ----------------------------------------------------------------------------
  // handleSelectForPractice
  // ----------------------------------------------------------------------------
  const handleSelectForPractice = (char: string) => {
    // Save the previous state
    setPreviousCategory(selectedCategory);
    setPreviousViewMode(isSingleCardMode);
    setPreviousCharacter(char);
    setPreviousCardIndex(currentCardIndex);

    // Switch to Practice
    setSelectedCharacter(char);
    setSelectedCategory("Practice");
    setCurrentCardIndex(0);
  };

  // ----------------------------------------------------------------------------
  // handleBackClick
  // ----------------------------------------------------------------------------
  const handleBackClick = () => {
    // If in Practice => go back
    if (selectedCategory === "Practice" && previousCategory) {
      setIsReturningFromPractice(true);
      setSelectedCategory(previousCategory);
      setSelectedCharacter(null);
    } else {
      // SingleCard -> Grid
      setIsSingleCardMode(false);
    }
  };

  // ----------------------------------------------------------------------------
  // RENDER
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
              {["Middle Class", "High Class", "Low Class"].map((classType) => (
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
