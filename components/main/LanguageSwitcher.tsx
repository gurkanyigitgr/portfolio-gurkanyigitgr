"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, Language } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Language;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLocalizedPath = (newLang: Language) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLang;
    return `/${segments.join("/")}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-white hover:text-cyan-400 transition-colors"
      >
        <span className="text-xl">{languages[currentLang].flag}</span>
        <span className="hidden sm:block">{languages[currentLang].name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 min-w-[120px]">
          {Object.entries(languages).map(([langCode, lang]) => (
            <Link
              key={langCode}
              href={getLocalizedPath(langCode as Language)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLang === langCode
                  ? "bg-gray-800 text-cyan-400"
                  : "text-white"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
