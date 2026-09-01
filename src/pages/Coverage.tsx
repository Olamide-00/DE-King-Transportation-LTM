import Reveal from "../components/Reveal";
import WhatsAppCTA from "../components/WhatsAppCTA";
import RoadCanvas from "../components/RoadCanvas";
import { COVERAGE, WA_MESSAGES } from "../data/business";

function RouteNetwork() {
  const cx = 450, cy = 250;
  const inner = COVERAGE.intrastate;
  const outer = COVERAGE.interstate;
  const innerR = 100;
  const outerR = 205;

  const innerPts = inner.map((name, i) => {
    const angle = (Math.PI * 2 * i) / inner.length - Math.PI / 2;
    return { name, x: cx + Math.cos(angle) * innerR, y: cy + Math.sin(angle) * innerR };
  });
  const outerPts = outer.map((name, i) => {
    const angle = (Math.PI * 2 * i) / outer.length - Math.PI / 2 + 0.4;
    return { name, x: cx + Math.cos(angle) * outerR, y: cy + Math.sin(angle) * outerR };
  });

  return (
    <svg className="route-svg" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="rgba(212,175,55,.1)" strokeDasharray="3 6" />
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="rgba(212,175,55,.06)" strokeDasharray="3 6" />

      {outerPts.map((p) => (
        <path key={`op-${p.name}`} className="route-path" d={`M${cx},${cy} Q${(cx + p.x) / 2},${(cy + p.y) / 2 - 40} ${p.x},${p.y}`} />
      ))}
      {innerPts.map((p) => (
        <path key={`ip-${p.name}`} className="route-path" opacity="0.7" d={`M${cx},${cy} L${p.x},${p.y}`} />
      ))}

      {outerPts.map((p) => (
        <g key={p.name}>
          <circle className="route-city-dot" cx={p.x} cy={p.y} r="4.5" opacity="0.85" />
          <text className="route-city-label" x={p.x} y={p.y - 14} textAnchor="middle" opacity="0.85">{p.name}</text>
        </g>
      ))}
      {innerPts.map((p) => (
        <g key={p.name}>
          <circle className="route-city-dot" cx={p.x} cy={p.y} r="3.5" />
          <text className="route-city-label" x={p.x} y={p.y - 11} textAnchor="middle" fontSize="10.5">{p.name}</text>
        </g>
      ))}

      <circle cx={cx} cy={cy} r="10" fill="#d4af37" />
      <circle cx={cx} cy={cy} r="17" fill="none" stroke="#d4af37" strokeWidth="1.4" opacity="0.5" />
      <text x={cx} y={cy + 34} textAnchor="middle" className="route-city-label" fontSize="13" fontWeight={700}>{COVERAGE.base}</text>
    </svg>
  );
}

export default function Coverage() {
  return (
    <>
      <section className="page-hero">
        <RoadCanvas intensity="low" />
        <div className="hero-scrim" />
        <div className="page-hero-in">
          <Reveal>
            <div className="hero-eye">
              <div className="hero-dot" />
              <span>COVERAGE</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="page-h1">
              Where De Kings
              <br />
              <span className="tg">already runs.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="page-sub">
              Based in {COVERAGE.base}, with routes reaching across the South-West. Not on the
              list? Message us — we may still be able to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="sec-in">
          <Reveal>
            <div className="route-map">
              <RouteNetwork />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontFamily: "Fira Code, monospace", fontSize: 11.5, color: "#6b665e", marginTop: 18, textAlign: "center" }}>
              // stylized network, not a literal map — {COVERAGE.note}
            </p>
          </Reveal>

          <div className="coverage-list">
            <Reveal delay={100}>
              <div>
                <div className="coverage-col-t">// intrastate — within {COVERAGE.base}</div>
                <div className="coverage-tags">
                  {COVERAGE.intrastate.map((c) => <span key={c} className="coverage-tag">{c}</span>)}
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <div className="coverage-col-t">// interstate routes</div>
                <div className="coverage-tags">
                  {COVERAGE.interstate.map((c) => <span key={c} className="coverage-tag">{c}</span>)}
                </div>
              </div>
            </Reveal>
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
              Don't see your route?
              <br />
              <span className="tg">Ask us anyway.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <WhatsAppCTA message={WA_MESSAGES.general}>Check availability →</WhatsAppCTA>
          </Reveal>
        </div>
      </section>
    </>
  );
}
