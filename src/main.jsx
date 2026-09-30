import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WA = "263780880538";
const wa = (text="Hello Krafted Suits ZW, I would like to make an appointment.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const images = [
  {src:"/images/Screenshot 2026-09-30 103311.webp", label:"Custom suiting"},
  {src:"/images/Screenshot 2026-09-30 103300.webp", label:"Tailored looks"},
  {src:"/images/Screenshot 2026-09-30 103323.webp", label:"Occasion wear"},
  {src:"/images/Screenshot 2026-09-30 103306.webp", label:"Formal tailoring"},
  {src:"/images/Screenshot 2026-09-30 103317.webp", label:"Made to measure"},
  {src:"/images/Screenshot 2026-09-30 103242.webp", label:"Signature style"},
  {src:"/images/Screenshot 2026-09-30 103249.webp", label:"Krafted collection"}
];

function App(){
  const [menu,setMenu]=useState(false);
  const [lightbox,setLightbox]=useState(null);
  return <div className="app">
    <header className="nav">
      <a href="#home" className="logo" onClick={()=>setMenu(false)}>
        <span>KRAFTED</span><small>SUITS ZW</small>
      </a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?"×":"☰"}</button>
      <nav className={menu?"open":""}>
        <a href="#about" onClick={()=>setMenu(false)}>About</a>
        <a href="#collection" onClick={()=>setMenu(false)}>Collection</a>
        <a href="#process" onClick={()=>setMenu(false)}>Process</a>
        <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>
        <a className="navbook" href={wa("Hello Krafted Suits ZW, I would like to make an appointment.")}>Book Appointment</a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="kicker">CUSTOM MADE MEN'S SUITING · HARARE</p>
          <h1>Made for<br/><i>your measure.</i></h1>
          <p className="lead">Personalised men's suiting crafted around your fit, your occasion and your style.</p>
          <div className="actions">
            <a className="btn dark" href={wa()}>Make an Appointment <span>↗</span></a>
            <a className="textlink" href="#collection">View the collection ↓</a>
          </div>
          <div className="location">AVENUES · CNR 4TH &amp; TONGOGARA · HARARE</div>
        </div>
        <div className="hero-image">
          <img src={images[0].src} alt="Krafted custom suit" fetchPriority="high"/>
          <div className="hero-label"><span>01</span><b>KRAFTED SUITS ZW</b></div>
        </div>
      </section>

      <section id="about" className="statement">
        <div className="statement-tag">THE KRAFTED APPROACH</div>
        <div><h2>A suit should feel<br/><i>like yours.</i></h2><p>Custom-made men's suiting for clients who want a considered fit and a distinctive finish. Appointments are available at our Harare location.</p></div>
      </section>

      <section id="collection" className="collection">
        <div className="section-head">
          <div><p className="kicker">SELECTED WORK</p><h2>The collection</h2></div>
          <p>Explore a selection of looks from Krafted Suits ZW. Tap any image to view it larger.</p>
        </div>
        <div className="gallery">
          {images.map((im,i)=><button className={`tile tile-${i}`} key={im.src} onClick={()=>setLightbox(im)}>
            <img src={im.src} alt={im.label} loading={i===0?"eager":"lazy"}/>
            <span>{String(i+1).padStart(2,"0")} · {im.label}</span>
          </button>)}
        </div>
      </section>

      <section id="process" className="process">
        <div className="process-intro"><p className="kicker">THE EXPERIENCE</p><h2>From appointment<br/><i>to finished suit.</i></h2></div>
        <div className="steps">
          <div><b>01</b><h3>Appointment</h3><p>Start with a conversation about the occasion, preferred style and the look you want.</p></div>
          <div><b>02</b><h3>Measure &amp; fit</h3><p>Your requirements are discussed around a custom-made approach to men's suiting.</p></div>
          <div><b>03</b><h3>Final look</h3><p>Return to the brand for a considered suit built around your individual requirements.</p></div>
        </div>
      </section>

      <section className="cta">
        <p className="kicker light">READY WHEN YOU ARE</p>
        <h2>Let's make<br/><i>your suit.</i></h2>
        <p>Book an appointment with Krafted Suits ZW.</p>
        <a className="btn cream" href={wa("Hello Krafted Suits ZW, I would like to book an appointment.")}>WhatsApp +263 78 088 0538 <span>↗</span></a>
      </section>

      <section id="contact" className="contact">
        <div><p className="kicker">VISIT KRAFTED</p><h2>Harare,<br/><i>Avenues.</i></h2></div>
        <div className="contact-details">
          <p><strong>ADDRESS</strong>Avenues, Cnr 4th &amp; Tongogara<br/>Harare, Zimbabwe</p>
          <p><strong>PHONE / WHATSAPP</strong><a href="tel:+263780880538">+263 78 088 0538</a></p>
          <a className="btn dark" href={wa()}>Start a WhatsApp enquiry <span>↗</span></a>
        </div>
      </section>
    </main>

    <footer><div className="logo"><span>KRAFTED</span><small>SUITS ZW</small></div><p>Custom Made Men's Suiting · Harare, Zimbabwe</p><a href={wa()}>WhatsApp ↗</a></footer>
    <a className="wa-float" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp Krafted Suits ZW"><span>◔</span></a>

    {lightbox && <div className="lightbox" onClick={()=>setLightbox(null)}>
      <button className="close" onClick={()=>setLightbox(null)} aria-label="Close">×</button>
      <img src={lightbox.src} alt={lightbox.label} onClick={e=>e.stopPropagation()}/>
      <div>{lightbox.label}</div>
    </div>}
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
