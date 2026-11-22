const stages = {
  offline: {
    title: "Keep working offline",
    description: "A person makes an edit and adds an attachment while the device is disconnected."
  },
  saved: {
    title: "Save the work locally",
    description: "The app records the change and keeps the attachment on the device for later synchronization."
  },
  sync: {
    title: "Reconnect and sync",
    description: "When a connection is available, pending changes can be synchronized with the service."
  }
};

const demo = document.querySelector(".offline-demo");
const controls = demo.querySelectorAll("[data-step]");
const title = demo.querySelector(".offline-copy h3");
const description = demo.querySelector(".offline-copy p");

controls.forEach((button) => {
  button.addEventListener("click", () => {
    const step = button.dataset.step;
    controls.forEach((control) => control.setAttribute("aria-pressed", String(control === button)));
    demo.dataset.step = step;
    title.textContent = stages[step].title;
    description.textContent = stages[step].description;
  });
});
