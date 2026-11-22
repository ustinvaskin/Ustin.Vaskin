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

const traceDesk = document.querySelector(".trace-desk");
const guess = traceDesk.querySelector(".trace-guess");
const verdict = traceDesk.querySelector(".trace-verdict");
const hint = traceDesk.querySelector(".trace-hint");
guess.hidden = false;
function showGuessFeedback() {
  const line = guess.querySelector(":checked")?.value;
  const answers = {
    3: "Line 3 already holds the target value.",
    7: "Exactly. Line 7 selects the wrong row.",
    8: "Line 8 prints the record it was given."
  };
  const found = line === "7";
  verdict.hidden = !found;
  traceDesk.toggleAttribute("data-bug-found", found);
  hint.textContent = answers[line] || "";
}
guess.addEventListener("change", showGuessFeedback);
showGuessFeedback();

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
