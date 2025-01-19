import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedClass: string | null;
  onSelectClass: (classType: string | null) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedClass,
  onSelectClass,
}) => {
  const consonantClasses = ["Middle Class", "High Class", "Low Class"];

  return (
    <nav className="sticky top-[56px] z-40 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto pb-2 pt-2 hide-scrollbar">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "ghost"}
              className={cn(
                "rounded-full px-4 py-1 text-sm whitespace-nowrap",
                selectedCategory === cat
                  ? "bg-thai-secondary text-white"
                  : "hover:bg-thai-secondary/10"
              )}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {selectedCategory === "Consonants" && (
          <div className="flex gap-1 overflow-x-auto pb-2 hide-scrollbar">
            <Button
              size="sm"
              variant="ghost"
              className={!selectedClass ? "bg-thai-secondary/20" : ""}
              onClick={() => onSelectClass(null)}
            >
              All Classes
            </Button>
            {consonantClasses.map((classType) => (
              <Button
                key={classType}
                size="sm"
                variant="ghost"
                onClick={() => onSelectClass(classType)}
                className={selectedClass === classType ? "bg-thai-secondary/20" : ""}
              >
                {classType}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default CategoryNav;