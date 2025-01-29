// \\?\C:\git\temp\thai-abc-adventure\src\data\vowels.ts

import { ThaiCharacter } from "@/types/thai";

/**
 * Wir ergänzen ThaiCharacter um "displayForm",
 * das genau die Schreibweise zeigt, die in vielen
 * Lehrmaterialien üblich ist.
 */
interface ThaiVowel extends ThaiCharacter {
  displayForm: string;
}

export const VOWELS: ThaiVowel[] = [
  // --------------------------------------------------------------------------------
  // Gruppe A (stehen hinter dem Konsonanten)
  // --------------------------------------------------------------------------------
  {
    char: "ะ",
    displayForm: "-ะ", // short a
    romanization: "a",
    meaning: "short a",
    letterName: "สระอะ",
  },
  {
    char: "า",
    displayForm: "-า", // long a
    romanization: "aa",
    meaning: "long a",
    letterName: "สระอา",
  },

  // --------------------------------------------------------------------------------
  // Gruppe I
  // --------------------------------------------------------------------------------
  {
    char: "ิ",
    displayForm: "-ิ", // short i
    romanization: "i",
    meaning: "short i",
    letterName: "สระอิ",
  },
  {
    char: "ี",
    displayForm: "-ี", // long i
    romanization: "ii",
    meaning: "long i",
    letterName: "สระอี",
  },

  // --------------------------------------------------------------------------------
  // Gruppe UE (ʉ)
  // --------------------------------------------------------------------------------
  {
    char: "ึ",
    displayForm: "-ึ", // short ue
    romanization: "ʉ",
    meaning: "short ue",
    letterName: "สระอึ",
  },
  {
    char: "ื",
    displayForm: "-ื", // long ue
    romanization: "ʉʉ",
    meaning: "long ue",
    letterName: "สระอือ",
  },

  // --------------------------------------------------------------------------------
  // Gruppe U
  // --------------------------------------------------------------------------------
  {
    char: "ุ",
    displayForm: "-ุ", // short u
    romanization: "u",
    meaning: "short u",
    letterName: "สระอุ",
  },
  {
    char: "ู",
    displayForm: "-ู", // long u
    romanization: "uu",
    meaning: "long u",
    letterName: "สระอู",
  },

  // --------------------------------------------------------------------------------
  // Gruppe E (stehen vor dem Konsonanten)
  // --------------------------------------------------------------------------------
  {
    char: "เ",
    displayForm: "เ-ะ", // short e
    romanization: "e",
    meaning: "short e",
    letterName: "สระเอะ",
  },
  {
    char: "เ",
    displayForm: "เ-", // long e
    romanization: "ee",
    meaning: "long e",
    letterName: "สระเอ",
  },

  // --------------------------------------------------------------------------------
  // Gruppe AE (vor dem Konsonanten)
  // --------------------------------------------------------------------------------
  {
    char: "แ",
    displayForm: "แ-ะ", // short ae
    romanization: "ae",
    meaning: "short ae",
    letterName: "สระแอะ",
  },
  {
    char: "แ",
    displayForm: "แ-", // long ae
    romanization: "aee",
    meaning: "long ae",
    letterName: "สระแอ",
  },

  // --------------------------------------------------------------------------------
  // Gruppe O (vor dem Konsonanten)
  // --------------------------------------------------------------------------------
  {
    char: "โ",
    displayForm: "โ-ะ", // short o
    romanization: "o",
    meaning: "short o",
    letterName: "สระโอะ",
  },
  {
    char: "โ",
    displayForm: "โ-", // long o
    romanization: "oo",
    meaning: "long o",
    letterName: "สระโอ",
  },

  // --------------------------------------------------------------------------------
  // Der "aw"-Laut (kurze Form):
  // Hier sieht man oft "เอาะ" (wobei das เ und อ verschmelzen).
  // Das ist einer der Fälle, wo "อ" Sinn macht.
  // --------------------------------------------------------------------------------
  {
    char: "เอาะ",
    displayForm: "เอาะ", // short aw
    romanization: "aw",
    meaning: "short aw",
    letterName: "สระเอาะ",
  },

  // --------------------------------------------------------------------------------
  // Der "aw"-Laut (lange Form): -อ
  // Hier benutzt man meistens "-อ" (z.B. ข-อ, จ-อ).
  // --------------------------------------------------------------------------------
  {
    char: "อ",
    displayForm: "-อ", // long aw/or
    romanization: "or",
    meaning: "long aw/or",
    letterName: "สระออ",
  },
];
