import React, { useEffect } from "react";
import GridView from "@/components/GridView";
import SingleCardView from "@/components/SingleCardView";
import { CATEGORIES } from "@/data/thaiCharacters";
import ThaiHeader from "@/components/ThaiHeader";
import CategoryNav from "@/components/CategoryNav";
import { useThaiLearning } from "@/hooks/useThaiLearning";

const Index: React.FC = () => {
  const {
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
    previousViewMode,
    setPreviousViewMode,
    previousCardIndex,
    setPreviousCardIndex,
    isReturningFromPractice,
    setIsReturningFromPractice,
    lastCategory,
    setLastCategory,
    getCurrentCategoryData,
  } = useThaiLearning();

  useEffect(() => {
    const categoryHasChanged = selectedCategory !== lastCategory;
    const isRealUserChange =
      categoryHasChanged &&
      selectedCategory !== "Practice" &&
      !isReturningFromPractice;

    if (isRealUserChange) {
      setCurrentCardIndex(0);
      setSelectedClass(null);
      setSelectedCharacter(null);
    }

    setLastCategory(selectedCategory);
  }, [selectedCategory, lastCategory, isReturningFromPractice]);

  useEffect(() => {
    if (isReturningFromPractice && previousCategory) {
      if (previousViewMode !== null) {
        setIsSingleCardMode(previousViewMode);
      }

      setTimeout(() => {
        if (previousCardIndex !== null) {
          setCurrentCardIndex(previousCardIndex);
        }
        setIsReturningFromPractice(false);
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

  const handleNavigation = (direction: "prev" | "next") => {
    const items = getCurrentCategoryData();
    setCurrentCardIndex((old) => {
      if (direction === "prev") {
        return old === 0 ? items.length - 1 : old - 1;
      }
      return old === items.length - 1 ? 0 : old + 1;
    });
  };

  const handleFocusCard = (index: number) => {
    setCurrentCardIndex(index);
    setIsSingleCardMode(true);
  };

  const handleSelectForPractice = (char: string) => {
    setPreviousCategory(selectedCategory);
    setPreviousViewMode(isSingleCardMode);
    setPreviousCardIndex(currentCardIndex);
    setSelectedCharacter(char);
    setSelectedCategory("Practice");
    setCurrentCardIndex(0);
  };

  const handleBackClick = () => {
    if (selectedCategory === "Practice" && previousCategory) {
      setIsReturningFromPractice(true);
      setSelectedCategory(previousCategory);
      setSelectedCharacter(null);
    } else {
      setIsSingleCardMode(false);
    }
  };

  const currentItems = getCurrentCategoryData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white">
      <ThaiHeader
        hideRomanization={hideRomanization}
        onToggleRomanization={setHideRomanization}
        isSingleCardMode={isSingleCardMode}
        onToggleViewMode={(value) => setIsSingleCardMode(value === "single")}
        onBackClick={handleBackClick}
        showBackButton={
          (selectedCategory === "Practice" && previousCategory) || isSingleCardMode
        }
      />
      <CategoryNav
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedClass={selectedClass}
        onSelectClass={setSelectedClass}
      />
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