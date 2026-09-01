import { Link } from "react-router-dom";
import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import MagCard from "../components/MagCard";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { PackageIcon, MapPinIcon, BikeIcon, TruckIcon } from "../components/Icons";
import { WA_MESSAGES, COVERAGE } from "../data/business";

const MODES = [
  {
    icon: <PackageIcon />,
    title: "Send a Package",
    desc: "Give us the pickup point, drop-off address, and what's being sent — we handle the rest, door to door.",
    waKey: "sendPackage" as const,
    cta: "Send a package",
  },
  {
    icon: <MapPinIcon />,
    title: "Receive on Your Behalf",
    desc: "Can't be there for a pickup? We collect a package for you and deliver it wherever you need it.",
    waKey: "receivePackage" as const,
    cta: "Arrange a pickup",
  },
];

const LOGISTICS_STEPS = [
  { t: "Describe the package", d: "Size, weight (roughly), what it is, and where it's going — sent in one message." },
  { t: "Get a delivery quote", d: "Priced by distance and package size, confirmed before pickup." },
  { t: "We collect it", d: "A rider or driver picks up from the exact location you specify, at the time you agree." },
  { t: "Delivery confirmed", d: "You get a message the moment it's dropped off — with the recipient's confirmation." },
];

export default function Logistics() {
  return (
    <>
      <section className="page-hero">
        <RoadCanvas intensity="low" />
        <div className="hero-scrim" />
        <div className="page-hero-in">
          <Reveal>
            <div className="hero-eye">
              <div className="hero-dot" />
              <span>LOGISTICS</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-h1">
              Send it. Receive it.
              <br />
              <span className="tg">Track it by message.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-sub" style={{ marginBottom: 30 }}>
              Door-to-door package delivery across {COVERAGE.base} and interstate — from a small
              envelope to a full van load.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <WhatsAppCTA message={WA_MESSAGES.sendPackage}>Send a package on WhatsApp →</WhatsAppCTA>
          </Reveal>
        </div>
      </section>

      {/* ── MODES ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal><div className="eyebrow">two ways to use logistics</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Sending or
              <br />
              <span className="tg">receiving — we've got it.</span>
            </h2>
          </Reveal>
          <div className="svc-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: 40 }}>
            {MODES.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <MagCard cls="svc-card">
                  <div className="svc-icon-wrap">{m.icon}</div>
                  <div className="svc-title">{m.title}</div>
                  <div className="svc-desc">{m.desc}</div>
                  <WhatsAppCTA message={WA_MESSAGES[m.waKey]} variant="secondary">{m.cta} →</WhatsAppCTA>
                </MagCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET FOR LOGISTICS ── */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal><div className="eyebrow">sized to the package</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              From an envelope
              <br />
              <span className="tg">to a full van load.</span>
            </h2>
          </Reveal>
          <div className="fleet-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: 40 }}>
            <Reveal delay={0}>
              <MagCard cls="fleet-card">
                <div className="svc-icon-wrap" style={{ marginBottom: 16 }}><BikeIcon /></div>
                <div className="fleet-tag">Dispatch Rider</div>
                <div className="fleet-name">Fast, Small Packages</div>
                <div className="fleet-desc">Documents, small parcels, same-town urgent deliveries — the quickest option we have.</div>
              </MagCard>
            </Reveal>
            <Reveal delay={90}>
              <MagCard cls="fleet-card">
                <div className="svc-icon-wrap" style={{ marginBottom: 16 }}><TruckIcon /></div>
                <div className="fleet-tag">Van / Truck</div>
                <div className="fleet-name">Bulk &amp; Large Items</div>
                <div className="fleet-desc">Furniture, multiple boxes, or bulk goods that need real boot space and multiple stops.</div>
              </MagCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal><div className="eyebrow">how delivery works</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Four messages.
              <br />
              <span className="tg">One delivered package.</span>
            </h2>
          </Reveal>
          <div className="steps-list" style={{ marginTop: 30 }}>
            {LOGISTICS_STEPS.map((s, i) => (
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
          <RoadCanvas intensity="low" />
        </div>
        <div className="cta-strip-in">
          <Reveal>
            <h2 className="cta-strip-h">
              Got something
              <br />
              <span className="tg">to send today?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <WhatsAppCTA message={WA_MESSAGES.sendPackage}>Send a package →</WhatsAppCTA>
              <Link to="/coverage" className="btn-s">Check coverage first</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
