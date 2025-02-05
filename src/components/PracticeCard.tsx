import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PracticeCardProps {
  word: string;
  phonetic: string;
  meaning: string;
  className?: string;
  hideRomanization?: boolean;
}

const PracticeCard = ({
  word,
  phonetic,
  meaning,
  className,
  hideRomanization = false,
}: PracticeCardProps) => {
  const { toast } = useToast();

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

      // Create and configure the utterance
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "th-TH"; // Set language to Thai
      utterance.rate = 0.8; // Slightly slower rate for better clarity
      utterance.volume = 1.0; // Maximum volume

      // Handle errors
      utterance.onerror = (event) => {
        toast({
          title: "Error",
          description: "Failed to play audio",
          variant: "destructive",
        });
        console.error("SpeechSynthesis Error:", event);
      };

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Play the new utterance
      window.speechSynthesis.speak(utterance);
    },
    [word, toast]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        "bg-thai-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-xl relative",
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
      <span className="text-4xl font-bold text-thai-dark">{word}</span>
      {!hideRomanization && (
        <>
          <span className="text-xl text-thai-secondary font-medium">
            {phonetic}
          </span>
          <span className="text-sm text-gray-600 italic">{meaning}</span>
        </>
      )}
    </motion.div>
  );
};

export default PracticeCard;
