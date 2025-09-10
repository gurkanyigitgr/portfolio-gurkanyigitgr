import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: Array<{
    path: string;
    title: string;
  }>;
  backgroundColor?: string;
}

const MenuOverlay = ({
  links,
  backgroundColor = "rgba(3, 0, 20, 0.7)",
}: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center" style={{ backgroundColor }}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
