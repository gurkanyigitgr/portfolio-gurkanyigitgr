"use client";

import React from "react";
import { Language, translations } from "@/lib/i18n";
import {
  DocumentArrowDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const CVDownload = ({ lang }: { lang: Language }) => {
  const t = translations[lang];

  return (
    <section
      className="container m-auto flex flex-col items-center justify-center py-20"
      id="cv"
    >
      <h2 className="text-5xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-8 text-center">
        {t.cvTitle}
      </h2>

      <p className="text-gray-300 text-center max-w-2xl mx-auto text-lg mb-12">
        {t.cvDescription}
      </p>

      <div className="max-w-md w-full px-4">
        <div className="bg-transparent border border-gray-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-[#124ae2] to-cyan-400 rounded-full flex items-center justify-center">
              <DocumentArrowDownIcon className="w-10 h-10 text-white" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">CV</h3>
              <a
                href="/cv-gurkan-yigit.pdf"
                download="cv-gurkan-yigit.pdf"
                className="bg-gradient-to-r from-[#124ae2] to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-3 mx-auto text-lg font-medium"
              >
                <DocumentArrowDownIcon className="w-6 h-6" />
                {t.downloadButton}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          {t.whatYouWillFind}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.cvFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVDownload;
