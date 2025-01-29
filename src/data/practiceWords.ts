import { ThaiWord } from "@/types/thai";

/**
 * Erweitertes Interface, damit wir bei Bedarf
 * Vokale (und später evtl. Consonants) fest angeben können.
 */
export interface ExtendedThaiWord extends ThaiWord {
  /**
   * Liste aller Vokale in displayForm,
   * die dieses Wort beinhalten soll.
   */
  associatedVowels?: string[];
}

export const PRACTICE_WORDS: ExtendedThaiWord[] = [
  // ------------------------------------------------------------------------
  // GLOBALE WÖRTER (ohne zugeordnete Vokale)
  // ------------------------------------------------------------------------
  {
    id: "g1",
    word: "สวัสดี",
    phonetic: "sa-wat-dee",
    meaning: "hello",
    associatedVowels: ["-ะ", "-ี"],
  },
  {
    id: "g2",
    word: "ขอบคุณ",
    phonetic: "khop-khun",
    meaning: "thank you",
    associatedVowels: ["-อ", "-ุ"],
  },
  {
    id: "g3",
    word: "ลาก่อน",
    phonetic: "laa-gorn",
    meaning: "goodbye",
    associatedVowels: ["-า", "-อ"],
  },
  {
    id: "g4",
    word: "ใช่",
    phonetic: "chai",
    meaning: "yes",
    associatedVowels: ["-ไ"],
  },
  {
    id: "g5",
    word: "ไม่",
    phonetic: "mai",
    meaning: "no",
    associatedVowels: ["-ไ"],
  },
  {
    id: "g6",
    word: "ดื่ม",
    phonetic: "duem",
    meaning: "to drink",
    associatedVowels: ["-ื"],
  },
  {
    id: "g7",
    word: "นอน",
    phonetic: "non",
    meaning: "to sleep",
    associatedVowels: ["-อ"],
  },
  {
    id: "g8",
    word: "ไป",
    phonetic: "bpai",
    meaning: "to go",
    associatedVowels: ["-ไ"],
  },
  {
    id: "g9",
    word: "น้ำ",
    phonetic: "nam",
    meaning: "water",
    associatedVowels: ["-า"],
  },
  {
    id: "g10",
    word: "รถ",
    phonetic: "rot",
    meaning: "car",
    associatedVowels: ["โ-"],
  },
  {
    id: "g11",
    word: "หมา",
    phonetic: "maa",
    meaning: "dog",
    associatedVowels: ["-า"],
  },
  {
    id: "g12",
    word: "อะไร",
    phonetic: "a-rai",
    meaning: "what",
    associatedVowels: ["-ะ", "-ไ"],
  },
  {
    id: "g13",
    word: "ที่ไหน",
    phonetic: "tee-nai",
    meaning: "where",
    associatedVowels: ["-ี", "-ไ"],
  },
  {
    id: "g14",
    word: "เมื่อไร",
    phonetic: "meuua-rai",
    meaning: "when",
    associatedVowels: ["-ื่", "-ไ"],
  },
  {
    id: "g15",
    word: "หนึ่ง",
    phonetic: "neung",
    meaning: "one",
    associatedVowels: ["-ึ"],
  },
  {
    id: "g16",
    word: "สอง",
    phonetic: "song",
    meaning: "two",
    associatedVowels: ["-อ"],
  },
  {
    id: "g17",
    word: "สาม",
    phonetic: "saam",
    meaning: "three",
    associatedVowels: ["-า"],
  },
  {
    id: "g18",
    word: "ร้อน",
    phonetic: "ron",
    meaning: "hot",
    associatedVowels: ["-อ"],
  },
  {
    id: "g19",
    word: "เย็น",
    phonetic: "yen",
    meaning: "cold",
    associatedVowels: ["เ-"],
  },
  {
    id: "g20",
    word: "เล็ก",
    phonetic: "lek",
    meaning: "small",
    associatedVowels: ["เ-ะ"],
  },

  // ------------------------------------------------------------------------
  // CONSONANTS (je 2 example words, keine associatedVowels hier)
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
  {
    id: "k12",
    word: "เป็น",
    phonetic: "bpen",
    meaning: "to be",
    associatedVowels: ["เ-ะ"], // short e
  },

  // อ
  { id: "k13", word: "ออก", phonetic: "awk", meaning: "to exit" },
  { id: "k14", word: "อาย", phonetic: "aai", meaning: "shy" },

  // HIGH CLASS
  // ข
  {
    id: "k15",
    word: "ขอ",
    phonetic: "kaw",
    meaning: "to ask (for)",
    associatedVowels: ["-อ"], // long aw/or
  },
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
  // VOWELS: mind. 2 pro Vokal
  // (Basierend auf unseren displayForms in `vowels.ts`)
  // ------------------------------------------------------------------------

  // 1) -ะ (short a)
  {
    id: "k49",
    word: "จะ",
    phonetic: "ja",
    meaning: "will",
    associatedVowels: ["-ะ"],
  },
  {
    id: "k50",
    word: "นะ",
    phonetic: "na",
    meaning: "particle",
    associatedVowels: ["-ะ"],
  },

  // 2) -า (long a)
  {
    id: "k51",
    word: "ขา",
    phonetic: "khaa",
    meaning: "leg",
    associatedVowels: ["-า"],
  },
  {
    id: "k52",
    word: "หา",
    phonetic: "haa",
    meaning: "to search",
    associatedVowels: ["-า"],
  },

  // 3) -ิ (short i)
  {
    id: "k53",
    word: "กิน",
    phonetic: "gin",
    meaning: "to eat",
    associatedVowels: ["-ิ"],
  },
  {
    id: "k54",
    word: "นิด",
    phonetic: "nit",
    meaning: "a bit",
    associatedVowels: ["-ิ"],
  },

  // 4) -ี (long i)
  {
    id: "k55",
    word: "พี่",
    phonetic: "phii",
    meaning: "older sibling",
    associatedVowels: ["-ี"],
  },
  {
    id: "k56",
    word: "ขี่",
    phonetic: "khi",
    meaning: "to ride",
    associatedVowels: ["-ี"],
  },

  // 5) -ึ (short ue)
  {
    id: "k57",
    word: "นึก",
    phonetic: "nʉk",
    meaning: "to think",
    associatedVowels: ["-ึ"],
  },
  {
    id: "k58",
    word: "ลึก",
    phonetic: "lʉk",
    meaning: "deep",
    associatedVowels: ["-ึ"],
  },

  // 6) -ื (long ue)
  {
    id: "k59",
    word: "ถือ",
    phonetic: "thʉʉ",
    meaning: "to hold",
    associatedVowels: ["-ื"],
  },
  {
    id: "k60",
    word: "ยืม",
    phonetic: "yʉʉm",
    meaning: "to borrow",
    associatedVowels: ["-ื"],
  },

  // 7) -ุ (short u)
  {
    id: "k69",
    word: "ตุ๊ก",
    phonetic: "tuk",
    meaning: "doll",
    associatedVowels: ["-ุ"],
  },
  {
    id: "k70",
    word: "ลุง",
    phonetic: "lung",
    meaning: "uncle",
    associatedVowels: ["-ุ"],
  },

  // 8) -ู (long u)
  {
    id: "k71",
    word: "ดู",
    phonetic: "duu",
    meaning: "to watch",
    associatedVowels: ["-ู"],
  },
  {
    id: "k72",
    word: "รู้",
    phonetic: "ruu",
    meaning: "to know",
    associatedVowels: ["-ู"],
  },

  // 9) เ-ะ (short e)
  {
    id: "k61",
    word: "เด็ก",
    phonetic: "dek",
    meaning: "child",
    associatedVowels: ["เ-ะ"],
  },
  {
    id: "k62",
    word: "เตะ",
    phonetic: "te",
    meaning: "to kick",
    associatedVowels: ["เ-ะ"],
  },

  // 10) เ- (long e)
  // Keine vorhandenen Wörter -> wir erstellen 2 einfache:
  {
    id: "k200",
    word: "เท",
    phonetic: "teh",
    meaning: "to pour",
    associatedVowels: ["เ-"],
  },
  {
    id: "k201",
    word: "เพลง",
    phonetic: "phleng",
    meaning: "Lied",
    associatedVowels: ["เ-"],
  },

  // 11) แ-ะ (short ae)
  {
    id: "k63",
    word: "แมว",
    phonetic: "maew",
    meaning: "cat",
    associatedVowels: ["แ-ะ"],
  },
  {
    id: "k203",
    word: "แกะ",
    phonetic: "gae",
    meaning: "sheep",
    associatedVowels: ["แ-ะ"],
  },

  // 12) แ- (long ae)
  // "k64" ("แสง") ist "saeng" => long ae -> fügen wir es hinzu:
  {
    id: "k64",
    word: "แสง",
    phonetic: "saeng",
    meaning: "light",
    associatedVowels: ["แ-"],
  },
  {
    id: "k204",
    word: "แพง",
    phonetic: "phaeng",
    meaning: "expensive",
    associatedVowels: ["แ-"],
  },

  // 13) โ-ะ (short o)
  {
    id: "k65",
    word: "โต๊ะ",
    phonetic: "to",
    meaning: "table",
    associatedVowels: ["โ-ะ"],
  },
  {
    id: "k208",
    word: "โป๊ะ",
    phonetic: "po",
    meaning: "raft/pier",
    associatedVowels: ["โ-ะ"],
  },

  // 14) โ- (long o)
  // "k66" (โกรธ) => "grot"? Kann man als lang o einstufen
  {
    id: "k66",
    word: "โกรธ",
    phonetic: "groht",
    meaning: "angry",
    associatedVowels: ["โ-"],
  },
  {
    id: "k209",
    word: "โทร",
    phonetic: "thoh",
    meaning: "anrufen",
    associatedVowels: ["โ-"],
  },

  // 15) เอาะ (short aw)
  // Keine existierenden -> wir fügen 2 an:
  {
    id: "k210",
    word: "เกาะ",
    phonetic: "gaw",
    meaning: "Insel",
    associatedVowels: ["เอาะ"],
  },
  {
    id: "k211",
    word: "เคราะห์",
    phonetic: "khraw",
    meaning: "Schicksal",
    associatedVowels: ["เอาะ"],
  },

  // 16) -อ (long aw/or)
  // k15: "ขอ" haben wir schon. Wir brauchen 2. Machen wir "พอ" (enough)
  {
    id: "k212",
    word: "พอ",
    phonetic: "phaw",
    meaning: "enough",
    associatedVowels: ["-อ"],
  },

  // ------------------------------------------------------------------------
  // 4) TONES: mind. 2 pro Tone
  // ------------------------------------------------------------------------
  // ่ (mai ek)
  { id: "tone1", word: "น่า", phonetic: "naa", meaning: "seems/looks" },
  { id: "tone2", word: "เก่า", phonetic: "gao", meaning: "old" },

  // ้ (mai tho)
  { id: "tone3", word: "น้อย", phonetic: "nói", meaning: "little" },
  { id: "tone4", word: "ได้", phonetic: "dai", meaning: "can/okay" },

  // ๊ (mai trii)
  { id: "tone5", word: "ยี้", phonetic: "yîi", meaning: "ew (disgust)" },
  { id: "tone6", word: "ป๊อป", phonetic: "bpóp", meaning: "pop" },

  // ๋ (mai chattawa)
  { id: "tone7", word: "จ๋า", phonetic: "jaa", meaning: "soft exclamation" },
  { id: "tone8", word: "ป๋า", phonetic: "bpǎ", meaning: "dad (colloquial)" },

  // Rare consonant practice words
  {
    id: "rare1",
    word: "มณโฑ",
    phonetic: "mon-tho",
    meaning: "woman's name (archaic)",
  },
  { id: "rare2", word: "กฎ", phonetic: "got", meaning: "rule/law" },
  {
    id: "rare3",
    word: "ปฏัก",
    phonetic: "pa-tak",
    meaning: "goad (tool for controlling elephants)",
  },
  { id: "rare4", word: "ปรากฏ", phonetic: "pra-kot", meaning: "to appear" },
];
