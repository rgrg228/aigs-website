/* eslint-disable @next/next/no-img-element */
export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src="/images/logo.webp"
      alt="Chat2Sales"
      className={className}
    />
  );
}
