export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3366ff" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#logo-g)" />
      <path
        d="M11 14a4 4 0 014-4h10a4 4 0 014 4v7a4 4 0 01-4 4h-8l-4 3v-3a4 4 0 01-2-3v-8z"
        fill="white"
      />
      <circle cx="17" cy="17.5" r="1.5" fill="#3366ff" />
      <circle cx="22" cy="17.5" r="1.5" fill="#3366ff" />
      <path
        d="M16 20.5c1 1.2 2.4 1.8 4 1.8s3-.6 4-1.8"
        stroke="#3366ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
