import { Link } from "react-router-dom";
import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import MagCard from "../components/MagCard";
import WhatsAppCTA from "../components/WhatsAppCTA";
import {
  CarIcon,
  PackageIcon,
  CalendarIcon,
  ArrowIcon,
  BikeIcon,
} from "../components/Icons";
import { SERVICES, WA_MESSAGES, COVERAGE } from "../data/business";

const ICONS: Record<string, React.ReactNode> = {
  car: <CarIcon />,
  package: <PackageIcon />,
  calendar: <CalendarIcon />,
  bike: <BikeIcon />,
};

const STANDARDS = [
  {
    t: "Punctual, always",
    d: "Every pickup and delivery runs to the time you're given, not an estimate.",
  },
  {
    t: "Vetted, professional drivers",
    d: "Every driver is verified, trained, and held to one standard of conduct.",
  },
  {
    t: "Tracked from start to finish",
    d: "You always know where your ride or package is until it's done.",
  },
  {
    t: "Discreet by default",
    d: "Quiet, professional service — no fuss, no unnecessary contact.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <RoadCanvas />
        <div className="hero-scrim" />
        <div className="hero-inner">
          <Reveal>
            <div className="hero-eye" style={{ margin: "0 auto 26px" }}>
              <div className="hero-dot" />
              <span>DE KINGS TRANSPORTS &amp; LOGISTICS</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-h1">
              Premium transport
              <br />
              &amp; <span className="tg">logistics,</span> on your terms.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-sub" style={{ margin: "0 auto 36px" }}>
              Rides, package delivery, and reservations across Ogun State and
              beyond — reserved in moments, handled with precision. A dedicated
              app is on the way.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-btns">
              <WhatsAppCTA message={WA_MESSAGES.bookRide}>
                Book a ride
              </WhatsAppCTA>
              <Link className="btn-s" to="/coverage">
                See our coverage
              </Link>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="hero-badges">
              <span className="hero-badge">Ogun State &amp; Interstate</span>
              <span className="hero-badge">
                Rides · Logistics · Reservations
              </span>
              <span className="hero-badge">24/7 Availability</span>
              <span className="hero-badge">App coming soon</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">what we offer</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Three ways to move,
              <br />
              <span className="tg">reserved in seconds.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub" style={{ marginBottom: 44 }}>
              No app to download yet — every service below can be reserved
              directly, and our team takes it from there.
            </p>
          </Reveal>

          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <MagCard cls="svc-card">
                  <div className="svc-icon-wrap">{ICONS[s.icon]}</div>
                  <div className="svc-title">{s.title}</div>
                  <div className="svc-desc">{s.short}</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to={`/${s.slug}`} className="link-arrow">
                      Learn more →
                    </Link>
                  </div>
                </MagCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">what to expect</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              The De Kings
              <br />
              <span className="tg">standard.</span>
            </h2>
          </Reveal>
          <div className="standards-grid" style={{ marginTop: 30 }}>
            {STANDARDS.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="standard-item">
                  <div className="standard-t">{s.t}</div>
                  <div className="standard-d">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-in">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 50,
              alignItems: "center",
            }}
          >
            <div>
              <Reveal>
                <div className="eyebrow">where we operate</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="sec-h2">
                  Based in {COVERAGE.base}.
                  <br />
                  <span className="tg">Built for interstate.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="sec-sub" style={{ marginBottom: 24 }}>
                  From everyday trips across {COVERAGE.base} to longer
                  interstate runs, De Kings covers the routes that matter most
                  to you.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <Link to="/coverage" className="link-arrow">
                  See full coverage map →
                </Link>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div
                className="coverage-tags"
                style={{ justifyContent: "flex-end" }}
              >
                {[
                  ...COVERAGE.intrastate.slice(0, 4),
                  ...COVERAGE.interstate.slice(0, 3),
                ].map((c) => (
                  <span key={c} className="coverage-tag">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="app-coming-banner">
              <div className="app-coming-glyph">＋</div>
              <div style={{ flex: 1 }}>
                <div className="app-coming-t">
                  The De Kings app is on the way.
                </div>
                <div className="app-coming-d">
                  Booking will move fully in-app soon — for now, our team
                  handles every reservation personally.
                </div>
              </div>
              <Link to="/investors" className="link-arrow">
                For investors →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-strip">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <RoadCanvas intensity="normal" />
        </div>
        <div className="cta-strip-in">
          <Reveal>
            <h2 className="cta-strip-h">
              Need a ride or a pickup
              <br />
              <span className="tg">right now?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <WhatsAppCTA message={WA_MESSAGES.general}>
              Reserve now <ArrowIcon />
            </WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
