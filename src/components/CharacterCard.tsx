import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Volume2, BookOpen, Focus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CharacterCardProps {
  character: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
  class?: string;
  className?: string;
  hideRomanization?: boolean;
  onSelectForPractice?: (char: string) => void;
  onFocus?: () => void;
}

const CharacterCard = ({
  character,
  romanization,
  meaning,
  letterName,
  class: characterClass,
  className,
  hideRomanization = false,
  onSelectForPractice,
  onFocus,
}: CharacterCardProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (onSelectForPractice) {
      onSelectForPractice(character);
    }
  };

  const playAudio = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!window.speechSynthesis) {
        toast({
          title: "Error",
          description: "Text-to-speech is not supported in your browser",
          variant: "destructive",
        });
        return;
      }

      const utterance = new SpeechSynthesisUtterance(letterName || character);
      utterance.lang = "th-TH";
      utterance.rate = 0.8;
      utterance.volume = 1.0;

      utterance.onerror = (event) => {
        toast({
          title: "Error",
          description: "Failed to play audio",
          variant: "destructive",
        });
        console.error("SpeechSynthesis Error:", event);
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    },
    [letterName, character, toast]
  );

  const getClassSymbol = (classType?: string) => {
    switch (classType) {
      case "Middle Class":
        return "◆";
      case "High Class":
        return "▲";
      case "Low Class":
        return "▼";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-xl relative",
        className
      )}
      data-char={character}
    >
      {characterClass && (
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span className="text-sm text-gray-300" title={characterClass}>
            {getClassSymbol(characterClass)}
          </span>
        </div>
      )}
      <div className="absolute top-2 right-2 flex gap-1">
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
          onClick={playAudio}
          title="Play audio"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>
      <span className="text-6xl font-bold text-thai-dark select-text">
        {character}
      </span>
      {!hideRomanization && (
        <>
          <span className="text-xl text-thai-secondary font-medium select-text">
            {romanization}
          </span>
          {meaning && (
            <span className="text-sm text-gray-600 select-text">{meaning}</span>
          )}
        </>
      )}
      {letterName && (
        <span className="text-sm text-thai-secondary select-text">
          {letterName}
        </span>
      )}
    </motion.div>
  );
};

export default CharacterCard;
