import { Link } from "react-router-dom";
import logo from "../assets/logo-emblem.png";
import { BUSINESS } from "../data/business";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fi-in">
        <div className="fg">
          <div>
            <Link to="/" className="nav-logo">
              <img src={logo} alt="De Kings" className="nav-mark-img" />
              <div className="nav-wordmark">
                De <span className="tg">Kings</span>
              </div>
            </Link>
            <p className="fb-desc">
              {BUSINESS.name} — premium rides, package logistics, and
              reservations across {BUSINESS.address}. The app is coming.
            </p>
            <div className="fsocs">
              <a
                className="fsoc"
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                className="fsoc"
                href={`mailto:${BUSINESS.email}`}
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          <div>
            <div className="fc-t">navigate</div>
            <div className="fc-links">
              <Link className="flnk" to="/book-a-ride">
                Book a Ride
              </Link>
              <Link className="flnk" to="/logistics">
                Logistics
              </Link>
              <Link className="flnk" to="/reservations">
                Reservations
              </Link>
            </div>
          </div>

          <div>
            <div className="fc-t">company</div>
            <div className="fc-links">
              <Link className="flnk" to="/investors">
                Investors
              </Link>
              <Link className="flnk" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="fc-t">contact</div>
            <div className="fc-links">
              <span className="flnk" style={{ cursor: "default" }}>
                {BUSINESS.phoneDisplay}
              </span>
              <a className="flnk" href={`mailto:${BUSINESS.email}`}>
                {BUSINESS.email}
              </a>
              <span className="flnk" style={{ cursor: "default" }}>
                {BUSINESS.instagram}
              </span>
            </div>
          </div>
        </div>

        <div className="fbot">
          <div className="fcopy">
            © {new Date().getFullYear()} {BUSINESS.name} — all rights reserved
          </div>
          <div className="fblnks">
            <span className="fblnk">privacy_policy</span>
            <span className="fblnk">terms_of_service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
