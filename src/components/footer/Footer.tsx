import Copyright from "./Copyright";
import Socialmedia from "./Socialmedia";
import SubLinks from "./SubLinks";
import MainLinks from "./MainLinks";
import Awards from "./Awards";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 w-full py-6 px-6 items-center justify-center bg-gray-600 text-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-12 lg:gap-0">
        <div className="flex flex-col gap-12 lg:gap-8 w-full justify-center">
          <Contact />
          <Awards />
        </div>
        <MainLinks />
        <SubLinks />
        <Socialmedia />
      </div>
      <hr className="w-full" />
      <Copyright />
    </footer>
  );
}
