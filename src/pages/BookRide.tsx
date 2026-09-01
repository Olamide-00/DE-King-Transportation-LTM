import { Link } from "react-router-dom";
import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import MagCard from "../components/MagCard";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { CarIcon, BikeIcon, TruckIcon } from "../components/Icons";
import { FLEET, WA_MESSAGES, COVERAGE } from "../data/business";

const FLEET_ICONS: Record<string, React.ReactNode> = {
  Sedan: <CarIcon />,
  "SUV / Executive": <CarIcon />,
  Motorcycle: <BikeIcon />,
  "Van / Truck": <TruckIcon />,
};

const RIDE_STEPS = [
  {
    t: "Share your trip details",
    d: "Pickup point, drop-off, date/time, and number of passengers — that's all we need.",
  },
  {
    t: "Get a price and ETA",
    d: "We confirm the fare and how soon a driver can get to you, before you commit to anything.",
  },
  {
    t: "Driver details sent to you",
    d: "Your driver's name, vehicle, and contact are shared directly with you. No app, no waiting on a spinning map icon.",
  },
  {
    t: "Ride, arrive, done",
    d: "Pay on completion the way you'd expect — cash or transfer, confirmed with you upfront.",
  },
];

export default function BookRide() {
  return (
    <>
      <section className="page-hero">
        <RoadCanvas intensity="low" />
        <div className="hero-scrim" />
        <div className="page-hero-in">
          <Reveal>
            <div className="hero-eye">
              <div className="hero-dot" />
              <span>BOOK A RIDE</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-h1">
              Where to,
              <br />
              <span className="tg">today?</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-sub" style={{ marginBottom: 30 }}>
              Intrastate trips across {COVERAGE.base}, and interstate runs to{" "}
              {COVERAGE.interstate.join(", ")} — reserved directly, no app
              required.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <WhatsAppCTA message={WA_MESSAGES.bookRide}>
              Book a ride
            </WhatsAppCTA>
          </Reveal>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">choose your ride</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              A vehicle for
              <br />
              <span className="tg">every kind of trip.</span>
            </h2>
          </Reveal>
          <div className="fleet-grid" style={{ marginTop: 40 }}>
            {FLEET.filter((f) => f.tag !== "Van / Truck").map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <MagCard cls="fleet-card">
                  <div className="svc-icon-wrap" style={{ marginBottom: 16 }}>
                    {FLEET_ICONS[f.tag]}
                  </div>
                  <div className="fleet-tag">{f.tag}</div>
                  <div className="fleet-name">{f.name}</div>
                  <div className="fleet-desc">{f.desc}</div>
                </MagCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW BOOKING WORKS ── */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">how it works</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              From request
              <br />
              <span className="tg">to arrival.</span>
            </h2>
          </Reveal>
          <div className="steps-list" style={{ marginTop: 30 }}>
            {RIDE_STEPS.map((s, i) => (
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

      <section className="cta-strip">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <RoadCanvas intensity="normal" />
        </div>
        <div className="cta-strip-in">
          <Reveal>
            <h2 className="cta-strip-h">
              Ready when
              <br />
              <span className="tg">you are.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <WhatsAppCTA message={WA_MESSAGES.bookRide}>
                Book a ride
              </WhatsAppCTA>
              <Link to="/reservations" className="btn-s">
                Book ahead instead
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
