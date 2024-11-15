import { navLinks } from "../../data/navlinks.json";

export default function MainLinks() {
  return (
    <div className="flex flex-col w-full items-start lg:items-center gap-2">
      <div className="flex flex-col gap-2 w-fit">
        <h3 className="text-lg font-bold">Main Links</h3>
        <ul className="flex flex-col">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.title}>
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
