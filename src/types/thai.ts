export interface ThaiCharacter {
  char: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
  class?: "Middle Class" | "High Class" | "Low Class";
}

export interface ThaiWord {
  word: string;
  phonetic: string;
  meaning: string;
}

export type ThaiItem = ThaiCharacter | ThaiWord;

export interface ViewProps {
  items: ThaiItem[];
  selectedCategory: string;
  currentIndex?: number;
  onNavigate?: (direction: "prev" | "next") => void;
  hideRomanization?: boolean;
  onSelectForPractice?: (char: string) => void;
  onFocusCard?: (index: number) => void;
}
