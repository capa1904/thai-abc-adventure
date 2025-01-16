import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

interface CharacterCardProps {
  character: string;
  romanization: string;
  meaning?: string;
  className?: string;
}

const CharacterCard = ({ character, romanization, meaning, className }: CharacterCardProps) => {
  const playAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Create and configure the utterance
    const utterance = new SpeechSynthesisUtterance(character);
    utterance.lang = 'th-TH'; // Set language to Thai
    utterance.rate = 0.8; // Slightly slower rate for better clarity
    utterance.volume = 1.0; // Maximum volume
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Play the new utterance
    window.speechSynthesis.speak(utterance);
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
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-2 right-2 hover:bg-thai-primary/20 z-10"
        onClick={playAudio}
      >
        <Volume2 className="h-4 w-4" />
      </Button>
      <span className="text-6xl font-bold text-thai-dark">{character}</span>
      <span className="text-xl text-thai-secondary font-medium">{romanization}</span>
      {meaning && <span className="text-sm text-gray-600">{meaning}</span>}
    </motion.div>
  );
};

export default CharacterCard;