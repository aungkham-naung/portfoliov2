"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 1000;
  const nextWordDelay = 500;

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;

    if (!isDeleting && displayedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    }

    if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length === 0) {
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, nextWordDelay);
    }
  }, [displayedText, isDeleting, words, currentWordIndex]);

  return (
    <div
      className={cn(
        "text-base sm:text-lg md:text-xl lg:text-[30px] font-bold text-center",
        className
      )}
    >
      <motion.span>{displayedText}</motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-white",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
