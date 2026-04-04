type Props = {
  className?: string;
};

/** Shared logo mark: white airplane facing right with subtle rightward motion. */
export function BrandAirplaneMark({ className = "" }: Props) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 ${className}`}
    >
      <svg
        className="h-5 w-5 text-white animate-logo-glide"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    </span>
  );
}
