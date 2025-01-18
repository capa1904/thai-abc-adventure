import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CharacterCardProps {
  character: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
  class?: string;
  className?: string;
  hideRomanization?: boolean;
}

const CharacterCard = ({ 
  character, 
  romanization, 
  meaning, 
  letterName, 
  class: characterClass, 
  className,
  hideRomanization = false
}: CharacterCardProps) => {
  const { toast } = useToast();

  const playAudio = useCallback((e: React.MouseEvent) => {
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
    utterance.lang = 'th-TH';
    utterance.rate = 0.8;
    utterance.volume = 1.0;

    utterance.onerror = (event) => {
      toast({
        title: "Error",
        description: "Failed to play audio",
        variant: "destructive",
      });
      console.error('SpeechSynthesis Error:', event);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [letterName, character, toast]);

  const getClassSymbol = (classType?: string) => {
    switch(classType) {
      case "Middle Class":
        return "◆";
      case "High Class":
        return "▲";
      case "Low Class":
        return "●";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors hover:bg-thai-primary relative",
        className
      )}
    >
      {characterClass && (
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span className="text-xs text-gray-400">{characterClass}</span>
          <span className="text-sm text-thai-secondary" title={characterClass}>
            {getClassSymbol(characterClass)}
          </span>
        </div>
      )}
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-2 right-2 hover:bg-thai-primary/20 z-10"
        onClick={playAudio}
      >
        <Volume2 className="h-4 w-4" />
      </Button>
      <span className="text-6xl font-bold text-thai-dark">{character}</span>
      {!hideRomanization && (
        <span className="text-xl text-thai-secondary font-medium">{romanization}</span>
      )}
      {meaning && <span className="text-sm text-gray-600">{meaning}</span>}
      {letterName && <span className="text-sm text-thai-secondary">{letterName}</span>}
    </motion.div>
  );
};

export default CharacterCard;