export default function Awards() {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <h3 className="text-lg font-bold">Awards</h3>
      <div className="flex gap-4">
        <img
          src="/images/badges/badge1.png"
          alt="1st class badge"
          className="w-20 h-20 aspect-square"
        />
        <img
          src="/images/badges/badge2.png"
          alt="best UX badge"
          className="w-20 h-20 aspect-square"
        />
      </div>
    </div>
  );
}
