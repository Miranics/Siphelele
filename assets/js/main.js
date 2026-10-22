/*
  Imfundo Quest prototype
  This site is a design prototype. Navigation works, but anything that would
  need a real service (downloads, forms, sign-ups) only shows a notice.
*/
(function () {
  "use strict";

  var DEMO_MESSAGE = "Prototype only: this action is not available yet.";

  /* Mobile navigation */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Toast */
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3600);
  }

  /* Buttons that are not functional yet */
  document.querySelectorAll("[data-demo]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      showToast(el.getAttribute("data-demo") || DEMO_MESSAGE);
    });
  });

  /* Forms: validate, then explain that nothing is sent */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (status) {
        status.classList.add("is-visible");
        status.focus();
      }
      form.reset();
    });
  });
})();
