// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE with De Kings' real business details.
// Everything here is a clearly-marked placeholder — the WhatsApp
// number especially MUST be replaced before this site goes live,
// or booking links will not reach a real phone.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "De Kings Transports and Logistics",
  shortName: "De Kings Transport",
  tagline: "Premium transport & logistics, on your terms.",

  // PLACEHOLDER — replace with the real WhatsApp Business number,
  // digits only, country code first, no +, no spaces (e.g. "2348012345678")
  whatsappNumber: "2347010186732",

  phoneDisplay: "+234 701 018 6732", // PLACEHOLDER
  email: "DeKingstransports28@gmail.com", // PLACEHOLDER
  instagram: "@dekings_transport", // PLACEHOLDER
  address: "Abeokuta, Ogun State, Nigeria", // PLACEHOLDER — confirm exact office address

  investorEmail: "DeKingstransports28@gmail.com", // PLACEHOLDER
};

// This builds the link that quietly sends someone to WhatsApp when they
// click a button — the word "WhatsApp" should never need to appear in
// any visible button label or description; this is just the mechanism.
export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

export const WA_MESSAGES = {
  bookRide:
    "Hi De Kings, I'd like to book a ride. Here are my details:\n\nPickup: \nDrop-off: \nDate/Time: \nPassengers: ",
  sendPackage:
    "Hi De Kings, I'd like to send a package.\n\nPickup location: \nDrop-off location: \nPackage description: \nPreferred date: ",
  receivePackage:
    "Hi De Kings, I'm expecting a package to be picked up on my behalf.\n\nPickup location: \nMy delivery address: \nPackage description: ",
  reservation:
    "Hi De Kings, I'd like to make a reservation.\n\nOccasion: \nDate: \nRoute: \nNumber of vehicles/passengers: ",
  general: "Hi De Kings, I have a question about your services.",
  investor:
    "Hi De Kings, I'm interested in learning more about investment opportunities.",
};

export const FLEET = [
  {
    name: "Standard Ride",
    desc: "Everyday intrastate trips across Ogun State — reliable, on-time, fairly priced.",
    tag: "Sedan",
  },
  {
    name: "Premium Ride",
    desc: "A more comfortable interstate trip — extra legroom, newer vehicles, less noise.",
    tag: "SUV / Executive",
  },
  {
    name: "Dispatch Rider",
    desc: "Fast two-wheel delivery for small, urgent packages within town.",
    tag: "Motorcycle",
  },
  {
    name: "Cargo Van",
    desc: "Larger packages, multiple stops, or bulk goods that need real boot space.",
    tag: "Van / Truck",
  },
];

export const COVERAGE = {
  base: "Ogun State",
  intrastate: ["Abeokuta", "Sagamu", "Ijebu-Ode", "Ota", "Ilaro", "Owode"],
  interstate: ["Lagos", "Oyo", "Osun", "Ondo", "Ekiti", "Kwara", "Kano"],
  note: "Coverage list is illustrative — confirm exact towns/routes served before publishing.",
};

export const SERVICES = [
  {
    slug: "kx-ride",
    title: "KX Ride",
    short: "Fast, affordable and reliable bike rides within the city.",
    icon: "bike",
    cta: "Request a KX Ride",
    waKey: "kxRide" as const,
  },

  {
    slug: "driver-requester",
    title: "Request a Driver",
    short:
      "Need a driver? Request a trusted driver to take you where you need to go.",
    icon: "car",
    cta: "Request a Driver",
    waKey: "driverRequest" as const,
  },

  {
    slug: "book-a-ride",
    icon: "car",
    title: "Book a Ride",
    short: "Intrastate and interstate trips, booked in one simple message.",
    cta: "Book a Ride",
    waKey: "bookRide" as const,
  },

  {
    slug: "logistics",
    icon: "package",
    title: "Send & Receive Packages",
    short:
      "Door-to-door delivery and pickup-on-your-behalf, tracked by message.",
    cta: "Send a Package",
    waKey: "sendPackage" as const,
  },

  {
    slug: "reservations",
    icon: "calendar",
    title: "Reservations",
    short:
      "Book ahead for events, airport runs, or multi-vehicle interstate trips.",
    cta: "Make a Reservation",
    waKey: "reservation" as const,
  },
];
