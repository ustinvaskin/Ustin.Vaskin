const stages = {
  offline: {
    title: "Интернета нет",
    description: "Вы вносите правку и прикрепляете файл прямо на объекте."
  },
  saved: {
    title: "Всё на устройстве",
    description: "Приложение сохраняет правку и файл на устройстве. Они будут готовы к отправке, когда появится связь."
  },
  sync: {
    title: "Связь вернулась",
    description: "Теперь приложение может отправить сохранённые изменения и файл на сервер."
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
