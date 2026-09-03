import { useState } from "react";
import { waLink } from "../data/business";

type Mode = "rider" | "partner";

type FormState = {
  name: string;
  phone: string;
  area: string;
  detail: string;
};

const EMPTY: FormState = { name: "", phone: "", area: "", detail: "" };

const COPY: Record<
  Mode,
  { label: string; detailLabel: string; detailPlaceholder: string; cta: string }
> = {
  rider: {
    label: "Become a KX Rider",
    detailLabel: "Do you own a bike?",
    detailPlaceholder: "Yes, own bike / No, need one provided",
    cta: "Submit rider registration",
  },
  partner: {
    label: "Become a Partner",
    detailLabel: "How would you like to partner?",
    detailPlaceholder:
      "e.g. fleet partner, logistics partner, corporate account",
    cta: "Submit partner registration",
  },
};

function buildMessage(mode: Mode, f: FormState) {
  const heading =
    mode === "rider" ? "KX Rider registration" : "KX Partner registration";
  return [
    heading,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Area: ${f.area}`,
    `${COPY[mode].detailLabel} ${f.detail}`,
  ].join("\n");
}

export default function RiderPartnerForm() {
  const [mode, setMode] = useState<Mode>("rider");
  const [form, setForm] = useState<FormState>(EMPTY);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    window.open(
      waLink(buildMessage(mode, form)),
      "_blank",
      "noopener,noreferrer",
    );
    setForm(EMPTY);
  };

  return (
    <div className="register-panel">
      <div className="tab-toggle">
        {(["rider", "partner"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            className={`tab-btn${mode === m ? " active" : ""}`}
            onClick={() => setMode(m)}
          >
            {COPY[m].label}
          </button>
        ))}
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-field">
            <span>Full name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Your full name"
            />
          </label>
          <label className="form-field">
            <span>Phone number</span>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={update("phone")}
              placeholder="080..."
            />
          </label>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span>Area / city</span>
            <input
              type="text"
              value={form.area}
              onChange={update("area")}
              placeholder="Where you're based"
            />
          </label>
          <label className="form-field">
            <span>{COPY[mode].detailLabel}</span>
            <input
              type="text"
              value={form.detail}
              onChange={update("detail")}
              placeholder={COPY[mode].detailPlaceholder}
            />
          </label>
        </div>

        <button type="submit" className="btn-p" style={{ marginTop: 8 }}>
          {COPY[mode].cta}
        </button>
      </form>
    </div>
  );
}
