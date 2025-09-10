import { Language, languages } from "@/lib/i18n";

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang: lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  return children;
}
