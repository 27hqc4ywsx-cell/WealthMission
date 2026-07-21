/* BeautybyMe1iz – Interaktion
   Bewusst schlank: Header-Zustand, mobile Navigation, sanfte
   Scroll-Reveals mit Staffelung, Formular-Validierung mit
   freundlichen Meldungen. Keine Abhängigkeiten. */

(function () {
  "use strict";

  /* Kennzeichnet aktives JS – erst dadurch werden .reveal-Elemente
     initial ausgeblendet (siehe styles.css). Ohne JS bleibt alles sichtbar. */
  document.documentElement.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Bogenrahmen-Bilder: Die <img>-Elemente sind standardmäßig unsichtbar
     und zeigen sich erst, wenn ihre Datei in /bilder wirklich geladen
     werden konnte. Bis dahin (und ohne JavaScript) bleibt die gezeichnete
     Illustration der gestaltete Zustand – nie ein kaputtes Bild-Symbol. */
  document.querySelectorAll(".arch > img").forEach(function (img) {
    function show() { img.style.display = "block"; }
    if (img.complete && img.naturalWidth > 0) show();
    else img.addEventListener("load", show);
  });

  /* Header: dezenter Schatten nach dem Einstieg */
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 12);
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
          var delay = (entry.target.dataset.stagger || 0) * 80;
          window.setTimeout(function () { entry.target.classList.add("in"); }, delay);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    /* Staffelung innerhalb der Kartengruppen */
    document.querySelectorAll(".steps-grid, .gallery-grid, .why-grid").forEach(function (grid) {
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

  /* Formular-Validierung mit freundlichen Meldungen.
     WICHTIG: Der eigentliche Versand ist noch nicht angebunden.
     Für den Produktivbetrieb ein Backend oder einen Formulardienst
     einbinden und die Erfolgsmeldung erst nach erfolgreicher
     Übertragung anzeigen (siehe README). */
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");

  function validateField(field) {
    var wrap = field.closest(".field");
    if (!wrap) return true;
    var valid = field.checkValidity();
    wrap.classList.toggle("invalid", !valid);
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

  /* Jahr im Footer */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
