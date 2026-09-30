import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  Menu,
  X
} from "lucide-react";
import "./styles.css";

const WA = "263780880538";

const wa = (message) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const looks = [
  "krafted-01.webp",
  "krafted-02.webp",
  "krafted-03.webp",
  "krafted-04.webp",
  "krafted-05.webp",
  "krafted-06.webp",
  "krafted-07.webp",
  "krafted-08.webp"
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="site">

      <div className="announcement">
        <span>CUSTOM-MADE MEN'S SUITING</span>
        <span>HARARE · ZIMBABWE</span>
      </div>

      <header className="nav">
        <a href="#home" className="logo">
          <span>KRAFTED</span>
          <small>SUITS ZW</small>
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#collection" onClick={() => setOpen(false)}>
            Collection
          </a>

          <a href="#process" onClick={() => setOpen(false)}>
            Our Process
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <a
            className="nav-button"
            href={wa(
              "Hello Krafted Suits ZW, I would like to make an appointment."
            )}
          >
            Appointment
            <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero">

          <div className="hero-copy">
            <div className="brand-kicker">
              KRAFTED <span>SUITS ZW</span>
            </div>

            <h1>
              MADE FOR
              <br />
              YOUR
              <br />
              <em>MEASURE.</em>
            </h1>

            <p>Custom-made men's suiting.</p>

            <div className="location">
              <MapPin size={15} />
              Avenues, Cnr 4th & Tongogara
            </div>

            <a
              className="hero-btn"
              href={wa(
                "Hello Krafted Suits ZW, I would like to make an appointment."
              )}
            >
              MAKE AN APPOINTMENT
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="hero-image">
            <img
              src="/krafted-hero-photo-only.webp"
              alt="Krafted Suits ZW"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>

        </section>

        {/* INTRO */}
        <section className="intro">
          <div className="eyebrow">
            THE KRAFTED STANDARD
          </div>

          <h2>
            Tailoring that starts
            <br />
            <em>with you.</em>
          </h2>

          <p>
            Krafted Suits ZW makes custom-made men's suiting.
            Book an appointment and discuss the fit and look
            you want.
          </p>
        </section>

        {/* COLLECTION */}
        <section id="collection" className="collection">

          <div className="section-head">
            <div>
              <div className="eyebrow">
                SELECTED WORK
              </div>

              <h2>
                THE
                <br />
                <em>COLLECTION.</em>
              </h2>
            </div>

            <p>
              Selected images from Krafted Suits ZW's
              supplied visual collection.
            </p>
          </div>

          <div className="gallery">
            {looks.map((src, i) => (
              <figure
                key={src}
                className={
                  i === 0
                    ? "gallery-item tall"
                    : "gallery-item"
                }
              >
                <img
                  src={`/images/${src}`}
                  alt={`Krafted Suits ZW look ${i + 1}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />

                <figcaption>
                  LOOK {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>

        </section>

        {/* PROCESS */}
        <section id="process" className="process">

          <div>
            <div className="eyebrow light">
              THE EXPERIENCE
            </div>

            <h2>
              YOUR FIT.
              <br />
              <em>YOUR SUIT.</em>
            </h2>
          </div>

          <div className="steps">

            <div>
              <span>01</span>
              <h3>Appointment</h3>
              <p>
                Start with a conversation about the suit
                you want.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Measure</h3>
              <p>
                Custom-made suiting begins with your
                measurements.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Kraft the look</h3>
              <p>
                Build a finished look around your fit
                and occasion.
              </p>
            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">

          <div>
            <div className="eyebrow">
              BOOK YOUR APPOINTMENT
            </div>

            <h2>
              Let's make
              <br />
              <em>your suit.</em>
            </h2>

            <p>
              Call or WhatsApp Krafted Suits ZW to
              arrange an appointment.
            </p>
          </div>

          <div className="contact-card">

            <a
              href={wa(
                "Hello Krafted Suits ZW, I would like to make an appointment."
              )}
            >
              <MessageCircle size={20} />

              <span>
                WhatsApp
                <br />
                <strong>+263 78 088 0538</strong>
              </span>
            </a>

            <a href="tel:+263780880538">
              <Phone size={20} />

              <span>
                Call
                <br />
                <strong>078 088 0538</strong>
              </span>
            </a>

            <div className="address">
              <MapPin size={20} />

              <span>
                Avenues, Cnr 4th & Tongogara
                <br />
                <strong>Harare, Zimbabwe</strong>
              </span>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          KRAFTED <span>SUITS ZW</span>
        </div>

        <div>
          Custom-made men's suiting · Harare
        </div>

        <div>
          © 2026 Krafted Suits ZW
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="whatsapp-float"
        href={wa(
          "Hello Krafted Suits ZW, I would like to make an appointment."
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Krafted Suits ZW"
      >
        <MessageCircle size={27} />
      </a>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
