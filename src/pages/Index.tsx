import React, { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Focus, Eye, EyeOff } from "lucide-react";
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

function isThaiWord(item: ThaiItem): item is ThaiWord {
  return "word" in item;
}

const Index = () => {
  // --------------------------------------------------------------------------
  // 1) STATES
  // --------------------------------------------------------------------------
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isSingleCardMode, setIsSingleCardMode] = useState<boolean>(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [hideRomanization, setHideRomanization] = useState<boolean>(false);

  // Falls wir von Consonants/Vowels/Tones nach Practice wechseln:
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  // Voriger Zustand, um beim Zurückkommen aus Practice wiederherzustellen:
  const [previousCategory, setPreviousCategory] = useState<string | null>(null);
  const [previousClass, setPreviousClass] = useState<string | null>(null);
  const [previousViewMode, setPreviousViewMode] = useState<boolean | null>(
    null
  );

  // Anstelle von `previousCardIndex`: wir speichern das *konkrete Zeichen*:
  const [previousCharacter, setPreviousCharacter] = useState<string | null>(
    null
  );

  // Flag, ob wir explizit aus Practice zurückkehren:
  const [isReturningFromPractice, setIsReturningFromPractice] = useState(false);

  // **NEU**: Wir speichern uns auch die „zuletzt bekannte Category“
  // Damit wir einen echten, manuell ausgelösten Kategorie-Wechsel erkennen können.
  const [lastCategory, setLastCategory] = useState<string>(selectedCategory);

  // --------------------------------------------------------------------------
  // 2) EFFEKTE
  // --------------------------------------------------------------------------

  // A) Kategorie-Wechsel-Effekt („CAT-Effekt“):
  //    Nur wenn sich selectedCategory ändert, NICHT "Practice" ist,
  //    wir NICHT aus Practice zurückkehren => reset Index & Class, usw.
  useEffect(() => {
    // Prüfen, ob wir tatsächlich eine neue Category haben
    const categoryHasChanged = selectedCategory !== lastCategory;
    const isRealUserChange =
      categoryHasChanged &&
      selectedCategory !== "Practice" &&
      !isReturningFromPractice;

    if (isRealUserChange) {
      console.log(
        "[CAT-Effekt] ECHTER Kategorienwechsel => reset index & class"
      );
      setCurrentCardIndex(0);
      setSelectedClass(null);
      setSelectedCharacter(null);
    }

    // Speichere *nach* dem Check die neue Category als „lastCategory“
    setLastCategory(selectedCategory);
  }, [selectedCategory, lastCategory, isReturningFromPractice]);

  // B) Wenn wir EXPLIZIT aus Practice zurückkehren:
  //    => Category, Class, Modus wiederherstellen und Index aus previousCharacter suchen
  useEffect(() => {
    if (isReturningFromPractice && previousCategory) {
      console.log("[useEffect RETURN] Start restoring old state...");
      if (previousClass) {
        console.log("   Restore previousClass =", previousClass);
        setSelectedClass(previousClass);
      }
      if (previousViewMode !== null) {
        console.log("   Restore isSingleCardMode =", previousViewMode);
        setIsSingleCardMode(previousViewMode);
      }

      // Minimales Timeout, damit Category+Class wirklich gesetzt sind
      setTimeout(() => {
        const newItems = getCurrentCategoryData();
        console.log(
          "   newItems =",
          newItems.map((i) => (isThaiWord(i) ? i.word : i.char))
        );

        if (previousCharacter) {
          console.log("[useEffect RETURN] Searching for", previousCharacter);
          const foundIndex = newItems.findIndex((item) => {
            if (isThaiWord(item)) {
              return item.word === previousCharacter;
            }
            // ThaiCharacter
            return item.char === previousCharacter;
          });
          console.log("   foundIndex =", foundIndex);
          if (foundIndex >= 0) {
            setCurrentCardIndex(foundIndex);
          } else {
            console.warn("   Not found -> index=0");
            setCurrentCardIndex(0);
          }
        }
        setIsReturningFromPractice(false);
        setPreviousCharacter(null);
      }, 0);
    }
  }, [
    isReturningFromPractice,
    previousCategory,
    previousClass,
    previousViewMode,
    previousCharacter,
  ]);

  // --------------------------------------------------------------------------
  // 3) DATEN-FUNKTION: getCurrentCategoryData
  // --------------------------------------------------------------------------
  const getCurrentCategoryData = React.useCallback((): ThaiItem[] => {
    let items =
      THAI_CHARACTERS[selectedCategory as keyof typeof THAI_CHARACTERS] || [];
    console.log("[getCurrentCategoryData]", selectedCategory, "base =", items);

    // Practice + selectedCharacter => Filter
    if (selectedCategory === "Practice" && selectedCharacter) {
      const practiceItems = THAI_CHARACTERS.Practice as ThaiWord[];
      const normalizedChar = selectedCharacter
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      items = practiceItems.filter((word) => {
        const normWord = word.word
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return normWord.includes(normalizedChar);
      });
      console.log("[getCurrentCategoryData] => Practice filter =>", items);
      return items;
    }

    // Consonants + optionaler Class-Filter
    if (selectedCategory === "Consonants") {
      if (
        selectedClass &&
        ["Middle Class", "High Class", "Low Class"].includes(selectedClass)
      ) {
        console.log(
          "[getCurrentCategoryData] => Consonants, class =",
          selectedClass
        );
        items = THAI_CONSONANTS[selectedClass].map((char) => ({
          ...char,
          class: selectedClass as "Middle Class" | "High Class" | "Low Class",
        }));
      } else {
        console.log("[getCurrentCategoryData] => Consonants, ALL classes");
        items = Object.entries(THAI_CONSONANTS).flatMap(
          ([className, chars]) => {
            return chars.map((char) => ({
              ...char,
              class: className as "Middle Class" | "High Class" | "Low Class",
            }));
          }
        );
      }
    }

    console.log("[getCurrentCategoryData] => final =", items);
    return items;
  }, [selectedCategory, selectedCharacter, selectedClass]);

  // Memoisiertes Array
  const currentItems = React.useMemo(
    () => getCurrentCategoryData(),
    [getCurrentCategoryData]
  );

  // --------------------------------------------------------------------------
  // 4) NAVIGATION IM SINGLE-CARD-VIEW
  // --------------------------------------------------------------------------
  const handleNavigation = (direction: "prev" | "next") => {
    const items = getCurrentCategoryData();
    setCurrentCardIndex((old) => {
      if (direction === "prev") {
        return old === 0 ? items.length - 1 : old - 1;
      } else {
        return old === items.length - 1 ? 0 : old + 1;
      }
    });
  };

  // --------------------------------------------------------------------------
  // 5) GRID -> SINGLE-CARD
  // --------------------------------------------------------------------------
  const handleFocusCard = (index: number) => {
    setCurrentCardIndex(index);
    setIsSingleCardMode(true);
  };

  // --------------------------------------------------------------------------
  // 6) WECHSEL ZU PRACTICE
  // --------------------------------------------------------------------------
  const handleSelectForPractice = (char: string) => {
    console.log("[handleSelectForPractice] storing previous state...");
    setPreviousCategory(selectedCategory);
    setPreviousClass(selectedClass);
    setPreviousViewMode(isSingleCardMode);
    setPreviousCharacter(char);

    // Jetzt umschalten auf Practice
    setSelectedCharacter(char);
    setSelectedCategory("Practice");
    setCurrentCardIndex(0);
  };

  // --------------------------------------------------------------------------
  // 7) BACK-BUTTON
  // --------------------------------------------------------------------------
  const handleBackClick = () => {
    // Wenn wir in "Practice" sind => zurück
    if (selectedCategory === "Practice" && previousCategory) {
      console.log(
        "[handleBackClick] returning from Practice ->",
        previousCategory
      );
      setIsReturningFromPractice(true);

      // Category zurücksetzen
      setSelectedCategory(previousCategory);

      // Aus Practice -> Consonants => selectedCharacter nullen
      setSelectedCharacter(null);
    } else {
      // Nur Single->Grid
      console.log("[handleBackClick] toggling single->grid");
      setIsSingleCardMode(false);
    }
  };

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------
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
              {/* Toggle: Romanization */}
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

              {/* Grid / Single */}
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

      {/* NAV: Kategorien & ggf. Consonant-Class */}
      <nav className="sticky top-[56px] z-40 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          {/* Haupt-Kategorien */}
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

          {/* Consonant-Class Auswahl */}
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
                  className={
                    selectedClass === classType ? "bg-thai-secondary/20" : ""
                  }
                  onClick={() => setSelectedClass(classType)}
                >
                  {classType}
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* MAIN: Grid oder SingleCard */}
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
