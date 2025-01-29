import React from "react";
import { Button } from "@/components/ui/button";
import { Volume2, BookOpen, Focus } from "lucide-react";

interface CharacterActionsProps {
  onPlayAudio: (e: React.MouseEvent) => void;
  onSelectForPractice?: (char: string) => void;
  onFocus?: () => void;
  character: string;
}

export const CharacterActions: React.FC<CharacterActionsProps> = ({
  onPlayAudio,
  onSelectForPractice,
  onFocus,
  character,
}) => {
  return (
    <div className="flex gap-1">
      {onSelectForPractice && (
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-thai-primary/20"
          onClick={(e) => {
            e.stopPropagation();
            onSelectForPractice(character);
          }}
          title="View practice words"
        >
          <BookOpen className="h-4 w-4" />
        </Button>
      )}
      {onFocus && (
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-thai-primary/20"
          onClick={(e) => {
            e.stopPropagation();
            onFocus();
          }}
          title="Focus view"
        >
          <Focus className="h-4 w-4" />
        </Button>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-thai-primary/20"
        onClick={onPlayAudio}
        title="Play audio"
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
