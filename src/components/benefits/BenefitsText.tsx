export default function BenefitsText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h2 className="text-3xl md:text-2xl lg:text-5xl font-semibold tracking-wide leading-tight">
        {title}
      </h2>
      <p className="font-semibold tracking-wide text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}
