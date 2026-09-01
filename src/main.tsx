import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import BookRide from "./pages/BookRide.tsx";
import Logistics from "./pages/Logistics.tsx";
import Reservations from "./pages/Reservations.tsx";
import Coverage from "./pages/Coverage.tsx";
import Investors from "./pages/Investors.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/book-a-ride" element={<BookRide />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
