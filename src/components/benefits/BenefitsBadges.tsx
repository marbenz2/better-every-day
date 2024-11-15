export default function BenefitsBadges({ badges }: { badges: string[] }) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {badges.map((badge, index) => (
        <div
          key={badge + index}
          className="border border-neutral-400 rounded-sm px-2 py-1 badge badge-primary cursor-default hover:bg-green-500 transition-colors duration-300 text-base md:text-sm lg:text-base"
        >
          {badge}
        </div>
      ))}
    </div>
  );
}
