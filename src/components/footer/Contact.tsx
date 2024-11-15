import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Logo from "../navigation/Logo";

export default function Contact() {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <h3 className="text-lg font-bold">Contact</h3>
      <Logo onlyLogo={true} />
      <div className="flex flex-col">
        <span className="flex items-center gap-2">
          <MapPinIcon className="w-4 h-4" />
          <a
            href="https://maps.app.goo.gl/ADjLx6CgadYbtt6f7"
            rel="noreferrer"
            target="_blank"
          >
            1234 Main St, Anytown, USA
          </a>
        </span>
        <span className="flex items-center gap-2">
          <MailIcon className="w-4 h-4" />
          <a href="mailto:info@bettereveryday.com">info@bettereveryday.com</a>
        </span>
        <span className="flex items-center gap-2">
          <PhoneIcon className="w-4 h-4" />
          <a href="tel:123-456-7890">123-456-7890</a>
        </span>
      </div>
    </div>
  );
}
