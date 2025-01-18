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

  Practice: [
    // (1) Vorhandene „Allgemeine“ Wörter
    { word: "สวัสดี", phonetic: "sa-wat-dee", meaning: "hello" },
    { word: "ขอบคุณ", phonetic: "khop-khun", meaning: "thank you" },
    { word: "ลาก่อน", phonetic: "laa-gorn", meaning: "goodbye" },
    { word: "ใช่", phonetic: "chai", meaning: "yes" },
    { word: "ไม่", phonetic: "mai", meaning: "no" },
    { word: "ได้", phonetic: "dai", meaning: "can/okay" },
    { word: "กิน", phonetic: "gin", meaning: "to eat" },
    { word: "ดื่ม", phonetic: "duem", meaning: "to drink" },
    { word: "นอน", phonetic: "non", meaning: "to sleep" },
    { word: "ไป", phonetic: "bpai", meaning: "to go" },
    { word: "มา", phonetic: "maa", meaning: "to come" },
    { word: "น้ำ", phonetic: "nam", meaning: "water" },
    { word: "ข้าว", phonetic: "khao", meaning: "rice" },
    { word: "รถ", phonetic: "rot", meaning: "car" },
    { word: "บ้าน", phonetic: "baan", meaning: "house" },
    { word: "หมา", phonetic: "maa", meaning: "dog" },
    { word: "อะไร", phonetic: "a-rai", meaning: "what" },
    { word: "ที่ไหน", phonetic: "tee-nai", meaning: "where" },
    { word: "เมื่อไร", phonetic: "meuua-rai", meaning: "when" },
    { word: "หนึ่ง", phonetic: "neung", meaning: "one" },
    { word: "สอง", phonetic: "song", meaning: "two" },
    { word: "สาม", phonetic: "saam", meaning: "three" },
    { word: "ดี", phonetic: "dee", meaning: "good" },
    { word: "ร้อน", phonetic: "ron", meaning: "hot" },
    { word: "เย็น", phonetic: "yen", meaning: "cold" },
    { word: "ใหญ่", phonetic: "yai", meaning: "big" },
    { word: "เล็ก", phonetic: "lek", meaning: "small" },

    // (2) NEUE Wörter: Für JEDE Konsonante, Vokal & Tonzeichen mindestens 2
    // ─────────────────────────────────────────
    // MIDDLE CLASS
    // ก
    { word: "กา", phonetic: "gaa", meaning: "crow" }, // contains 'ก'
    { word: "กอด", phonetic: "gawd", meaning: "to hug" }, // contains 'ก'

    // จ
    { word: "จาน", phonetic: "jaan", meaning: "plate" },
    { word: "จริง", phonetic: "jing", meaning: "real" },

    // ด
    { word: "ดี", phonetic: "dee", meaning: "good" }, // (also above, for filtering)
    { word: "ดิน", phonetic: "din", meaning: "soil" },

    // ต
    { word: "ตาม", phonetic: "taam", meaning: "to follow" },
    { word: "ต้อง", phonetic: "dtong", meaning: "must" },

    // บ
    { word: "บ้าน", phonetic: "baan", meaning: "house" }, // repeated
    { word: "บ้าง", phonetic: "baang", meaning: "some" },

    // ป
    { word: "ปลา", phonetic: "plaa", meaning: "fish" },
    { word: "เป็น", phonetic: "bpen", meaning: "to be" },

    // อ
    { word: "ออก", phonetic: "awk", meaning: "to exit" },
    { word: "อาย", phonetic: "aai", meaning: "shy" },

    // ─────────────────────────────────────────
    // HIGH CLASS
    // ข
    { word: "ขอ", phonetic: "kaw", meaning: "to ask for" },
    { word: "ข้าว", phonetic: "kaao", meaning: "rice" },

    // ฉ
    { word: "ฉัน", phonetic: "chan", meaning: "I/me (female)" },
    { word: "ฉลาด", phonetic: "cha-lat", meaning: "smart" },

    // ถ
    { word: "ถ้า", phonetic: "thaa", meaning: "if" },
    { word: "ถูก", phonetic: "thuuk", meaning: "correct/cheap" },

    // ผ
    { word: "ผล", phonetic: "phon", meaning: "fruit" },
    { word: "ผม", phonetic: "phom", meaning: "I (male)/hair" },

    // ฝ
    { word: "ฝัน", phonetic: "fan", meaning: "dream" },
    { word: "ฝาก", phonetic: "faak", meaning: "to deposit" },

    // ศ
    { word: "ศึกษา", phonetic: "seuk-saa", meaning: "to study" },
    { word: "ศาล", phonetic: "saan", meaning: "court" },

    // ส
    { word: "สนุก", phonetic: "sa-nuk", meaning: "fun" },
    { word: "สวย", phonetic: "suay", meaning: "beautiful" },

    // ─────────────────────────────────────────
    // LOW CLASS
    // ค
    { word: "คน", phonetic: "kon", meaning: "person" },
    { word: "คลอง", phonetic: "khlong", meaning: "canal" },

    // ช
    { word: "ชา", phonetic: "chaa", meaning: "tea" },
    { word: "ชอบ", phonetic: "chawp", meaning: "to like" },

    // ท
    { word: "ทำ", phonetic: "tam", meaning: "to do" },
    { word: "ทาง", phonetic: "taang", meaning: "way/path" },

    // พ
    { word: "พ่อ", phonetic: "phaw", meaning: "father" },
    { word: "พรุ่งนี้", phonetic: "phrung-nee", meaning: "tomorrow" },

    // ฟ
    { word: "ฟัน", phonetic: "fan", meaning: "teeth" },
    { word: "ฟ้า", phonetic: "faa", meaning: "sky" },

    // ม
    { word: "มา", phonetic: "maa", meaning: "come" },
    { word: "มี", phonetic: "mee", meaning: "have" },

    // ย
    { word: "ยัง", phonetic: "yang", meaning: "still/yet" },
    { word: "ใหญ่", phonetic: "yai", meaning: "big" },

    // ร
    { word: "เรา", phonetic: "rao", meaning: "we/us" },
    { word: "รัก", phonetic: "rak", meaning: "love" },

    // ล
    { word: "ลา", phonetic: "laa", meaning: "to say goodbye" },
    { word: "ล้าง", phonetic: "laang", meaning: "to wash" },

    // ว
    { word: "ว่า", phonetic: "waa", meaning: "that (conjunction)" },
    { word: "วัน", phonetic: "wan", meaning: "day" },

    // ─────────────────────────────────────────
    // VOWELS
    // ะ
    { word: "จะ", phonetic: "ja", meaning: "will" },
    { word: "นะ", phonetic: "na", meaning: "particle" },

    // า
    { word: "ขา", phonetic: "khaa", meaning: "leg" },
    { word: "หา", phonetic: "haa", meaning: "to search" },

    // ิ
    { word: "กิน", phonetic: "gin", meaning: "to eat" }, // also above
    { word: "นิด", phonetic: "nit", meaning: "a bit" },

    // ี
    { word: "มี", phonetic: "mee", meaning: "to have" }, // also above
    { word: "ดี", phonetic: "dee", meaning: "good" }, // also above

    // ึ
    { word: "นึก", phonetic: "nʉk", meaning: "to think" },
    { word: "ลึก", phonetic: "lʉk", meaning: "deep" },

    // ื
    { word: "ถือ", phonetic: "thʉʉ", meaning: "to hold" },
    { word: "ยืม", phonetic: "yʉʉm", meaning: "to borrow" },

    // ─────────────────────────────────────────
    // TONE MARKS
    // ่ (mai ek)
    { word: "น่า", phonetic: "naa", meaning: "seems/looks" },
    { word: "เก่า", phonetic: "gao", meaning: "old" },

    // ้ (mai tho)
    { word: "น้อย", phonetic: "nói", meaning: "little" },
    { word: "ได้", phonetic: "dai", meaning: "can" }, // also above

    // ๊ (mai trii)
    { word: "ยี้", phonetic: "yîi", meaning: "ew (disgust)" },
    { word: "ป๊อป", phonetic: "bpóp", meaning: "pop" },

    // ๋ (mai chattawa)
    { word: "จ๋า", phonetic: "jaa", meaning: "soft exclamation" },
    { word: "ป๋า", phonetic: "bpǎ", meaning: "dad (colloquial)" },
  ],
};
