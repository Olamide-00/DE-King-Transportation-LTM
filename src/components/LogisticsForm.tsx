import { useState } from "react";
import { waLink } from "../data/business";

type Vehicle = "bike" | "car" | "van";

type FormState = {
  name: string;
  phone: string;
  pickup: string;
  dropoff: string;
  detail: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  pickup: "",
  dropoff: "",
  detail: "",
};

const VEHICLES: { key: Vehicle; label: string }[] = [
  { key: "bike", label: "Bike" },
  { key: "car", label: "Car" },
  { key: "van", label: "Van" },
];

function buildMessage(vehicle: Vehicle, f: FormState) {
  return [
    "Logistics request",
    `Vehicle needed: ${vehicle}`,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Pickup: ${f.pickup}`,
    `Drop-off: ${f.dropoff}`,
    `Package description: ${f.detail}`,
  ].join("\n");
}

export default function LogisticsForm() {
  const [vehicle, setVehicle] = useState<Vehicle>("bike");
  const [form, setForm] = useState<FormState>(EMPTY);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    window.open(
      waLink(buildMessage(vehicle, form)),
      "_blank",
      "noopener,noreferrer",
    );
    setForm(EMPTY);
  };

  return (
    <div className="register-panel">
      <div className="vehicle-toggle">
        {VEHICLES.map((v) => (
          <button
            key={v.key}
            type="button"
            className={`vehicle-btn${vehicle === v.key ? " active" : ""}`}
            onClick={() => setVehicle(v.key)}
          >
            {v.label}
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
            <span>Pickup location</span>
            <input
              type="text"
              value={form.pickup}
              onChange={update("pickup")}
              placeholder="Where we collect from"
            />
          </label>
          <label className="form-field">
            <span>Drop-off location</span>
            <input
              type="text"
              value={form.dropoff}
              onChange={update("dropoff")}
              placeholder="Where it's going"
            />
          </label>
        </div>

        <label className="form-field">
          <span>Package description</span>
          <input
            type="text"
            value={form.detail}
            onChange={update("detail")}
            placeholder="What are we moving?"
          />
        </label>

        <button type="submit" className="btn-p" style={{ marginTop: 8 }}>
          Request logistics pickup
        </button>
      </form>
    </div>
  );
}
