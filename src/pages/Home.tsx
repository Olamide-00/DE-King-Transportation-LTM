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
} from "../components/Icons";
import { SERVICES, WA_MESSAGES, COVERAGE } from "../data/business";

const ICONS: Record<string, React.ReactNode> = {
  car: <CarIcon />,
  package: <PackageIcon />,
  calendar: <CalendarIcon />,
};

const STEPS = [
  {
    t: "Message us on WhatsApp",
    d: "Tell us what you need — a ride, a package picked up, or a reservation — with pickup, drop-off, and timing.",
  },
  {
    t: "We confirm details & price",
    d: "You get a clear price and timing before anything is booked. No surprises.",
  },
  {
    t: "We handle the trip",
    d: "A driver or rider is assigned and you get updates by message until it's done.",
  },
  {
    t: "Delivered, on time",
    d: "Ride completed or package delivered — simple as that.",
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
              beyond — booked directly on WhatsApp. A dedicated app is on the
              way.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-btns">
              <WhatsAppCTA message={WA_MESSAGES.bookRide}>
                Book on WhatsApp →
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
              <span className="hero-badge">Booking via WhatsApp</span>
              <span className="hero-badge">App coming soon</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">what we offer</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Three ways to move,
              <br />
              <span className="tg">all in one message.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub" style={{ marginBottom: 44 }}>
              No app to download yet — every service below is one WhatsApp
              message away.
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

      {/* ── HOW IT WORKS ── */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">how it works</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Four steps.
              <br />
              <span className="tg">Zero app required.</span>
            </h2>
          </Reveal>
          <div className="steps-list" style={{ marginTop: 30 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="step-row">
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <div className="step-t">{s.t}</div>
                    <div className="step-d">{s.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE TEASER ── */}
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

      {/* ── APP COMING SOON ── */}
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
                  Booking rides and logistics will move in-app soon — for now,
                  WhatsApp gets you the same service, one message at a time.
                </div>
              </div>
              <Link to="/investors" className="link-arrow">
                For investors →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <RoadCanvas intensity="low" />
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
              Message us on WhatsApp <ArrowIcon />
            </WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
