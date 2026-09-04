import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import WhatsAppCTA from "../components/WhatsAppCTA";
import RiderPartnerForm from "../components/RiderPartnerForm";
import LogisticsForm from "../components/LogisticsForm";
import { ArrowIcon } from "../components/Icons";
import { WA_MESSAGES, COVERAGE } from "../data/business";

const STEPS = [
  {
    t: "Send your request",
    d: "Message us your origin town and destination town — no app needed yet.",
  },
  {
    t: "Get matched fast",
    d: "A verified rider is assigned to your route, usually within minutes.",
  },
  {
    t: "Track your ride",
    d: "You know exactly who's coming and how far out they are.",
  },
  {
    t: "Arrive on time",
    d: "Move between towns without waiting around for a car or bus.",
  },
];

const STANDARDS = [
  {
    t: "Built for the routes between towns",
    d: "Intercity hops across Ogun State where a bike gets you there faster.",
  },
  {
    t: "Vetted riders",
    d: "Every KX rider is verified and trained before they carry a passenger.",
  },
  {
    t: "Helmet, always",
    d: "A helmet is provided and required for every single ride.",
  },
  {
    t: "Fair, upfront pricing",
    d: "You know the fare before the ride starts — no surprises on arrival.",
  },
];

export default function KxRide() {
  return (
    <>
      <section className="hero hero-sm">
        <RoadCanvas />
        <div className="hero-scrim" />
        <div className="hero-inner">
          <Reveal>
            <div className="hero-eye" style={{ margin: "0 auto 26px" }}>
              <div className="hero-dot" />
              <span>KX RIDE</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-h1">
              Fast bike rides,
              <br />
              <span className="tg">between towns in {COVERAGE.base}.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-sub" style={{ margin: "0 auto 36px" }}>
              KX Ride is the quickest way to move between cities — affordable,
              tracked, and reserved in one message.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-btns">
              <WhatsAppCTA message={WA_MESSAGES.kxRide}>
                Request a KX Ride
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">how it works</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Reserved in seconds,
              <br />
              <span className="tg">on your way in minutes.</span>
            </h2>
          </Reveal>

          <div className="standards-grid" style={{ marginTop: 36 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="standard-item">
                  <div className="standard-t">
                    {i + 1}. {s.t}
                  </div>
                  <div className="standard-d">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">why kx ride</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Built for intercity trips,
              <br />
              <span className="tg">done right.</span>
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
          <Reveal>
            <div className="eyebrow">join kx</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Ride with us,
              <br />
              <span className="tg">or partner with us.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub" style={{ marginBottom: 30 }}>
              Interested in riding for KX, or partnering your fleet or business
              with us? Register below and our team will reach out.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <RiderPartnerForm />
          </Reveal>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal>
            <div className="eyebrow">need something delivered?</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Package logistics,
              <br />
              <span className="tg">whatever the size.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub" style={{ marginBottom: 30 }}>
              From a small parcel on a bike to bulk goods that need a van — tell
              us what you're moving and pick the right vehicle.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <LogisticsForm />
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
              Need to get to another town
              <br />
              <span className="tg">right now?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <WhatsAppCTA message={WA_MESSAGES.kxRide}>
              Request a KX Ride <ArrowIcon />
            </WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
