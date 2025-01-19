import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Eye, EyeOff, Grid2X2, Focus } from "lucide-react";
import AboutDialog from "@/components/AboutDialog";

interface ThaiHeaderProps {
  hideRomanization: boolean;
  onToggleRomanization: (hide: boolean) => void;
  isSingleCardMode: boolean;
  onToggleViewMode: (value: string) => void;
  onBackClick?: () => void;
  showBackButton: boolean;
}

const ThaiHeader: React.FC<ThaiHeaderProps> = ({
  hideRomanization,
  onToggleRomanization,
  isSingleCardMode,
  onToggleViewMode,
  onBackClick,
  showBackButton,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <button
                className="text-sm text-gray-600 hover:text-thai-dark"
                onClick={onBackClick}
              >
                ← Back
              </button>
            )}
            <h1 className="text-xl font-bold text-thai-dark">Thai Alphabet</h1>
          </div>
          <div className="flex gap-2">
            <Toggle
              aria-label="Toggle romanization"
              pressed={hideRomanization}
              onPressedChange={onToggleRomanization}
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
              onValueChange={onToggleViewMode}
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
  );
};

export default ThaiHeader;