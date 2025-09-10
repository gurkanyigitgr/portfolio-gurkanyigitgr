"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();

  const currentLang = pathname?.split("/")[1] || "tr";

  if (href.startsWith("#")) {
    if (pathname?.includes("/blog")) {
      const homeWithAnchor = `/${currentLang}${href}`;
      return (
        <Link
          href={homeWithAnchor}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {title}
        </Link>
      );
    } else {
      return (
        <a
          href={href}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {title}
        </a>
      );
    }
  }

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
