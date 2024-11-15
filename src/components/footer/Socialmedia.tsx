import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "lucide-react";

export default function Socialmedia() {
  return (
    <div className="flex flex-col w-full items-start lg:items-center gap-2">
      <div className="flex flex-col gap-2 w-fit">
        <h3 className="text-lg font-bold">Socials</h3>
        <div className="flex w-full justify-center gap-4">
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <FacebookIcon className="w-8 h-8" />
          </a>
          <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
            <YoutubeIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
