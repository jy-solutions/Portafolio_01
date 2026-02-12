(function () {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Lead copy button
  const btn = document.getElementById("copyLeadBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const form = btn.closest("form");
      const inputs = form.querySelectorAll("input, select");
      const [name, business, need] = inputs;

      const msg =
`Hola Visualize Studio, soy ${name.value || "[Tu nombre]"}.
Mi negocio es: ${business.value || "[Tu negocio]"}.
Necesito: ${need.value || "[Servicio]"}.

Quiero agendar una auditoría.`;

      navigator.clipboard.writeText(msg).then(() => {
        btn.textContent = "Mensaje copiado ✅";
        setTimeout(() => (btn.textContent = "Copiar mensaje para WhatsApp"), 1800);
      });
    });
  }
})();
