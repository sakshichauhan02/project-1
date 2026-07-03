"use client";

import React from "react";
import { motion } from "framer-motion";

export interface CharacterBlurRevealProps {
  className?: string;
  staggerDelay?: number; // delay between items in seconds
  duration?: number; // duration of each transition in seconds
  once?: boolean;
}

export function CharacterBlurReveal({
  className = "",
  staggerDelay = 0.015,
  duration = 0.45,
  once = true,
}: CharacterBlurRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
      },
    },
  };

  // Render normal text as individual inline-block characters
  const renderNormalText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={itemVariants}
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </motion.span>
    ));
  };

  // Render colored words as individual inline-block words to preserve gradient clipping
  const renderColoredWords = (text: string) => {
    const words = text.split(" ");
    return words.map((word, wordIndex) => (
      <React.Fragment key={wordIndex}>
        <motion.span
          variants={itemVariants}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {word}
        </motion.span>
        {wordIndex < words.length - 1 && (
          <motion.span
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {" "}
          </motion.span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.05, margin: "0px 0px -50px 0px" }}
    >
      {renderNormalText("We Architect & Deploy ")}
      {renderColoredWords("Scalable AI Workflows")}
      {renderNormalText(".")}
    </motion.h1>
  );
}

export default CharacterBlurReveal;
