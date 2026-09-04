import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { ArrowIcon } from "../components/Icons";
import { WA_MESSAGES } from "../data/business";

const STEPS = [
  {
    t: "Tell us what you need",
    d: "Share your schedule, route, and how long you'll need a driver for.",
  },
  {
    t: "We match a driver",
    d: "A vetted, professional driver is assigned to fit your timing.",
  },
  {
    t: "Confirm the details",
    d: "Pickup point, duration, and pricing are agreed before the driver arrives.",
  },
  {
    t: "Ride with confidence",
    d: "A trained driver takes you where you need to go, on your schedule.",
  },
];

const STANDARDS = [
  {
    t: "Vetted, professional drivers",
    d: "Every driver is background-checked, trained, and held to one standard.",
  },
  {
    t: "Flexible by the trip or the day",
    d: "Book a single run, a full day, or a recurring schedule.",
  },
  {
    t: "Discreet by default",
    d: "Quiet, professional service with no unnecessary contact.",
  },
  {
    t: "Covers your routes",
    d: "Interstate and interstate, wherever your day takes you.",
  },
];

export default function DriverRequester() {
  return (
    <>
      <section className="hero hero-sm">
        <RoadCanvas />
        <div className="hero-scrim" />
        <div className="hero-inner">
          <Reveal>
            <div className="hero-eye" style={{ margin: "0 auto 26px" }}>
              <div className="hero-dot" />
              <span>REQUEST A DRIVER</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-h1">
              A trusted driver,
              <br />
              <span className="tg">whenever you need one.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero-sub" style={{ margin: "0 auto 36px" }}>
              Request a vetted, professional driver to take you where you need
              to go — a single trip, a full day, or an ongoing schedule.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-btns">
              <WhatsAppCTA message={WA_MESSAGES.driverRequest}>
                Request a Driver
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
              Reserved in one message,
              <br />
              <span className="tg">handled from there.</span>
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
            <div className="eyebrow">why request a driver</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              The same standard,
              <br />
              <span className="tg">every trip.</span>
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

      <section className="cta-strip">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <RoadCanvas intensity="normal" />
        </div>
        <div className="cta-strip-in">
          <Reveal>
            <h2 className="cta-strip-h">
              Need a driver
              <br />
              <span className="tg">today?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <WhatsAppCTA message={WA_MESSAGES.driverRequest}>
              Request a Driver <ArrowIcon />
            </WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
