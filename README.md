# De Kings Transports and Logistics

A premium, multi-page marketing site for De Kings — booking today happens on WhatsApp;
an in-app booking experience is on the roadmap. Built with Vite + React + TypeScript + React Router.

## Getting started

```bash
npm i
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## ⚠️ Before you publish this site

Open `src/data/business.ts` and replace the placeholder contact details —
**especially `whatsappNumber`**. Every "Book on WhatsApp" button on the site links to
that number; until it's real, those buttons won't reach anyone.

```ts
whatsappNumber: "2340000000000", // ← put the real WhatsApp Business number here
phoneDisplay: "+234 000 000 0000",
email: "hello@dekings.example",
instagram: "@dekings_transport",
address: "Abeokuta, Ogun State, Nigeria",
investorEmail: "invest@dekings.example",
```

The `COVERAGE` and `FLEET` lists in the same file are illustrative — edit the towns,
states, and vehicle types to match what De Kings actually offers before publishing.

## Other commands

```bash
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
npm run lint       # run eslint
```

## Project structure

```
src/
  components/
    RoadCanvas.tsx     # animated flowing-traffic background (cars/bikes/vans)
    Navbar.tsx / Footer.tsx
    Reveal.tsx          # scroll-in animation wrapper
    MagCard.tsx         # magnetic-tilt hover card
    WhatsAppCTA.tsx     # styled button that opens WhatsApp with a pre-filled message
    Icons.tsx           # line-icon set (car, package, calendar, etc.)
  data/
    business.ts         # ALL editable business info lives here — see warning above
  pages/
    Home.tsx
    BookRide.tsx
    Logistics.tsx
    Reservations.tsx
    Coverage.tsx         # animated route network (Ogun State hub + interstate)
    Investors.tsx
    Contact.tsx
    NotFound.tsx
  styles/
    global.css           # design tokens (black/gold) + all component styles
```

## Routes

| Path              | Page                          |
|--------------------|--------------------------------|
| `/`                 | Home                            |
| `/book-a-ride`       | Book a Ride                     |
| `/logistics`         | Send & Receive Packages          |
| `/reservations`      | Reservations                     |
| `/coverage`          | Coverage / route network         |
| `/investors`         | Investor information             |
| `/contact`           | Contact + WhatsApp quick actions |
| any other path        | 404                              |

## Notes

- No backend, no database, no booking form that "submits" anywhere — by design, since
  all booking currently happens over WhatsApp. Every CTA opens a `wa.me` link with a
  pre-filled message specific to that action (ride, package, reservation, etc.).
- The Investors page intentionally does not include funding-ask amounts, valuation, or
  financial projections — that content should come from De Kings directly and can be
  added to `src/pages/Investors.tsx` when ready.
