"use client";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Language, translations } from "@/lib/i18n";

const EmailSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang];

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3sughwp",
          "template_qbgqoa1",
          form.current,
          "aeOO8jQeCTpuEdB_H"
        )
        .then(
          (result) => {
            form.current?.reset();
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className="container m-auto grid grid-cols-1 md:grid-cols-2 md:my-12 gap-5 relative z-20 px-10"
    >
      <div className="z-10">
        <h2 className="text-5xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-4 ">
          {t.letsConnect}
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t.contactDescription}</p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/gurkanyigitgr" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.linkedin.com/in/gurkanyigit/" target="_blank">
            <Image
              src="/linkedin.svg"
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.instagram.com/gurkanyigitgr/" target="_blank">
            <Image
              src="/instagram.svg"
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              {t.yourEmail}
            </label>

            <input
              name="your_email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.emailPlaceholder}
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              {t.subject}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.subjectPlaceholder}
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              {t.message}
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t.messagePlaceholder}
            />
          </div>
          <button
            type="submit"
            className="button-primary text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {t.sendMessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
