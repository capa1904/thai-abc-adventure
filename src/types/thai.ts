export interface ThaiCharacter {
  char: string;
  romanization: string;
  meaning?: string;
  letterName?: string;
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
  onNavigate?: (direction: 'prev' | 'next') => void;
}