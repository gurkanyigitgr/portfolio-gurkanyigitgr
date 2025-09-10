"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";

import { Language, translations } from "@/lib/i18n";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

import TabButton from "@/components/sub/TabButton";

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang];

  const TAB_DATA = [
    {
      title: t.skillsTab,
      id: "skills",
      content: (
        <div className="grid grid-cols-2 space-y-1 text-gray-200">
          <p>Next.js</p>
          <p>React</p>
          <p>JavaScript</p>
          <p>Typescript</p>
          <p>Css, Sass-Scss, TailwindCss</p>
          <p>UI Tools(Materail-UI, Shadcn UI)</p>
          <p>Redux</p>
          <p>MongoDB</p>
          <p>Prisma</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Jest</p>
          <p>Git</p>
        </div>
      ),
    },
    {
      title: t.education,
      id: "education",
      content: (
        <div className="flex flex-col md:space-y-1">
          <p>
            Software Engineering Master&apos;s Degree Bandırma 17 Eylül
            University
          </p>
        </div>
      ),
    },
    {
      title: t.courses,
      id: "courses",
      content: (
        <div className="flex flex-col md:space-y-1">
          <p>The Complete 2022 Web Development Bootcamp, Angela Yu</p>
          <p>Modern HTML &amp; CSS From The Beginning, Brad Traversy</p>
          <p>Advanced CSS and Sass, Jonas Schmedtmann</p>
          <p>The Complete JavaScript Course 2022, Jonas Schmedtmann</p>
        </div>
      ),
    },
    {
      title: t.certifications,
      id: "certifications",
      content: (
        <div className="flex flex-col md:space-y-1">
          <p>ReCoded Turkey Frontend Bootcamp</p>
          <p>Trendyol Backend Bootcamp</p>
        </div>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="container m-auto mt-0 md:mt-36 text-white z-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <div>
          <h2 className="text-5xl md:text-6xl text-center md:text-left text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6 mt-5 md:mt-0">
            {t.aboutMe}
          </h2>
          <p className="lg:text-lg mb-10">{t.aboutDescription}</p>
          <div className="flex flex-row justify-start mt-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {TAB_DATA[0].title}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {TAB_DATA[1].title}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("courses")}
              active={tab === "courses"}
            >
              {TAB_DATA[2].title}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {TAB_DATA[3].title}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <Image
          src="/aboutImg.png"
          width={700}
          height={700}
          alt="express"
          className="mt-10 md:mt-0"
        />
      </div>
    </section>
  );
};

export default About;
