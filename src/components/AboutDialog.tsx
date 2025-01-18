import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  Volume2,
  Eye,
  EyeOff,
  Grid2X2,
  Focus,
  BookOpen,
} from "lucide-react";

const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-gray-600"
          title="About & Help"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            About Thai ABC Adventure
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-600">
              Thai ABC Adventure is an interactive learning tool designed to
              help you master the Thai alphabet. Learn consonants, vowels, and
              tones while practicing with real Thai words.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Learn consonants with their class categories (Middle ◆, High ▲,
                Low ▼)
              </li>
              <li>Study vowels and tone marks</li>
              <li>Practice with common Thai words</li>
              <li>Audio pronunciation for each character</li>
              <li>Toggle between grid and single card views</li>
              <li>Hide/show romanization to test your knowledge</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">How to Use</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">
                  <Grid2X2 className="h-4 w-4" />
                </span>
                <span>
                  <strong>Grid View:</strong> See all characters or words in a
                  grid layout
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">
                  <Focus className="h-4 w-4" />
                </span>
                <span>
                  <strong>Single Card View:</strong> Focus on one card at a time
                  with navigation arrows
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">
                  <Volume2 className="h-4 w-4" />
                </span>
                <span>
                  <strong>Audio:</strong> Click to hear the pronunciation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">
                  <BookOpen className="h-4 w-4" />
                </span>
                <span>
                  <strong>Practice Words:</strong> When viewing consonants or
                  vowels, click the practice button in the top-right corner of
                  any card to see words containing that character. Use the
                  "Back" button to return to the previous view.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">
                  <Eye className="h-4 w-4" />
                </span>
                <span>
                  <strong>Romanization:</strong> Toggle to show/hide
                  romanization and meanings
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">◆ ▲ ▼</span>
                <span>
                  <strong>Consonant Classes:</strong> Symbols indicate Middle,
                  High, and Low class consonants
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Start with Middle Class consonants (◆), as they're generally
                easier to learn
              </li>
              <li>
                Use the practice words to understand how characters are used in
                context
              </li>
              <li>
                Try hiding the romanization to test your recognition skills
              </li>
              <li>
                Listen to the audio repeatedly to improve your pronunciation
              </li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
