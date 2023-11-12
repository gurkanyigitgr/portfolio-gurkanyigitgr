interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a
      href={href}
      className='cursor-pointer block py-2 pl-3 pr-4 text-[#fff] sm:text-lg rounded md:p-0 hover:text-cyan-500'
    >
      {title}
    </a>
  );
};

export default NavLink;
