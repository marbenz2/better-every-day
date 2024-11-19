export default function Login() {
  return (
    <div className="flex gap-4">
      <button className="bg-green-500 px-2 sm:px-4 py-2 text-xs md:text-base rounded-sm font-semibold border border-green-500 hover:bg-green-400/50 backdrop-blur-lg transition-colors duration-300">
        Try for Free
      </button>
      <button className="border border-neutral-400 px-2 sm:px-4 py-2 text-xs md:text-base rounded-sm font-semibold hover:bg-neutral-200 transition-colors duration-300">
        Sign In
      </button>
    </div>
  );
}
