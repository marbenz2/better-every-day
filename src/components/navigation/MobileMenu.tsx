import { MenuIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type NavLinks = {
  title: string;
  href: string;
}[];

export default function MobileMenu({ navLinks }: { navLinks: NavLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !menuIconRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center items-center h-full px-4">
      <div ref={menuIconRef}>
        <MenuIcon onClick={handleOnClick} />
      </div>
      <MobileMenuContent
        isOpen={isOpen}
        handleOnClick={handleOnClick}
        ref={menuRef}
        navLinks={navLinks}
      />
    </div>
  );
}

const MobileMenuContent = React.forwardRef<
  HTMLDivElement,
  {
    isOpen: boolean;
    navLinks: NavLinks;
    handleOnClick: () => void;
  }
>(({ isOpen, navLinks, handleOnClick }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute top-0 left-0 ${
        isOpen ? "w-2/3 border-r shadow-lg" : "w-0 border-r-0"
      } h-screen bg-neutral-100 z-50 transition-all duration-300 overflow-clip`}
    >
      <ul className="flex flex-col h-full">
        <div className="flex py-8">
          <h3 className="text-xl font-bold px-4">Navigation</h3>
        </div>
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.title}
            className={`flex font-semibold h-12 border-t ${
              index === navLinks.length - 1 && "border-b"
            }`}
          >
            <a
              onClick={handleOnClick}
              href={navLink.href}
              className="flex w-full h-full items-center px-4 hover:bg-green-500 transition-all duration-100"
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
