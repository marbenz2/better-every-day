import { links } from "../../data/navlinks.json";

export default function SubLinks() {
  return (
    <div className="flex flex-col w-full items-start lg:items-center gap-2">
      <div className="flex flex-col gap-2 w-fit">
        <h3 className="text-lg font-bold">Sub Links</h3>
        <ul className="flex flex-col">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
