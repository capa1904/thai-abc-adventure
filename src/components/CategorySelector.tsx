import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySelector = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          className={cn(
            "px-6 py-2 rounded-full transition-all",
            selectedCategory === category
              ? "bg-thai-secondary text-white"
              : "hover:bg-thai-primary"
          )}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;