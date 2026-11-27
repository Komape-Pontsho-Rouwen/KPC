// Shared header and footer. Set data-root="" on index.html and data-root="../" on files in /pages.
(function () {
  const root = document.body.dataset.root || "";
  const current = document.body.dataset.page || "";
  const page = (file) => `${root}pages/${file}`;

  const links = [
    { id: "home", label: "Home", href: `${root}index.html` },
    { id: "about", label: "About Us", href: page("about.html") },
    { id: "services", label: "Services", href: page("services.html") },
    { id: "projects", label: "Projects", href: page("projects.html") },
    { id: "reviews", label: "Reviews", href: page("reviews.html") },
    { id: "contact", label: "Contact", href: page("contact.html") },
  ];

  const navItems = links.map((l) =>
    `<li><a href="${l.href}"${l.id === current ? ' aria-current="page"' : ""}>${l.label}</a></li>`).join("");

  const header = `
  <header class="header">
    <div class="container nav">
      <a class="logo" href="${root}index.html" aria-label="Katz Plumbing &amp; Construction home">
        <svg class="logo__mark" viewBox="0 0 52 42" aria-hidden="true"><path d="M3 22 26 4l23 18" fill="none" stroke="#f5892a" stroke-width="4" stroke-linejoin="round"/><path d="M11 20v19h30V20" fill="none" stroke="#fff" stroke-width="3"/><path d="M26 24v11M20.5 29.5h11" stroke="#fff" stroke-width="3"/></svg>
        <span class="logo__text"><strong>KATZ</strong><small>Plumbing &amp; Construction</small></span>
      </a>
      <button class="nav__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
      <ul class="nav__links" id="nav-links">
        ${navItems}
        <li><a class="btn btn--primary" href="${page("estimate.html")}">Request an Estimate</a></li>
      </ul>
    </div>
  </header>`;

  const footer = `
  <footer class="footer">
    <div class="container">
      <p class="footer__tagline">Your trusted construction partner</p>
      <div class="footer__grid">
        <div>
          <h3>Katz Plumbing &amp; Construction</h3>
          <p>Plumbing, building and finishing services in Limpopo, with over 10 years of experience.</p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="${page("services.html")}#plumbing">Plumbing</a></li>
            <li><a href="${page("services.html")}#geyser">Geyser installation</a></li>
            <li><a href="${page("services.html")}#building">Building</a></li>
            <li><a href="${page("services.html")}#plastering">Plastering</a></li>
            <li><a href="${page("services.html")}#painting">Painting</a></li>
            <li><a href="${page("services.html")}#tiling">Tiling</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>363 Ga-Mamadila, Moletjie, Polokwane, Limpopo</li>
            <li><a href="tel:+27824397658">082 439 7658</a></li>
            <li><a href="tel:+27614054616">061 405 4616</a></li>
            <li><a href="mailto:katzpc01@gmail.com">katzpc01@gmail.com</a></li>
            <li><a href="https://wa.me/27614054616" target="_blank" rel="noopener">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__legal">© ${new Date().getFullYear()} Katz Plumbing &amp; Construction. All rights reserved.</p>
    </div>
  </footer>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;

  // Floating WhatsApp button on every page
  document.body.insertAdjacentHTML("beforeend",
    '<a class="float-wa" href="https://wa.me/27614054616" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">WhatsApp</a>');
})();