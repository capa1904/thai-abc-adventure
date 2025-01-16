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
    { char: "ค", romanization: "k", meaning: "buffalo" },
    { char: "ง", romanization: "ng", meaning: "snake" },
    { char: "จ", romanization: "j", meaning: "plate" },
    { char: "ฉ", romanization: "ch", meaning: "cymbals" },
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