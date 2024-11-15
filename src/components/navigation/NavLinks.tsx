import { useMediaQuery } from "../../hooks/use-media-query";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/navlinks.json";

export default function NavLinks() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <MobileMenu navLinks={navLinks} />;
  }

  return (
    <div className="hidden md:block">
      <ul className="flex gap-4">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.title} className="font-semibold">
              <a href={navLink.href}>{navLink.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
