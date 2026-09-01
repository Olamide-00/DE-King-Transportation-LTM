import RoadCanvas from "../components/RoadCanvas";
import Reveal from "../components/Reveal";
import { MailIcon, PhoneIcon, InstagramIcon, MapPinIcon, ArrowIcon } from "../components/Icons";
import { BUSINESS, WA_MESSAGES, waLink } from "../data/business";

const CHANNELS = [
  { icon: <PhoneIcon />, label: "phone / whatsapp", val: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.whatsappNumber}` },
  { icon: <MailIcon />, label: "email", val: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: <InstagramIcon />, label: "instagram", val: BUSINESS.instagram, href: "#" },
  { icon: <MapPinIcon />, label: "based in", val: BUSINESS.address, href: "/coverage" },
];

const OPTIONS = [
  { t: "Book a ride", msg: WA_MESSAGES.bookRide },
  { t: "Send a package", msg: WA_MESSAGES.sendPackage },
  { t: "Someone's picking up a package for me", msg: WA_MESSAGES.receivePackage },
  { t: "Make a reservation", msg: WA_MESSAGES.reservation },
  { t: "Something else", msg: WA_MESSAGES.general },
];

export default function Contact() {
  return (
    <section className="sec" style={{ minHeight: "100vh", paddingTop: 140, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <RoadCanvas intensity="low" />
      </div>
      <div className="sec-in" style={{ position: "relative", zIndex: 2 }}>
        <div className="cont-grid">
          <div>
            <Reveal><div className="eyebrow">get in touch</div></Reveal>
            <Reveal delay={80}>
              <h1 className="sec-h2">
                Talk to us,
                <br />
                <span className="tg">any way you like.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="sec-sub" style={{ marginBottom: 40 }}>
                Every booking today happens on WhatsApp — but here's every way to reach De Kings.
              </p>
            </Reveal>
            {CHANNELS.map((item, i) => (
              <Reveal key={item.label} delay={i * 55}>
                <a className="ci-item" href={item.href}>
                  <div className="ci-icon">{item.icon}</div>
                  <div>
                    <div className="ci-lbl">{item.label}</div>
                    <div className="ci-val">{item.val}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="wa-panel">
              <div className="wa-panel-t">What do you need?</div>
              <div className="wa-panel-d">Pick one — it opens WhatsApp with your message pre-filled, ready to send.</div>
              {OPTIONS.map((o) => (
                <a key={o.t} className="wa-option" href={waLink(o.msg)} target="_blank" rel="noreferrer">
                  <span className="wa-option-t">{o.t}</span>
                  <span className="wa-option-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
