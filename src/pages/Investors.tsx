import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import { BUSINESS, COVERAGE } from "../data/business";

const WHY = [
  { n: "01", t: "Operating today, not just a pitch deck", d: "Rides, logistics, and reservations are already running via WhatsApp — real demand, real trips, before a line of app code is needed." },
  { n: "02", t: "A regional focus, done properly", d: `Rooted in ${COVERAGE.base} with a clear path to interstate routes across the South-West, instead of spreading thin nationwide on day one.` },
  { n: "03", t: "Three revenue lines, one brand", d: "Rides, package logistics, and reservations mean De Kings isn't dependent on a single service to grow." },
];

const ROADMAP = [
  { phase: "Phase 1", status: "live", t: "WhatsApp-first operations", d: "Booking, dispatch, and delivery coordinated directly by message — live today." },
  { phase: "Phase 2", status: "next", t: "The De Kings app", d: "In-app booking, live tracking, and driver assignment — replacing manual WhatsApp coordination." },
  { phase: "Phase 3", status: "later", t: "Interstate scale", d: "Expanding vehicle capacity and route coverage across the South-West as demand grows." },
];

export default function Investors() {
  return (
    <>
      <section className="page-hero">
        <RoadCanvas intensity="low" />
        <div className="hero-scrim" />
        <div className="page-hero-in">
          <Reveal>
            <div className="hero-eye">
              <div className="hero-dot" />
              <span>FOR INVESTORS</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-h1">
              Built on real trips.
              <br />
              <span className="tg">Building toward an app.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-sub" style={{ marginBottom: 30 }}>
              {BUSINESS.name} is operating today as a WhatsApp-first transport and logistics
              business in {COVERAGE.base}. We're raising to build the app that takes it further.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <a className="btn-p" href={`mailto:${BUSINESS.investorEmail}?subject=Investment Inquiry — De Kings`}>
              Request the investor deck →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal><div className="eyebrow">the opportunity</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Why De Kings,
              <br />
              <span className="tg">why now.</span>
            </h2>
          </Reveal>
          <div className="inv-grid" style={{ marginTop: 40 }}>
            {WHY.map((w, i) => (
              <Reveal key={w.n} delay={i * 90}>
                <div className="inv-card">
                  <div className="inv-num">{w.n}</div>
                  <div className="inv-t">{w.t}</div>
                  <div className="inv-d">{w.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="sec sec-alt">
        <div className="sec-in">
          <Reveal><div className="eyebrow">where the funding goes</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Three phases.
              <br />
              <span className="tg">One already live.</span>
            </h2>
          </Reveal>

          <div className="roadmap-wrap">
            <div className="roadmap-line">
              <div className="roadmap-glow" />
              {ROADMAP.map((_, i) => (
                <div key={i} className="roadmap-node" style={{ left: `${(i / (ROADMAP.length - 1)) * 100}%` }} />
              ))}
            </div>
            <div className="roadmap-grid">
              {ROADMAP.map((r, i) => (
                <Reveal key={r.phase} delay={i * 90}>
                  <div className="roadmap-card">
                    <div className="roadmap-phase">
                      {r.phase}
                      <span className={`roadmap-status ${r.status}`}>{r.status}</span>
                    </div>
                    <div className="roadmap-t">{r.t}</div>
                    <div className="roadmap-d">{r.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE LOOKING FOR ── */}
      <section className="sec">
        <div className="sec-in">
          <Reveal><div className="eyebrow">what we're looking for</div></Reveal>
          <Reveal delay={80}>
            <h2 className="sec-h2">
              Partners who get
              <br />
              <span className="tg">on-the-ground logistics.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub" style={{ marginBottom: 8 }}>
              We're early-stage and founder-led, looking for investors who understand transport
              and logistics in Nigeria specifically — not just app-building capital. Funding ask,
              use of funds, and full financials are covered in the investor deck, available on
              request.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-strip">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <RoadCanvas intensity="low" />
        </div>
        <div className="cta-strip-in">
          <Reveal>
            <h2 className="cta-strip-h">
              Want the full picture?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a className="btn-p" href={`mailto:${BUSINESS.investorEmail}?subject=Investment Inquiry — De Kings`}>
              Email {BUSINESS.investorEmail} →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
