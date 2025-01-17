import React, { useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import CategorySelector from "@/components/CategorySelector";
import { motion } from "framer-motion";
import PracticeCard from "@/components/PracticeCard";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Focus, ChevronLeft, ChevronRight } from "lucide-react";

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
    // Basic Greetings
    { word: "สวัสดี", phonetic: "sa-wat-dee", meaning: "hello" },
    { word: "ขอบคุณ", phonetic: "khop-khun", meaning: "thank you" },
    { word: "ลาก่อน", phonetic: "laa-gorn", meaning: "goodbye" },
    
    // Basic Responses
    { word: "ใช่", phonetic: "chai", meaning: "yes" },
    { word: "ไม่", phonetic: "mai", meaning: "no" },
    { word: "ได้", phonetic: "dai", meaning: "can/okay" },
    
    // Essential Verbs
    { word: "กิน", phonetic: "gin", meaning: "to eat" },
    { word: "ดื่ม", phonetic: "duem", meaning: "to drink" },
    { word: "นอน", phonetic: "non", meaning: "to sleep" },
    { word: "ไป", phonetic: "bpai", meaning: "to go" },
    { word: "มา", phonetic: "maa", meaning: "to come" },
    
    // Common Nouns
    { word: "น้ำ", phonetic: "nam", meaning: "water" },
    { word: "ข้าว", phonetic: "khao", meaning: "rice" },
    { word: "รถ", phonetic: "rot", meaning: "car" },
    { word: "บ้าน", phonetic: "baan", meaning: "house" },
    { word: "หมา", phonetic: "maa", meaning: "dog" },
    
    // Basic Questions
    { word: "อะไร", phonetic: "a-rai", meaning: "what" },
    { word: "ที่ไหน", phonetic: "tee-nai", meaning: "where" },
    { word: "เมื่อไร", phonetic: "meuua-rai", meaning: "when" },
    
    // Numbers
    { word: "หนึ่ง", phonetic: "neung", meaning: "one" },
    { word: "สอง", phonetic: "song", meaning: "two" },
    { word: "สาม", phonetic: "saam", meaning: "three" },
    
    // Common Adjectives
    { word: "ดี", phonetic: "dee", meaning: "good" },
    { word: "ร้อน", phonetic: "ron", meaning: "hot" },
    { word: "เย็น", phonetic: "yen", meaning: "cold" },
    { word: "ใหญ่", phonetic: "yai", meaning: "big" },
    { word: "เล็ก", phonetic: "lek", meaning: "small" },
  ],
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [isSingleCardMode, setIsSingleCardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const practiceWords = THAI_CHARACTERS.Practice;

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => 
      prev === 0 ? practiceWords.length - 1 : prev - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => 
      prev === practiceWords.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-thai-primary to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
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

        {selectedCategory === "Practice" && (
          <div className="flex justify-center mb-4">
            <ToggleGroup type="single" value={isSingleCardMode ? "single" : "grid"} onValueChange={(value) => setIsSingleCardMode(value === "single")}>
              <ToggleGroupItem value="grid" aria-label="Grid View">
                <Grid2X2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="single" aria-label="Single Card View">
                <Focus className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        )}

        {selectedCategory === "Practice" && isSingleCardMode ? (
          <div className="flex flex-col items-center">
            <motion.div
              key={currentCardIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-lg mx-auto"
            >
              <PracticeCard
                word={practiceWords[currentCardIndex].word}
                phonetic={practiceWords[currentCardIndex].phonetic}
                meaning={practiceWords[currentCardIndex].meaning}
              />
            </motion.div>
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                onClick={handlePrevCard}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <Button
                variant="outline"
                onClick={handleNextCard}
                className="flex items-center gap-2"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Card {currentCardIndex + 1} of {practiceWords.length}
            </p>
          </div>
        ) : (
          <div className={`grid gap-4 animate-fade-in ${
            selectedCategory === "Practice" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-2 md:grid-cols-3"
          }`}>
            {selectedCategory === "Practice" ? (
              <>
                {THAI_CHARACTERS.Practice.map((item) => (
                  <PracticeCard
                    key={item.word}
                    word={item.word}
                    phonetic={item.phonetic}
                    meaning={item.meaning}
                  />
                ))}
              </>
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
        )}
      </motion.div>
    </div>
  );
};

export default Index;