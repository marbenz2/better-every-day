import { PlayCircleIcon } from "lucide-react";

export default function CallToButtons() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center md:items-start lg:items-center lg:justify-start">
      <button className="bg-green-500 px-4 py-2 text-sm md:text-base rounded-sm font-semibold flex items-center gap-2 border border-green-500 hover:bg-green-400/50 transition-colors duration-300">
        <PlayCircleIcon className="w-5 h-5" />
        Get a 3-min overwiew
      </button>
      <a href="#" className="underline text-sm md:text-base">
        or, request a demo
      </a>
    </div>
  );
}
