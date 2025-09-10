"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Language, translations } from "@/lib/i18n";

interface SkillTextProps {
  lang: Language;
}

const SkillText = ({ lang }: SkillTextProps) => {
  const t = translations[lang];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-0 md:mt-10 ">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] text-white opacity-[0.9] flex animate-pulse "
      >
        <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[15px] ">Think better with Next JS</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        {t.skillsSlogan}
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-200 mb-0 md:mb-10 mt-[10px] text-center"
      >
        {t.skillsDescription}
      </motion.div>
    </div>
  );
};

export default SkillText;
