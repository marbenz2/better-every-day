interface Review {
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  quote: string;
  photo: string;
}

const color = [
  { background: "bg-sky-500" },
  { background: "bg-gray-600", text: "text-neutral-100" },
  { background: "bg-emerald-500" },
  { background: "bg-indigo-600" },
];

export default function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  return (
    <div
      className={`flex flex-col ${color[index].background} rounded-sm w-full justify-between gap-12 py-12 px-8 ${color[index].text}`}
    >
      <img
        src={review.companyLogo}
        alt={review.company}
        className="h-16 grayscale"
      />
      <p className="text-center">"{review.quote}"</p>
      <div className="flex items-center justify-center gap-2">
        <img
          src={review.photo}
          alt={review.name}
          className="w-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{review.name}</p>
          <p>{review.position}</p>
        </div>
      </div>
    </div>
  );
}
