import { ThaiCharacter, ThaiWord } from "@/types/thai";

export const CATEGORIES = ["Consonants", "Vowels", "Tones", "Practice"];

export const THAI_CONSONANTS = {
  "Middle Class": [
    { char: "ก", romanization: "g", meaning: "chicken", letterName: "กอ ไก่" },
    { char: "จ", romanization: "j", meaning: "plate", letterName: "จอ จาน" },
    { char: "ด", romanization: "d", meaning: "child", letterName: "ดอ เด็ก" },
    { char: "ต", romanization: "t", meaning: "turtle", letterName: "ตอ เต่า" },
    { char: "บ", romanization: "b", meaning: "leaf", letterName: "บอ ใบไม้" },
    { char: "ป", romanization: "p", meaning: "fish", letterName: "ปอ ปลา" },
    {
      char: "อ",
      romanization: "silent",
      meaning: "basin",
      letterName: "ออ อ่าง",
    },
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
  ],
  "High Class": [
    { char: "ข", romanization: "k", meaning: "egg", letterName: "ขอ ไข่" },
    {
      char: "ฉ",
      romanization: "ch",
      meaning: "cymbals",
      letterName: "ฉอ ฉิ่ง",
    },
    { char: "ถ", romanization: "th", meaning: "bag", letterName: "ถอ ถุง" },
    { char: "ผ", romanization: "ph", meaning: "bee", letterName: "ผอ ผึ้ง" },
    { char: "ฝ", romanization: "f", meaning: "lid", letterName: "ฝอ ฝา" },
    {
      char: "ศ",
      romanization: "s",
      meaning: "pavilion",
      letterName: "ศอ ศาลา",
    },
    { char: "ส", romanization: "s", meaning: "tiger", letterName: "สอ เสือ" },
  ],
  "Low Class": [
    { char: "ค", romanization: "k", meaning: "buffalo", letterName: "คอ ควาย" },
    {
      char: "ช",
      romanization: "ch",
      meaning: "elephant",
      letterName: "ชอ ช้าง",
    },
    {
      char: "ท",
      romanization: "th",
      meaning: "soldier",
      letterName: "ทอ ทหาร",
    },
    { char: "พ", romanization: "ph", meaning: "wall", letterName: "พอ พาน" },
    { char: "ฟ", romanization: "f", meaning: "teeth", letterName: "ฟอ ฟัน" },
    { char: "ม", romanization: "m", meaning: "horse", letterName: "มอ ม้า" },
    { char: "ย", romanization: "y", meaning: "giant", letterName: "ยอ ยักษ์" },
    { char: "ร", romanization: "r", meaning: "boat", letterName: "รอ เรือ" },
    { char: "ล", romanization: "l", meaning: "monkey", letterName: "ลอ ลิง" },
    { char: "ว", romanization: "w", meaning: "ring", letterName: "วอ แหวน" },
  ],
};

export const THAI_CHARACTERS: Record<string, ThaiCharacter[] | ThaiWord[]> = {
  Consonants: [
    ...THAI_CONSONANTS["Middle Class"],
    ...THAI_CONSONANTS["High Class"],
    ...THAI_CONSONANTS["Low Class"],
  ],

  Vowels: [
    { char: "ะ", romanization: "a", meaning: "short a", letterName: "สระอะ" },
    { char: "า", romanization: "aa", meaning: "long a", letterName: "สระอา" },
    { char: "ิ", romanization: "i", meaning: "short i", letterName: "สระอิ" },
    { char: "ี", romanization: "ii", meaning: "long i", letterName: "สระอี" },
    { char: "ึ", romanization: "ʉ", meaning: "short ʉ", letterName: "สระอึ" },
    { char: "ื", romanization: "ʉʉ", meaning: "long ʉ", letterName: "สระอือ" },
  ],

  Tones: [
    {
      char: "่",
      romanization: "low tone",
      meaning: "first tone mark",
      letterName: "ไม้เอก",
    },
    {
      char: "้",
      romanization: "falling tone",
      meaning: "second tone mark",
      letterName: "ไม้โท",
    },
    {
      char: "๊",
      romanization: "high tone",
      meaning: "third tone mark",
      letterName: "ไม้ตรี",
    },
    {
      char: "๋",
      romanization: "rising tone",
      meaning: "fourth tone mark",
      letterName: "ไม้จัตวา",
    },
  ],

  Practice: [
    {
      id: "g1",
      word: "สวัสดี",
      phonetic: "sa-wat-dee",
      meaning: "hello",
    },
    {
      id: "g2",
      word: "ขอบคุณ",
      phonetic: "khop-khun",
      meaning: "thank you",
    },
    {
      id: "g3",
      word: "ลาก่อน",
      phonetic: "laa-gorn",
      meaning: "goodbye",
    },
    {
      id: "g4",
      word: "ใช่",
      phonetic: "chai",
      meaning: "yes",
    },
    {
      id: "g5",
      word: "ไม่",
      phonetic: "mai",
      meaning: "no",
    },
    {
      id: "g6",
      word: "ดื่ม",
      phonetic: "duem",
      meaning: "to drink",
    },
    {
      id: "g7",
      word: "นอน",
      phonetic: "non",
      meaning: "to sleep",
    },
    {
      id: "g8",
      word: "ไป",
      phonetic: "bpai",
      meaning: "to go",
    },
    {
      id: "g9",
      word: "น้ำ",
      phonetic: "nam",
      meaning: "water",
    },
    {
      id: "g10",
      word: "รถ",
      phonetic: "rot",
      meaning: "car",
    },
    {
      id: "g11",
      word: "หมา",
      phonetic: "maa",
      meaning: "dog",
    },
    {
      id: "g12",
      word: "อะไร",
      phonetic: "a-rai",
      meaning: "what",
    },
    {
      id: "g13",
      word: "ที่ไหน",
      phonetic: "tee-nai",
      meaning: "where",
    },
    {
      id: "g14",
      word: "เมื่อไร",
      phonetic: "meuua-rai",
      meaning: "when",
    },
    {
      id: "g15",
      word: "หนึ่ง",
      phonetic: "neung",
      meaning: "one",
    },
    {
      id: "g16",
      word: "สอง",
      phonetic: "song",
      meaning: "two",
    },
    {
      id: "g17",
      word: "สาม",
      phonetic: "saam",
      meaning: "three",
    },
    {
      id: "g18",
      word: "ร้อน",
      phonetic: "ron",
      meaning: "hot",
    },
    {
      id: "g19",
      word: "เย็น",
      phonetic: "yen",
      meaning: "cold",
    },
    {
      id: "g20",
      word: "เล็ก",
      phonetic: "lek",
      meaning: "small",
    },

    // Practice words for ฎ
    {
      id: "rare1",
      word: "มณโฑ",
      phonetic: "mon-tho",
      meaning: "woman's name (archaic)",
    },
    {
      id: "rare2",
      word: "กฎ",
      phonetic: "got",
      meaning: "rule/law",
    },

    // Practice words for ฏ
    {
      id: "rare3",
      word: "ปฏัก",
      phonetic: "pa-tak",
      meaning: "goad (tool for controlling elephants)",
    },
    {
      id: "rare4",
      word: "ปรากฏ",
      phonetic: "pra-kot",
      meaning: "to appear",
    },
  ],
};
