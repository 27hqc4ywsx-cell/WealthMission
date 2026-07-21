/* Kanzlei für Familienrecht – Interaktion
   Bewusst schlank: Header-Zustand, mobile Navigation, sanfte
   Scroll-Reveals mit Staffelung, dezente Parallax-Bewegung der
   Hero-Grafik, Formular-Validierung mit verständlichen Meldungen.
   Keine Abhängigkeiten. */

(function () {
  "use strict";

  /* Kennzeichnet aktives JS – erst dadurch werden .reveal-Elemente
     initial ausgeblendet (siehe styles.css). Ohne JS bleibt alles sichtbar. */
  document.documentElement.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header: fester Hintergrund nach dem Einstieg */
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

  /* Sanfte Scroll-Reveals, Karten leicht gestaffelt */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          var delay = (entry.target.dataset.stagger || 0) * 90;
          window.setTimeout(function () { entry.target.classList.add("in"); }, delay);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    /* Staffelung: Position innerhalb der eigenen Kartengruppe merken */
    document.querySelectorAll(".services-grid, .steps-grid, .trust-grid").forEach(function (grid) {
      var i = 0;
      grid.querySelectorAll(".reveal").forEach(function (el) { el.dataset.stagger = i++ % 4; });
    });

    revealEls.forEach(function (el) {
      /* Bereits sichtbare Elemente sofort zeigen, alle weiteren beobachten */
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
  }

  /* Dezente Parallax-Bewegung der Hero-Grafik */
  var art = document.querySelector(".hero-art");
  if (art && !reduced) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        art.style.transform = "translateY(" + window.scrollY * 0.12 + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* Formular-Validierung mit verständlichen Fehlermeldungen.
     WICHTIG: Der eigentliche Versand ist noch nicht angebunden.
     Für den Produktivbetrieb ein Backend oder einen Formulardienst
     einbinden und die Erfolgsmeldung erst nach erfolgreicher
     Übertragung anzeigen (siehe README). */
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");

  function validateField(field) {
    var wrap = field.closest(".field");
    var valid = field.checkValidity();
    if (wrap) wrap.classList.toggle("invalid", !valid);
    return valid;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = form.querySelectorAll("input, select, textarea");
    var allValid = true;
    var firstInvalid = null;
    fields.forEach(function (f) {
      if (!validateField(f)) {
        allValid = false;
        if (!firstInvalid) firstInvalid = f;
      }
    });
    if (!allValid) {
      firstInvalid.focus();
      return;
    }
    success.classList.add("visible");
    form.reset();
    form.querySelectorAll(".invalid").forEach(function (el) { el.classList.remove("invalid"); });
    success.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
  });

  /* Fehlerzustand beim Korrigieren direkt zurücknehmen */
  form.addEventListener("input", function (e) {
    var wrap = e.target.closest(".field");
    if (wrap && wrap.classList.contains("invalid")) validateField(e.target);
  });

  /* Jahr im Fußbereich */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
