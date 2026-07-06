/* K+P Ingenieure – Interaktion
   Bewusst schlank gehalten: Header-Zustand, mobile Navigation,
   dezente Scroll-Reveals, Formular-Feedback. Keine Abhängigkeiten. */

(function () {
  "use strict";

  /* Kennzeichnet, dass JS aktiv ist – erst dadurch werden
     .reveal-Elemente initial ausgeblendet (siehe styles.css). */
  document.documentElement.classList.add("js");

  /* Header: nach dem Hero-Einstieg mit festem Hintergrund */
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile Navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Navigation schließen" : "Navigation öffnen");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* Dezenter Scroll-Reveal */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) {
      /* Bereits sichtbare Elemente sofort zeigen, alle weiteren beobachten */
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
  }

  /* Kontaktformular:
     Hier wird nur das Frontend-Feedback gezeigt. Für den Produktivbetrieb
     den Versand anbinden (z. B. eigenes Backend, Formspree o. Ä.) und die
     Erfolgsmeldung erst nach erfolgreicher Übertragung anzeigen. */
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    success.classList.add("visible");
    form.reset();
    success.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
  });

  /* Jahr im Footer */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
