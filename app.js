const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector(".motion-toggle");
const page = document.documentElement;
const year = document.querySelector("#footer-year");
let motionEnabled = !motionPreference.matches;

year.textContent = String(new Date().getFullYear());

function setMotion(enabled) {
  motionEnabled = enabled;
  page.dataset.motion = enabled ? "on" : "off";
  motionButton.setAttribute("aria-pressed", String(enabled));
  motionButton.textContent = enabled ? "Motion on" : "Motion off";
  window.dispatchEvent(new Event("portfoliomotionchange"));
}

motionButton.hidden = false;
motionButton.addEventListener("click", () => setMotion(!motionEnabled));
motionPreference.addEventListener("change", (event) => setMotion(!event.matches));
setMotion(motionEnabled);

const guess = document.querySelector(".trace-guess");
const result = document.querySelector(".trace-result");
const feedback = document.querySelector(".guess-feedback");
guess.hidden = false;
function showGuessFeedback() {
  const line = guess.querySelector(":checked")?.value;
  const answers = {
    3: "Line 3 already holds the target value.",
    7: "Exactly. Line 7 selects the wrong row.",
    8: "Line 8 prints the record it was given."
  };
  feedback.textContent = answers[line] || "";
}
guess.addEventListener("change", showGuessFeedback);
result.addEventListener("toggle", showGuessFeedback);

const chartControls = document.querySelector(".chart-controls");
const bars = document.querySelectorAll(".metric-bars li");
const series = {
  production: { label: "Weekly production forecast (tonnes)", values: [60, 70, 64, 79, 84, 92], scale: 100 },
  energy: { label: "Weekly energy forecast (MWh)", values: [42, 46, 57, 51, 43, 38], scale: 60 },
  maintenance: { label: "Planned maintenance (hours per week)", values: [4, 2, 8, 12, 6, 3], scale: 14 }
};
chartControls.hidden = false;
chartControls.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-series]");
  if (!button) return;
  const metric = series[button.dataset.series];
  for (const control of chartControls.querySelectorAll("button")) {
    control.setAttribute("aria-pressed", String(control === button));
  }
  bars.forEach((bar, index) => {
    const value = metric.values[index];
    bar.style.setProperty("--bar", value / metric.scale * 100 + "%");
    bar.querySelector("b").textContent = value;
  });
  document.querySelector(".metric-caption").textContent = metric.label;
});

// Add the Formspree HTTPS endpoint to data-endpoint on the contact form.
const contactForm = document.querySelector("#contact-form");
const contactFields = contactForm.querySelector("fieldset");
const contactStatus = contactForm.querySelector(".contact-status");
const contactButton = contactForm.querySelector('button[type="submit"]');
const endpoint = contactForm.dataset.endpoint;
if (/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
  contactFields.disabled = false;
  contactStatus.textContent = "";
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    contactButton.disabled = true;
    contactStatus.textContent = "Sending your message…";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Submission failed");
      contactForm.reset();
      contactStatus.textContent = "Thanks for your message. I’ll get back to you soon.";
    } catch {
      contactStatus.textContent = "Your message could not be sent. Please try again.";
    } finally {
      contactButton.disabled = false;
    }
  });
}
