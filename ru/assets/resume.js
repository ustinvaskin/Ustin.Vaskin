(() => {
  const printButton = document.querySelector(".resume-print");
  printButton.hidden = false;
  printButton.addEventListener("click", () => window.print());

  if (!navigator.clipboard?.writeText) return;
  const button = document.querySelector(".resume-copy");
  const status = document.querySelector(".resume-copy-status");
  button.hidden = false;
  let resetStatus;
  button.addEventListener("click", async () => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    clearTimeout(resetStatus);
    try {
      await navigator.clipboard.writeText(url.href);
      status.textContent = "Ссылка скопирована";
    } catch {
      status.textContent = "Скопируйте ссылку из адресной строки";
    }
    resetStatus = setTimeout(() => { status.textContent = ""; }, 2400);
  });
})();

(() => {
  const explorer = document.querySelector(".resume-tech");
  const body = document.querySelector(".resume-grid");
  const options = explorer.querySelectorAll("[data-tech]");
  const dock = explorer.querySelector(".resume-tech-dock");
  const status = explorer.querySelector(".resume-tech-status");
  const next = explorer.querySelector("[data-next-match]");
  const clear = explorer.querySelector("[data-clear-tech]");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const terms = {
    react: /\bReact\b/g,
    typescript: /\bTypeScript\b/g,
    flutter: /\bFlutter\b/g,
    sqlite: /\bSQLite\b/g,
    dotnet: /(?:\bASP)?\.NET\b/g,
    java: /\bJava\b/g
  };

  let selected = null;
  let matches = [];
  let index = -1;

  function clearSelection() {
    const parents = new Set();
    for (const match of matches) {
      parents.add(match.parentNode);
      match.replaceWith(match.textContent);
    }
    parents.forEach(parent => parent.normalize());
    selected?.setAttribute("aria-pressed", "false");
    selected = null;
    matches = [];
    index = -1;
    dock.hidden = true;
    status.textContent = "";
  }

  function highlight(pattern) {
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    for (const node of textNodes) {
      const found = [...node.data.matchAll(pattern)];
      if (!found.length) continue;
      const fragment = document.createDocumentFragment();
      let from = 0;
      for (const match of found) {
        fragment.append(node.data.slice(from, match.index));
        const mark = document.createElement("mark");
        mark.className = "resume-tech-mark";
        mark.textContent = match[0];
        fragment.append(mark);
        matches.push(mark);
        from = match.index + match[0].length;
      }
      fragment.append(node.data.slice(from));
      node.replaceWith(fragment);
    }
  }

  for (const option of options) {
    option.addEventListener("click", () => {
      const wasSelected = selected === option;
      clearSelection();
      if (wasSelected) return;
      selected = option;
      option.setAttribute("aria-pressed", "true");
      highlight(terms[option.dataset.tech]);
      next.disabled = matches.length === 0;
      dock.hidden = false;
      status.textContent = option.textContent + " · Найдено: " + matches.length;
    });
  }

  next.addEventListener("click", () => {
    matches[index]?.removeAttribute("data-current-match");
    index = (index + 1) % matches.length;
    const match = matches[index];
    match.setAttribute("data-current-match", "");
    match.scrollIntoView({ block: "center", behavior: reducedMotion.matches ? "instant" : "smooth" });
    status.textContent = selected.textContent + " · " + (index + 1) + " из " + matches.length;
  });

  clear.addEventListener("click", () => {
    selected?.focus();
    clearSelection();
  });
  explorer.hidden = false;
})();
