import Image from "next/image";
import React from "react";
import { Language } from "@/lib/i18n";

const Footer = ({ lang }: { lang: Language }) => {
  return (
    <footer className="footer  z-20 py-1 md:py-8 shadow-lg backdrop-blur-xl text-white">
      <div className="container mx-auto flex items-center justify-between">
        <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            src="/navbarLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>
        <p className="text-slate-600">All rights reserved.</p>
        <div className="flex">
          <a href="https://github.com/gurkanyigitgr" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.linkedin.com/in/gurkanyigit/" target="_blank">
            <Image
              src="/linkedin.svg"
              alt="Linkedin Icon"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
