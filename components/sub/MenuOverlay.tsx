import React from 'react';
import NavLink from './NavLink';

interface MenuOverlayProps {
  links: {
    path: string;
    title: string;
  }[];
  backgroundColor?: string;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  links,
  backgroundColor,
}) => {
  return (
    <div className='menu-overlay' style={{ backgroundColor: backgroundColor }}>
      <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
