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

  /** =========================================================================
   *  PRACTICE ARRAY
   *  =========================================================================
   *  - Enthält eine "General"-Sektion für allgemeine Wörter,
   *    die KEINEM Buchstaben explizit zugeordnet sind.
   *  - Anschließend für JEDEN Buchstaben/Vokal/Ton mind. 2 Wörter,
   *    OHNE Duplication.
   *  - Jedem ThaiWord geben wir ein "id", damit React Keys eindeutig sind.
   */
  Practice: [
    // ------------------------------------------------------------------------
    // 1) "General" (keine Buchstaben-Duplikate)
    // ------------------------------------------------------------------------
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

    // ------------------------------------------------------------------------
    // 2) Für JEDEN Buchstaben mind. 2 Worte, unique
    // ------------------------------------------------------------------------

    // MIDDLE CLASS
    // ก
    { id: "k1", word: "กา", phonetic: "gaa", meaning: "crow" },
    { id: "k2", word: "กอด", phonetic: "gawd", meaning: "to hug" },

    // จ
    { id: "k3", word: "จาน", phonetic: "jaan", meaning: "plate" },
    { id: "k4", word: "จริง", phonetic: "jing", meaning: "real" },

    // ด
    { id: "k5", word: "ดี", phonetic: "dee", meaning: "good" },
    { id: "k6", word: "ดิน", phonetic: "din", meaning: "soil" },

    // ต
    { id: "k7", word: "ตาม", phonetic: "taam", meaning: "to follow" },
    { id: "k8", word: "ต้อง", phonetic: "dtong", meaning: "must" },

    // บ
    { id: "k9", word: "บ้าน", phonetic: "baan", meaning: "house" },
    { id: "k10", word: "บ้าง", phonetic: "baang", meaning: "some" },

    // ป
    { id: "k11", word: "ปลา", phonetic: "plaa", meaning: "fish" },
    { id: "k12", word: "เป็น", phonetic: "bpen", meaning: "to be" },

    // อ
    { id: "k13", word: "ออก", phonetic: "awk", meaning: "to exit" },
    { id: "k14", word: "อาย", phonetic: "aai", meaning: "shy" },

    // HIGH CLASS
    // ข
    { id: "k15", word: "ขอ", phonetic: "kaw", meaning: "to ask for" },
    { id: "k16", word: "ข้าว", phonetic: "kaao", meaning: "rice" },

    // ฉ
    { id: "k17", word: "ฉัน", phonetic: "chan", meaning: "I/me (female)" },
    { id: "k18", word: "ฉลาด", phonetic: "cha-lat", meaning: "smart" },

    // ถ
    { id: "k19", word: "ถ้า", phonetic: "thaa", meaning: "if" },
    { id: "k20", word: "ถูก", phonetic: "thuuk", meaning: "correct/cheap" },

    // ผ
    { id: "k21", word: "ผล", phonetic: "phon", meaning: "fruit" },
    { id: "k22", word: "ผม", phonetic: "phom", meaning: "hair / I (male)" },

    // ฝ
    { id: "k23", word: "ฝัน", phonetic: "fan", meaning: "dream" },
    { id: "k24", word: "ฝาก", phonetic: "faak", meaning: "to deposit" },

    // ศ
    { id: "k25", word: "ศึกษา", phonetic: "seuk-saa", meaning: "to study" },
    { id: "k26", word: "ศาล", phonetic: "saan", meaning: "court" },

    // ส
    { id: "k27", word: "สนุก", phonetic: "sa-nuk", meaning: "fun" },
    { id: "k28", word: "สวย", phonetic: "suay", meaning: "beautiful" },

    // LOW CLASS
    // ค
    { id: "k29", word: "คน", phonetic: "kon", meaning: "person" },
    { id: "k30", word: "คลอง", phonetic: "khlong", meaning: "canal" },

    // ช
    { id: "k31", word: "ชา", phonetic: "chaa", meaning: "tea" },
    { id: "k32", word: "ชอบ", phonetic: "chawp", meaning: "to like" },

    // ท
    { id: "k33", word: "ทำ", phonetic: "tam", meaning: "to do" },
    { id: "k34", word: "ทาง", phonetic: "taang", meaning: "way / path" },

    // พ
    { id: "k35", word: "พ่อ", phonetic: "phaw", meaning: "father" },
    {
      id: "k36",
      word: "พรุ่งนี้",
      phonetic: "phrung-nee",
      meaning: "tomorrow",
    },

    // ฟ
    { id: "k37", word: "ฟัน", phonetic: "fan", meaning: "teeth" },
    { id: "k38", word: "ฟ้า", phonetic: "faa", meaning: "sky" },

    // ม
    { id: "k39", word: "มา", phonetic: "maa", meaning: "to come" },
    { id: "k40", word: "มี", phonetic: "mee", meaning: "to have" },

    // ย
    { id: "k41", word: "ยัง", phonetic: "yang", meaning: "still / yet" },
    { id: "k42", word: "ใหญ่", phonetic: "yai", meaning: "big" },

    // ร
    { id: "k43", word: "เรา", phonetic: "rao", meaning: "we/us" },
    { id: "k44", word: "รัก", phonetic: "rak", meaning: "love" },

    // ล
    { id: "k45", word: "ลา", phonetic: "laa", meaning: "to say goodbye" },
    { id: "k46", word: "ล้าง", phonetic: "laang", meaning: "to wash" },

    // ว
    { id: "k47", word: "ว่า", phonetic: "waa", meaning: "that (conjunction)" },
    { id: "k48", word: "วัน", phonetic: "wan", meaning: "day" },

    // ------------------------------------------------------------------------
    // 3) VOWELS: mind. 2 pro Vokal
    // ------------------------------------------------------------------------
    // ะ
    { id: "k49", word: "จะ", phonetic: "ja", meaning: "will" },
    { id: "k50", word: "นะ", phonetic: "na", meaning: "particle" },

    // า
    { id: "k51", word: "ขา", phonetic: "khaa", meaning: "leg" },
    { id: "k52", word: "หา", phonetic: "haa", meaning: "to search" },

    // ิ
    { id: "k53", word: "กิน", phonetic: "gin", meaning: "to eat" },
    { id: "k54", word: "นิด", phonetic: "nit", meaning: "a bit" },

    // ี
    // => Wir nehmen z. B. "พี่" (phii = older sibling) + "ขี่" (khi) = "to ride"
    { id: "k55", word: "พี่", phonetic: "phii", meaning: "older sibling" },
    { id: "k56", word: "ขี่", phonetic: "khi", meaning: "to ride" },

    // ึ
    { id: "k57", word: "นึก", phonetic: "nʉk", meaning: "to think" },
    { id: "k58", word: "ลึก", phonetic: "lʉk", meaning: "deep" },

    // ื
    { id: "k59", word: "ถือ", phonetic: "thʉʉ", meaning: "to hold" },
    { id: "k60", word: "ยืม", phonetic: "yʉʉm", meaning: "to borrow" },

    // ------------------------------------------------------------------------
    // 4) TONES: mind. 2 pro Tone
    // ------------------------------------------------------------------------
    // ่ (mai ek)
    { id: "k61", word: "น่า", phonetic: "naa", meaning: "seems/looks" },
    { id: "k62", word: "เก่า", phonetic: "gao", meaning: "old" },

    // ้ (mai tho)
    { id: "k63", word: "น้อย", phonetic: "nói", meaning: "little" },
    { id: "k64", word: "ได้", phonetic: "dai", meaning: "can/okay" },

    // ๊ (mai trii)
    { id: "k65", word: "ยี้", phonetic: "yîi", meaning: "ew (disgust)" },
    { id: "k66", word: "ป๊อป", phonetic: "bpóp", meaning: "pop" },

    // ๋ (mai chattawa)
    { id: "k67", word: "จ๋า", phonetic: "jaa", meaning: "soft exclamation" },
    { id: "k68", word: "ป๋า", phonetic: "bpǎ", meaning: "dad (colloquial)" },
  ],
};
