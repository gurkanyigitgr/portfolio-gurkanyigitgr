import About from "@/components/main/About";
import EmailSection from "@/components/main/EmailSection";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import CVDownload from "@/components/main/Projects";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { Language } from "@/lib/i18n";

export default function Home({ params }: { params: { lang: Language } }) {
  const { lang } = params;

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <CVDownload lang={lang} />
        <EmailSection lang={lang} />
        <Footer lang={lang} />
      </div>
    </main>
  );
}
