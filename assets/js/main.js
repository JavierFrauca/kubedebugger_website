/* kubedebugger.es — JS mínimo, sin analítica ni rastreadores.
   Único almacenamiento: localStorage["kdb-cookie-ok"] para no volver a
   mostrar el aviso informativo sobre cookies. */
(function () {
  "use strict";

  /* Año en el pie */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Menú móvil */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector("nav.links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* Aviso de cookies (informativo: la web no instala cookies de ningún tipo) */
  var banner = document.getElementById("cookie-banner");
  if (banner && !localStorage.getItem("kdb-cookie-ok")) {
    banner.classList.add("show");
    var ok = banner.querySelector("button");
    if (ok) {
      ok.addEventListener("click", function () {
        localStorage.setItem("kdb-cookie-ok", "1");
        banner.classList.remove("show");
      });
    }
  }

  /* Tabs de instalación */
  document.querySelectorAll(".tabs").forEach(function (tabs) {
    var btns = tabs.querySelectorAll(".tab-btns button");
    var panes = tabs.querySelectorAll(".tab-pane");
    btns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) { b.classList.remove("active"); });
        panes.forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        panes[i].classList.add("active");
      });
    });
  });

  /* Formulario de contacto: compone un mailto: local.
     Ningún dato se envía a terceros ni se almacena en el sitio. */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var subject = "[kubedebugger.es] " + (form.querySelector("[name=topic]").value || "consulta");
      var body =
        "Nombre: " + form.querySelector("[name=name]").value +
        "\nDe: " + form.querySelector("[name=email]").value +
        "\n\n" + form.querySelector("[name=message]").value + "\n";
      window.location.href = "mailto:contacto@kubedebugger.es" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      var done = document.getElementById("contact-sent");
      if (done) done.style.display = "block";
    });
  }
})();
