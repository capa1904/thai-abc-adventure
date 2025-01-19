import { ThaiCharacter } from "@/types/thai";

export const MIDDLE_CLASS_CONSONANTS: ThaiCharacter[] = [
  { char: "ก", romanization: "g", meaning: "chicken", letterName: "กอ ไก่" },
  { char: "จ", romanization: "j", meaning: "plate", letterName: "จอ จาน" },
  { char: "ด", romanization: "d", meaning: "child", letterName: "ดอ เด็ก" },
  { char: "ต", romanization: "t", meaning: "turtle", letterName: "ตอ เต่า" },
  { char: "บ", romanization: "b", meaning: "leaf", letterName: "บอ ใบไม้" },
  { char: "ป", romanization: "p", meaning: "fish", letterName: "ปอ ปลา" },
  { char: "อ", romanization: "silent", meaning: "basin", letterName: "ออ อ่าง" },
  {
    char: "ฎ",
    romanization: "d",
    meaning: "montho",
    letterName: "ฎอ มณโฑ",
    isRare: true,
    rareInfo: "This consonant is rarely used in modern Thai. Only its sound 'd' is important to remember.",
  },
  {
    char: "ฏ",
    romanization: "t",
    meaning: "patak",
    letterName: "ฏอ ปฏัก",
    isRare: true,
    rareInfo: "This consonant is rarely used in modern Thai. Only its sound 't' is important to remember.",
  },
];

export const HIGH_CLASS_CONSONANTS: ThaiCharacter[] = [
  { char: "ข", romanization: "k", meaning: "egg", letterName: "ขอ ไข่" },
  { char: "ฉ", romanization: "ch", meaning: "cymbals", letterName: "ฉอ ฉิ่ง" },
  { char: "ถ", romanization: "th", meaning: "bag", letterName: "ถอ ถุง" },
  { char: "ผ", romanization: "ph", meaning: "bee", letterName: "ผอ ผึ้ง" },
  { char: "ฝ", romanization: "f", meaning: "lid", letterName: "ฝอ ฝา" },
  { char: "ศ", romanization: "s", meaning: "pavilion", letterName: "ศอ ศาลา" },
  { char: "ส", romanization: "s", meaning: "tiger", letterName: "สอ เสือ" },
];

export const LOW_CLASS_CONSONANTS: ThaiCharacter[] = [
  { char: "ค", romanization: "k", meaning: "buffalo", letterName: "คอ ควาย" },
  { char: "ช", romanization: "ch", meaning: "elephant", letterName: "ชอ ช้าง" },
  { char: "ท", romanization: "th", meaning: "soldier", letterName: "ทอ ทหาร" },
  { char: "พ", romanization: "ph", meaning: "wall", letterName: "พอ พาน" },
  { char: "ฟ", romanization: "f", meaning: "teeth", letterName: "ฟอ ฟัน" },
  { char: "ม", romanization: "m", meaning: "horse", letterName: "มอ ม้า" },
  { char: "ย", romanization: "y", meaning: "giant", letterName: "ยอ ยักษ์" },
  { char: "ร", romanization: "r", meaning: "boat", letterName: "รอ เรือ" },
  { char: "ล", romanization: "l", meaning: "monkey", letterName: "ลอ ลิง" },
  { char: "ว", romanization: "w", meaning: "ring", letterName: "วอ แหวน" },
];