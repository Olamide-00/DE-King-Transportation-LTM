import { Link } from "react-router-dom";
import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "100vh" }}>
      <RoadCanvas intensity="low" />
      <div className="hero-scrim" />
      <div className="page-hero-in" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="hero-eye" style={{ margin: "0 auto" }}>
            <div className="hero-dot" style={{ background: "#e05a4e" }} />
            <span>ERROR 404</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="page-h1">
            Wrong turn.
            <br />
            <span className="tg">This route doesn't exist.</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="page-sub" style={{ margin: "0 auto 30px" }}>
            The page you're looking for may have moved.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <Link to="/" className="btn-p">Back to home →</Link>
        </Reveal>
      </div>
    </section>
  );
}
