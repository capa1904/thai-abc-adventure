import React, { useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import CategorySelector from "@/components/CategorySelector";
import { motion } from "framer-motion";
import PracticeCard from "@/components/PracticeCard";

const CATEGORIES = ["Consonants", "Vowels", "Tones", "Practice"];

const THAI_CHARACTERS = {
  Consonants: [
    { char: "ก", romanization: "g", meaning: "chicken" },
    { char: "ข", romanization: "k", meaning: "egg" },
    { char: "ฃ", romanization: "k", meaning: "bottle (obsolete)" },
    { char: "ค", romanization: "k", meaning: "buffalo" },
    { char: "ฅ", romanization: "k", meaning: "person (obsolete)" },
    { char: "ฆ", romanization: "k", meaning: "bell" },
    { char: "ง", romanization: "ng", meaning: "snake" },
    { char: "จ", romanization: "j", meaning: "plate" },
    { char: "ฉ", romanization: "ch", meaning: "cymbals" },
    { char: "ช", romanization: "ch", meaning: "elephant" },
    { char: "ซ", romanization: "s", meaning: "chain" },
    { char: "ฌ", romanization: "ch", meaning: "tree" },
    { char: "ญ", romanization: "y", meaning: "woman" },
    { char: "ฎ", romanization: "d", meaning: "headdress" },
    { char: "ฏ", romanization: "t", meaning: "base" },
    { char: "ฐ", romanization: "th", meaning: "pedestal" },
    { char: "ฑ", romanization: "th/d", meaning: "actor" },
    { char: "ฒ", romanization: "th", meaning: "elder" },
    { char: "ณ", romanization: "n", meaning: "novice monk" },
    { char: "ด", romanization: "d", meaning: "child" },
    { char: "ต", romanization: "t", meaning: "turtle" },
    { char: "ถ", romanization: "th", meaning: "bag" },
    { char: "ท", romanization: "th", meaning: "soldier" },
    { char: "ธ", romanization: "th", meaning: "flag" },
    { char: "น", romanization: "n", meaning: "mouse" },
    { char: "บ", romanization: "b", meaning: "leaf" },
    { char: "ป", romanization: "p", meaning: "fish" },
    { char: "ผ", romanization: "ph", meaning: "bee" },
    { char: "ฝ", romanization: "f", meaning: "lid" },
    { char: "พ", romanization: "ph", meaning: "wall" },
    { char: "ฟ", romanization: "f", meaning: "teeth" },
    { char: "ภ", romanization: "ph", meaning: "ship" },
    { char: "ม", romanization: "m", meaning: "horse" },
    { char: "ย", romanization: "y", meaning: "giant" },
    { char: "ร", romanization: "r", meaning: "boat" },
    { char: "ล", romanization: "l", meaning: "monkey" },
    { char: "ว", romanization: "w", meaning: "ring" },
    { char: "ศ", romanization: "s", meaning: "pavilion" },
    { char: "ษ", romanization: "s", meaning: "hermit" },
    { char: "ส", romanization: "s", meaning: "tiger" },
    { char: "ห", romanization: "h", meaning: "chest" },
    { char: "ฬ", romanization: "l", meaning: "kite" },
    { char: "อ", romanization: "silent", meaning: "basin" },
    { char: "ฮ", romanization: "h", meaning: "owl" },
  ],
  Vowels: [
    { char: "ะ", romanization: "a", meaning: "short a" },
    { char: "า", romanization: "aa", meaning: "long a" },
    { char: "ิ", romanization: "i", meaning: "short i" },
    { char: "ี", romanization: "ii", meaning: "long i" },
    { char: "ึ", romanization: "ʉ", meaning: "short ʉ" },
    { char: "ื", romanization: "ʉʉ", meaning: "long ʉ" },
  ],
  Tones: [
    { char: "่", romanization: "low tone", meaning: "first tone mark" },
    { char: "้", romanization: "falling tone", meaning: "second tone mark" },
    { char: "๊", romanization: "high tone", meaning: "third tone mark" },
    { char: "๋", romanization: "rising tone", meaning: "fourth tone mark" },
  ],
  Practice: [
    { word: "สวัสดี", phonetic: "sa-wat-dee", meaning: "hello" },
    { word: "ขอบคุณ", phonetic: "khop-khun", meaning: "thank you" },
    { word: "ใช่", phonetic: "chai", meaning: "yes" },
    { word: "ไม่", phonetic: "mai", meaning: "no" },
    { word: "กิน", phonetic: "gin", meaning: "to eat" },
    { word: "น้ำ", phonetic: "nam", meaning: "water" },
  ],
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-thai-dark text-center mb-4">
          Learn Thai Alphabet
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Master the Thai script with our interactive learning tools
        </p>

        <CategorySelector
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
          {selectedCategory === "Practice" ? (
            THAI_CHARACTERS.Practice.map((item) => (
              <PracticeCard
                key={item.word}
                word={item.word}
                phonetic={item.phonetic}
                meaning={item.meaning}
              />
            ))
          ) : (
            THAI_CHARACTERS[selectedCategory as keyof typeof THAI_CHARACTERS].map((char) => (
              <CharacterCard
                key={char.char}
                character={char.char}
                romanization={char.romanization}
                meaning={char.meaning}
              />
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;