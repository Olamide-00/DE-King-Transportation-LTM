type P = { size?: number };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CarIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4.5 15.5V12l1.3-3.8A2 2 0 0 1 7.7 6.9h8.6a2 2 0 0 1 1.9 1.3L19.5 12v3.5" />
      <path d="M3 15.5h18v2.3a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-.8H6.2v.8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M5.8 12h12.4M8 9.2h8" />
      <path d="M9 6.9l.6-1.6h4.8l.6 1.6" />
      <circle cx="7.3" cy="17.4" r="1.3" />
      <circle cx="16.7" cy="17.4" r="1.3" />
    </svg>
  );
}

export function PackageIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3.2l8.5 4.6v8.4L12 20.8l-8.5-4.6V7.8z" />
      <path d="M3.5 7.8L12 12l8.5-4.2M12 12v8.8" />
      <path d="M7.2 5.5l8.6 4.6M9 4.4l8.5 4.5" strokeWidth="1.1" />
    </svg>
  );
}

export function CalendarIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3.2" y="5" width="17.6" height="15.5" rx="2" />
      <path d="M3.2 9.6h17.6" />
      <path d="M7.6 3v4M16.4 3v4" />
      <path
        d="M6.8 5.7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM17.2 5.7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M7 13.2h2.2M11.4 13.2h2.2M15.8 13.2h1.8M7 16.6h2.2M11.4 16.6h2.2"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function MapPinIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 21.5s6.8-7.1 6.8-12.3A6.8 6.8 0 0 0 5.2 9.2c0 5.2 6.8 12.3 6.8 12.3z" />
      <circle cx="12" cy="9.2" r="2.6" />
      <ellipse
        cx="12"
        cy="21.6"
        rx="3.4"
        ry="0.7"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.06L2 22l5.2-1.47a9.9 9.9 0 0 0 4.84 1.24c5.46 0 9.91-4.45 9.91-9.9C21.95 6.44 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.55-.74-3-1.24-4.92-4.28-5.07-4.48-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.6-.36.8-.36h.58c.18 0 .43-.07.67.51.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.12.99 2.05 1.31 2.35 1.46.3.15.47.13.65-.07.17-.2.73-.83.93-1.11.2-.29.4-.24.66-.14.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
    </svg>
  );
}

export function MailIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="1.8" />
      <path d="M3.3 6.5L12 13 20.7 6.5" />
      <path d="M3 18l6.2-5.4M21 18l-6.2-5.4" strokeWidth="1.2" opacity="0.55" />
    </svg>
  );
}

export function PhoneIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M6.6 3.4h3.1l1.3 4.2-2.3 1.7a11.4 11.4 0 0 0 5.9 5.9l1.7-2.3 4.2 1.3v3.1c0 1.1-.9 2-2 1.9C10.6 18.7 5.3 13.4 4.7 5.4a2 2 0 0 1 1.9-2z" />
      <path d="M15 3.2c1.9.2 3.5 1.8 3.7 3.7" strokeWidth="1.2" opacity="0.6" />
      <path d="M14.6 5.6c1 .1 1.8.9 1.9 1.9" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export function InstagramIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
        stroke="none"
        opacity="0.4"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TruckIcon({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M1.5 7.5h11v9h-11z" />
      <path d="M1.5 11h11M4.8 7.5v9" strokeWidth="1.1" opacity="0.55" />
      <path d="M12.5 10.5h3.8l3.2 3v3h-7z" />
      <path d="M16.3 10.5v3h3.2" strokeWidth="1.1" opacity="0.55" />
      <circle cx="5.8" cy="17.3" r="1.7" />
      <circle cx="17" cy="17.3" r="1.7" />
    </svg>
  );
}

export function ArrowIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H4M12 2V10"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function BikeIcon({ size = 22 }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5.5" cy="17.3" r="3.3" />
      <circle cx="18.3" cy="17.3" r="3.3" />
      <path d="M5.5 17.3 9.2 9.8h3.1l3 4.8 3-3.2h1.5" />
      <path d="M9.2 9.8 7.6 6.9h-2" />
      <path d="M12.3 9.8 14 7.4h2.2" strokeWidth="1.2" opacity="0.6" />
      <path d="M18.3 17.3 15.3 14.6" />
    </svg>
  );
}
