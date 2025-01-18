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
import { ThaiItem } from "@/types/thai";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isSingleCardMode, setIsSingleCardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hideRomanization, setHideRomanization] = useState(false);

  useEffect(() => {
    setCurrentCardIndex(0);
    setSelectedClass(null);
  }, [selectedCategory]);

  const isValidClass = (
    className: string
  ): className is "Middle Class" | "High Class" | "Low Class" => {
    return ["Middle Class", "High Class", "Low Class"].includes(className);
  };

  const getCurrentCategoryData = (): ThaiItem[] => {
    let items =
      THAI_CHARACTERS[selectedCategory as keyof typeof THAI_CHARACTERS] || [];

    if (selectedCategory === "Consonants") {
      if (selectedClass && isValidClass(selectedClass)) {
        items =
          THAI_CONSONANTS[selectedClass].map((char) => ({
            ...char,
            class: selectedClass,
          })) || [];
      } else {
        // If no class is selected, combine all classes with their class information
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
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-thai-dark text-center mb-4">
          Learn Thai Alphabet
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Master the Thai script with our interactive learning tools
        </p>

        <CategorySelector
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="flex justify-center gap-4 mb-4">
          <ToggleGroup
            type="single"
            value={isSingleCardMode ? "single" : "grid"}
            onValueChange={(value) => setIsSingleCardMode(value === "single")}
          >
            <ToggleGroupItem value="grid" aria-label="Grid View">
              <Grid2X2 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="single" aria-label="Single Card View">
              <Focus className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          <Toggle
            aria-label="Toggle romanization"
            pressed={hideRomanization}
            onPressedChange={setHideRomanization}
            className="data-[state=on]:bg-thai-secondary"
          >
            {hideRomanization ? (
              <EyeOff className="h-4 w-4 mr-2" />
            ) : (
              <Eye className="h-4 w-4 mr-2" />
            )}
            {hideRomanization ? "Show Romanization" : "Hide Romanization"}
          </Toggle>
        </div>

        {selectedCategory === "Consonants" && (
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedClass(null)}
              className={!selectedClass ? "bg-thai-secondary text-white" : ""}
            >
              All Classes
            </Button>
            {consonantClasses.map((classType) => (
              <Button
                key={classType}
                variant="ghost"
                onClick={() => setSelectedClass(classType)}
                className={
                  selectedClass === classType
                    ? "bg-thai-secondary text-white"
                    : ""
                }
              >
                {classType}
              </Button>
            ))}
          </div>
        )}

        {isSingleCardMode ? (
          <SingleCardView
            items={getCurrentCategoryData()}
            selectedCategory={selectedCategory}
            currentIndex={currentCardIndex}
            onNavigate={handleNavigation}
            hideRomanization={hideRomanization}
          />
        ) : (
          <GridView
            items={getCurrentCategoryData()}
            selectedCategory={selectedCategory}
            hideRomanization={hideRomanization}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Index;
