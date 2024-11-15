export default function Logo({ onlyLogo }: { onlyLogo: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2 hover:text-neutral-900">
      <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
      {onlyLogo ? null : (
        <h2 className="hidden lg:block font-black">better every day</h2>
      )}
    </a>
  );
}
