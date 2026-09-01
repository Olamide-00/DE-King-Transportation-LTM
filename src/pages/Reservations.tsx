import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import MagCard from "../components/MagCard";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { CalendarIcon, CarIcon, MapPinIcon } from "../components/Icons";
import { WA_MESSAGES } from "../data/business";

const USE_CASES = [
  { icon: <CalendarIcon />, title: "Events & Occasions", desc: "Weddings, owambe, church programs — reserve vehicles ahead so the day runs on schedule." },
  { icon: <CarIcon />, title: "Multi-Vehicle Trips", desc: "Travelling as a group? Reserve more than one vehicle for the same route and time." },
  { icon: <MapPinIcon />, title: "Airport & Long Interstate Runs", desc: "Book a specific pickup time in advance for early flights or long-distance travel." },
];

export default function Reservations() {
  return (
    <>
      <section className="page-hero">
        <RoadCanvas intensity="low" />
        <div className="hero-scrim" />
        <div className="page-hero-in">
          <Reveal>
            <div className="hero-eye">
              <div className="hero-dot" />
              <span>RESERVATIONS</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-h1">
              Plan ahead.
              <br />
              <span className="tg">Travel on time.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-sub" style={{ marginBottom: 30 }}>
              For trips you can't leave to chance — reserve your vehicle and time slot in advance,
              confirmed before the day arrives.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <WhatsAppCTA message={WA_MESSAGES.reservation}>Make a reservation →</WhatsAppCTA>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="sec-in">
          <Reveal><div className="eyebrow">when to reserve</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Book ahead
              <br />
              <span className="tg">for the trips that matter.</span>
            </h2>
          </Reveal>
          <div className="svc-grid" style={{ marginTop: 40 }}>
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <MagCard cls="svc-card">
                  <div className="svc-icon-wrap">{u.icon}</div>
                  <div className="svc-title">{u.title}</div>
                  <div className="svc-desc">{u.desc}</div>
                </MagCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal><div className="eyebrow">what to include</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              What we'll ask
              <br />
              <span className="tg">for on WhatsApp.</span>
            </h2>
          </Reveal>
          <div className="steps-list" style={{ marginTop: 30 }}>
            {[
              { t: "Occasion or reason for travel", d: "So we can match the right vehicle and, if needed, plan for luggage or extra stops." },
              { t: "Date, time, and route", d: "Exact pickup time matters most for events and flights — the earlier you confirm, the better." },
              { t: "Number of vehicles or passengers", d: "For group travel, we'll coordinate multiple vehicles to leave and arrive together." },
              { t: "Confirmation, in writing", d: "You'll get your reservation confirmed by message — driver details follow closer to the date." },
            ].map((s, i) => (
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
              Got a date
              <br />
              <span className="tg">already in mind?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <WhatsAppCTA message={WA_MESSAGES.reservation}>Reserve on WhatsApp →</WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
