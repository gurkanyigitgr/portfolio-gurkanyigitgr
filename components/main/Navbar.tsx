"use client";
import Link from "next/link";
import { Language, translations } from "@/lib/i18n";
import React, { useState, useEffect } from "react";
import NavLink from "../sub/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../sub/MenuOverlay";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const getNavLinks = (lang: Language) => {
  const t = translations[lang];
  return [
    {
      title: t.home,
      path: `/${lang}`,
    },
    {
      title: t.skills,
      path: "#skills",
    },
    {
      title: t.downloadCV,
      path: "#cv",
    },
    {
      title: t.blog,
      path: `/${lang}/blog`,
    },
    {
      title: t.contact,
      path: "#contact",
    },
  ];
};

const Navbar = ({ lang = "tr" }: { lang?: Language }) => {
  const navLinks = getNavLinks(lang as Language);
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full h-auto fixed top-0 shadow-lg backdrop-blur-xl z-50">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 ">
        <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            src="/navbarLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 cursor-pointer items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <LanguageSwitcher currentLang={lang as Language} />
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div>
          <MenuOverlay links={navLinks} backgroundColor="rgba(3, 0, 20, 0.7)" />
          <div className="md:hidden fixed top-20 right-4 z-50">
            <LanguageSwitcher currentLang={lang as Language} />
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
