(() => {
  const header = document.querySelector(".site-header");
  const menu = document.querySelector("#site-menu");
  const toggle = header.querySelector(".menu-toggle");

  function syncHeaderHeight() {
    const height = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--site-header-height", height + "px");
  }

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    menu.toggleAttribute("data-open", open);
    // Set the offset before a menu link's default anchor navigation runs.
    syncHeaderHeight();
  }

  toggle.hidden = false;
  header.dataset.menuReady = "";
  syncHeaderHeight();
  new ResizeObserver(syncHeaderHeight).observe(header);
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") === "false"));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia("(max-width: 850px)").addEventListener("change", () => setMenu(false));

  const sections = Array.from(menu.querySelectorAll("a"), (link) => {
    const id = link.dataset.currentSection || (link.hash && link.getAttribute("href").startsWith("#") ? link.hash.slice(1) : "");
    return { link, section: document.getElementById(id) };
  }).filter(({ section }) => section);

  if (sections.length) {
    let currentLink = null;
    let pending = false;
    const update = () => {
      pending = false;
      const marker = header.getBoundingClientRect().bottom + 1;
      const current = sections.find(({ section }) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      })?.link;
      if (current === currentLink) return;
      currentLink?.removeAttribute("aria-current");
      current?.setAttribute("aria-current", "location");
      currentLink = current;
    };
    const schedule = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pageshow", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(header);
    sections.forEach(({ section }) => observer.observe(section));
    schedule();
  }

  function enhanceForm(form) {
    if (form.dataset.enhanced) return;
    form.dataset.enhanced = "";
    const status = form.querySelector(".contact-status");
    const button = form.querySelector('button[type="submit"]');
    const submitLabel = button.textContent;
    form.addEventListener("input", () => {
      if (!button.hasAttribute("data-delivered")) return;
      button.removeAttribute("data-delivered");
      button.textContent = submitLabel;
      status.textContent = "";
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (button.disabled) return;
      button.disabled = true;
      status.textContent = "Sending your message…";
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        button.setAttribute("data-delivered", "");
        button.textContent = "Delivered";
        status.textContent = "Thanks for your message. I’ll get back to you soon.";
      } catch {
        status.textContent = "Your message could not be sent. Please try again.";
      } finally {
        button.disabled = false;
      }
    });
  }

  const inlineForm = document.querySelector("#contact-form");
  if (inlineForm) enhanceForm(inlineForm);
  if (typeof HTMLDialogElement === "undefined" || !HTMLDialogElement.prototype.showModal) return;

  const dialog = document.createElement("dialog");
  dialog.className = "contact-dialog";
  dialog.setAttribute("aria-labelledby", "contact-dialog-title");
  dialog.innerHTML = `
    <button class="pill contact-close" type="button" aria-label="Close contact form">×</button>
    <h2 id="contact-dialog-title">Get in <em>touch.</em></h2>
    <div data-contact-panel></div>
  `;
  document.body.append(dialog);
  const closeButton = dialog.querySelector(".contact-close");
  const panel = dialog.querySelector("[data-contact-panel]");
  const originalPosition = document.createComment("Contact form position");
  inlineForm?.before(originalPosition);
  let form = inlineForm;
  let opener;
  let previousScroll;
  let loadPromise;

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    if (inlineForm) originalPosition.after(inlineForm);
    opener?.focus({ preventScroll: true });
    window.scrollTo(previousScroll);
  });

  function loadForm(url) {
    if (form) return Promise.resolve(form);
    if (!loadPromise) {
      loadPromise = fetch(url).then(async (response) => {
        if (!response.ok) throw new Error("Contact page unavailable");
        const source = new DOMParser().parseFromString(await response.text(), "text/html");
        const sharedForm = source.querySelector("#contact-form");
        if (!sharedForm) throw new Error("Contact form unavailable");
        form = document.adoptNode(sharedForm);
        enhanceForm(form);
        return form;
      }).catch((error) => {
        loadPromise = undefined;
        throw error;
      });
    }
    return loadPromise;
  }

  document.querySelectorAll("[data-contact-trigger]").forEach((link) => {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", async (event) => {
      const url = new URL(link.href);
      if (url.origin !== location.origin || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      previousScroll = { left: window.scrollX, top: window.scrollY, behavior: "instant" };
      setMenu(false);
      panel.textContent = form ? "" : "Loading contact form…";
      panel.setAttribute("aria-busy", String(!form));
      dialog.showModal();
      closeButton.focus();
      try {
        const contactForm = await loadForm(url);
        if (dialog.open) panel.replaceChildren(contactForm);
      } catch {
        if (dialog.open) {
          const fallback = document.createElement("p");
          fallback.dataset.contactFallback = "";
          fallback.textContent = "Couldn’t load the form. ";
          const directLink = document.createElement("a");
          directLink.href = link.href;
          directLink.textContent = "Open the contact page";
          fallback.append(directLink);
          panel.replaceChildren(fallback);
        }
      } finally {
        panel.removeAttribute("aria-busy");
      }
    });
  });
})();
