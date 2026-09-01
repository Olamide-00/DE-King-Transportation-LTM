import { waLink } from "../data/business";

export default function WhatsAppCTA({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`${variant === "primary" ? "btn-p" : "btn-s"} ${className}`}
    >
      {children}
    </a>
  );
}
