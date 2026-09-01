import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-emblem.png";
import { waLink, WA_MESSAGES } from "../data/business";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/book-a-ride", label: "Book a Ride" },
  { to: "/logistics", label: "Logistics" },
  { to: "/reservations", label: "Reservations" },
  { to: "/coverage", label: "Coverage" },
  { to: "/investors", label: "Investors" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [navigate]);

  return (
    <nav className={`nav ${scrolled ? "on" : ""}`}>
      <Link to="/" className="nav-logo" aria-label="De Kings home">
        <img src={logo} alt="De Kings" className="nav-mark-img" />
        <div className="nav-wordmark">
          De <span className="tg">Kings</span>
        </div>
      </Link>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => `nb ${isActive ? "on" : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      <a className="nav-cta" href={waLink(WA_MESSAGES.general)} target="_blank" rel="noreferrer">
        Book on WhatsApp →
      </a>

      <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
