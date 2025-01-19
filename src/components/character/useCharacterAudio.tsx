import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";

export const useCharacterAudio = (
  letterName: string | undefined,
  character: string
) => {
  const { toast } = useToast();

  const playTTS = useCallback(() => {
    if (!window.speechSynthesis) {
      toast({
        title: "Error",
        description: "Text-to-speech not supported in your browser",
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
        description: "Failed to play TTS audio",
        variant: "destructive",
      });
      console.error("SpeechSynthesis Error:", event);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [letterName, character, toast]);

  const playAudio = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const fileBase = (letterName || character)
        .replace(/\s+/g, "-")
        .toLowerCase();
      const audioUrl = `/thai-abc-adventure/audio/${fileBase}.mp3`;

      try {
        const resp = await fetch(audioUrl, { method: "HEAD" });
        if (resp.ok) {
          const audio = new Audio(audioUrl);
          audio.play().catch((err) => {
            console.error("Failed to play mp3:", err);
            playTTS();
          });
        } else {
          playTTS();
        }
      } catch (err) {
        console.error("Audio fetch error:", err);
        playTTS();
      }
    },
    [letterName, character, playTTS]
  );

  return { playAudio };
};
