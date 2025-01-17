import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Focus } from "lucide-react";
import CategorySelector from "@/components/CategorySelector";
import GridView from "@/components/GridView";
import SingleCardView from "@/components/SingleCardView";
import { CATEGORIES, THAI_CHARACTERS } from "@/data/thaiCharacters";
import { ThaiItem } from "@/types/thai";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [isSingleCardMode, setIsSingleCardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setCurrentCardIndex(0);
  }, [selectedCategory]);

  const getCurrentCategoryData = (): ThaiItem[] => {
    return THAI_CHARACTERS[selectedCategory as keyof typeof THAI_CHARACTERS] || [];
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    const categoryData = getCurrentCategoryData();
    if (direction === 'prev') {
      setCurrentCardIndex((prev) =>
        prev === 0 ? categoryData.length - 1 : prev - 1
      );
    } else {
      setCurrentCardIndex((prev) =>
        prev === categoryData.length - 1 ? 0 : prev + 1
      );
    }
  };

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

        <div className="flex justify-center mb-4">
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
        </div>

        {isSingleCardMode ? (
          <SingleCardView
            items={getCurrentCategoryData()}
            selectedCategory={selectedCategory}
            currentIndex={currentCardIndex}
            onNavigate={handleNavigation}
          />
        ) : (
          <GridView
            items={getCurrentCategoryData()}
            selectedCategory={selectedCategory}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Index;