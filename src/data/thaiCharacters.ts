import { ThaiCharacter, ThaiWord } from "@/types/thai";
import { MIDDLE_CLASS_CONSONANTS, HIGH_CLASS_CONSONANTS, LOW_CLASS_CONSONANTS } from "./consonants";
import { VOWELS } from "./vowels";
import { TONES } from "./tones";
import { PRACTICE_WORDS } from "./practiceWords";

export const CATEGORIES = ["Consonants", "Vowels", "Tones", "Practice"];

export const THAI_CONSONANTS = {
  "Middle Class": MIDDLE_CLASS_CONSONANTS,
  "High Class": HIGH_CLASS_CONSONANTS,
  "Low Class": LOW_CLASS_CONSONANTS,
};

export const THAI_CHARACTERS: Record<string, ThaiCharacter[] | ThaiWord[]> = {
  Consonants: [...MIDDLE_CLASS_CONSONANTS, ...HIGH_CLASS_CONSONANTS, ...LOW_CLASS_CONSONANTS],
  Vowels: VOWELS,
  Tones: TONES,
  Practice: PRACTICE_WORDS,
};