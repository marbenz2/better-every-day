export default function Copyright() {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      &copy; {new Date().getFullYear()}
      <a
        href="https://www.marbenz.de"
        rel="noopener noreferrer"
        target="_blank"
      >
        MarBenz
      </a>
    </div>
  );
}
