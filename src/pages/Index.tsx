import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Focus, Eye, EyeOff } from "lucide-react";
import CategorySelector from "@/components/CategorySelector";
import GridView from "@/components/GridView";
import SingleCardView from "@/components/SingleCardView";
import {
  CATEGORIES,
  THAI_CHARACTERS,
  THAI_CONSONANTS,
} from "@/data/thaiCharacters";
import { ThaiItem, ThaiWord } from "@/types/thai";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import AboutDialog from "@/components/AboutDialog";

const isThaiWord = (item: ThaiItem): item is ThaiWord => {
  return "word" in item;
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isSingleCardMode, setIsSingleCardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hideRomanization, setHideRomanization] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [previousCharacter, setPreviousCharacter] = useState<string | null>(
    null
  );
  const [previousCategory, setPreviousCategory] = useState<string | null>(null);
  const [previousCardIndex, setPreviousCardIndex] = useState<number | null>(
    null
  );
  const [previousViewMode, setPreviousViewMode] = useState<boolean | null>(
    null
  );
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);

  useEffect(() => {
    const isReturningFromPractice =
      previousCategory === selectedCategory && previousCardIndex !== null;

    if (!isReturningFromPractice) {
      setCurrentCardIndex(0);
    }

    if (selectedCategory !== "Practice") {
      setSelectedCharacter(null);
    }
    setSelectedClass(null);
  }, [selectedCategory, previousCategory, previousCardIndex]);

  useEffect(() => {
    if (selectedCategory === "Consonants" && previousCharacter) {
      setTimeout(() => {
        const charElement = document.querySelector(
          `[data-char="${previousCharacter}"]`
        );
        if (charElement) {
          charElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      setPreviousCharacter(null);
    }
  }, [selectedCategory, previousCharacter]);

  useEffect(() => {
    if (
      isReturningFromPractice &&
      previousCardIndex !== null &&
      previousViewMode
    ) {
      setCurrentCardIndex(previousCardIndex);
      setIsSingleCardMode(true);
      setIsReturningFromPractice(false);
      setPreviousCategory(null);
      setPreviousCardIndex(null);
      setPreviousViewMode(null);
    }
  }, [isReturningFromPractice, previousCardIndex, previousViewMode]);

  const isValidClass = (
    className: string
  ): className is "Middle Class" | "High Class" | "Low Class" => {
    return ["Middle Class", "High Class", "Low Class"].includes(className);
  };

  const handleSelectForPractice = (char: string) => {
    console.log("Selecting character for practice:", char);
    setPreviousCharacter(char);
    setPreviousCategory(selectedCategory);
    setPreviousCardIndex(currentCardIndex);
    setPreviousViewMode(isSingleCardMode);
    setSelectedCharacter(char);
    setSelectedCategory("Practice");
    setCurrentCardIndex(0);
  };

  const getCurrentCategoryData = React.useCallback((): ThaiItem[] => {
    console.log("Getting category data:", {
      selectedCategory,
      selectedCharacter,
      selectedClass,
    });

    let items =
      THAI_CHARACTERS[selectedCategory as keyof typeof THAI_CHARACTERS] || [];

    if (selectedCategory === "Practice" && selectedCharacter) {
      console.log("Filtering practice items for character:", selectedCharacter);
      const practiceItems = THAI_CHARACTERS.Practice as ThaiWord[];
      const filteredItems = practiceItems.filter((word) => {
        const normalizedWord = word.word
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const normalizedChar = selectedCharacter
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const matches = normalizedWord.includes(normalizedChar);
        console.log(
          `Word: ${word.word}, Normalized: ${normalizedWord}, Matches: ${matches}`
        );
        return matches;
      });
      console.log("Filtered items:", filteredItems.length, "matches found");
      return filteredItems;
    }

    if (selectedCategory === "Consonants") {
      if (selectedClass && isValidClass(selectedClass)) {
        items =
          THAI_CONSONANTS[selectedClass].map((char) => ({
            ...char,
            class: selectedClass,
          })) || [];
      } else {
        items = Object.entries(THAI_CONSONANTS).flatMap(
          ([className, chars]) => {
            if (isValidClass(className)) {
              return chars.map((char) => ({
                ...char,
                class: className,
              }));
            }
            return [];
          }
        );
      }
    }

    return items;
  }, [selectedCategory, selectedCharacter, selectedClass]);

  const handleNavigation = (direction: "prev" | "next") => {
    const categoryData = getCurrentCategoryData();
    if (direction === "prev") {
      setCurrentCardIndex((prev) =>
        prev === 0 ? categoryData.length - 1 : prev - 1
      );
    } else {
      setCurrentCardIndex((prev) =>
        prev === categoryData.length - 1 ? 0 : prev + 1
      );
    }
  };

  const consonantClasses = ["Middle Class", "High Class", "Low Class"];

  const currentItems = React.useMemo(
    () => getCurrentCategoryData(),
    [getCurrentCategoryData]
  );

  const handleFocusCard = (index: number) => {
    setCurrentCardIndex(index);
    setIsSingleCardMode(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white">
      {/* Main Header - Always visible */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {((selectedCategory === "Practice" && selectedCharacter) ||
                isSingleCardMode) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-gray-600 hover:text-thai-dark"
                  onClick={() => {
                    if (selectedCategory === "Practice") {
                      const category = previousCategory || CATEGORIES[0];
                      if (previousViewMode) {
                        setIsReturningFromPractice(true);
                      } else {
                        setIsSingleCardMode(false);
                      }
                      setSelectedCategory(category);
                      setSelectedCharacter(null);
                    } else {
                      setIsSingleCardMode(false);
                    }
                  }}
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

      {/* Category Navigation */}
      <nav className="sticky top-[56px] z-40 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto pb-2 pt-2 hide-scrollbar">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className={cn(
                  "rounded-full px-4 py-1 text-sm whitespace-nowrap",
                  selectedCategory === category
                    ? "bg-thai-secondary text-white"
                    : "hover:bg-thai-secondary/10"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category === "Practice" && selectedCharacter && (
                  <span className="ml-2 text-xs">({selectedCharacter})</span>
                )}
              </Button>
            ))}
          </div>

          {/* Consonant Classes - Only show for Consonants */}
          {selectedCategory === "Consonants" && (
            <div className="flex gap-1 overflow-x-auto pb-2 hide-scrollbar">
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "rounded-full px-3 text-xs whitespace-nowrap",
                  !selectedClass ? "bg-thai-secondary/20" : ""
                )}
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
                  className={cn(
                    "rounded-full px-3 text-xs whitespace-nowrap",
                    selectedClass === classType ? "bg-thai-secondary/20" : ""
                  )}
                >
                  {classType}
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
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
