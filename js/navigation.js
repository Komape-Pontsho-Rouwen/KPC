// Mobile menu toggle. Runs after components.js has rendered the header.
(function () {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-links");
  if (!toggle || !menu) return;

  const isOpen = () => menu.classList.contains("is-open");

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Close after choosing a link.
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });

  // Close when clicking anywhere outside the menu and button.
  document.addEventListener("click", (e) => {
    if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  // Close with Escape and return focus to the button.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) { setOpen(false); toggle.focus(); }
  });

  // Reset when the window grows past the mobile breakpoint.
  window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
})();