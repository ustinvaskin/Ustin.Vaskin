import { BOARD_SIZE, createRound, fire } from "./rules.js?v=2";

const board = document.querySelector("#board");
const fleet = document.querySelector("#ships");
const status = document.querySelector("#message");
const difficulty = document.querySelector("#difficulty");
const difficultyNote = document.querySelector("#difficulty-note");
const reset = document.querySelector("#new-game");
const soundToggle = document.querySelector("#muteControl");
const soundLabel = document.querySelector("#sound-label");
const revealLegend = document.querySelector("#reveal-legend");
const stats = {
  remaining: document.querySelector("#shots-left"),
  total: document.querySelector("#shots-total"),
  sunk: document.querySelector("#ships-sunk")
};
const sounds = {
  miss: "../../../games/sink-a-ship/Audio/missShip.mp3",
  hit: "../../../games/sink-a-ship/Audio/hitShip.mp3",
  sunk: "../../../games/sink-a-ship/Audio/sankShip.mp3",
  win: "../../../games/sink-a-ship/Audio/wonGame.mp3",
  loss: "../../../games/sink-a-ship/Audio/lostGame.mp3"
};
const rowLabels = "ABCDEFGH";
const tiles = [];
const shotPlural = new Intl.PluralRules("ru");
const shotWords = { one: "выстрел", few: "выстрела", many: "выстрелов" };

function shotCount(count) {
  return count + " " + shotWords[shotPlural.select(count)];
}
let fleetRows = [];
let focusIndex = 0;
let round;
let soundEnabled = false;
let playing;

function coordinate(index) {
  return rowLabels[Math.floor(index / BOARD_SIZE)] + (index % BOARD_SIZE + 1);
}

function setTile(index, state) {
  const tile = tiles[index];
  if (state) {
    tile.dataset.state = state;
    tile.setAttribute("aria-disabled", "true");
  } else {
    delete tile.dataset.state;
    delete tile.dataset.hullAxis;
    delete tile.dataset.hullPart;
    tile.removeAttribute("aria-disabled");
  }
  tile.setAttribute("aria-label", coordinate(index) + ", " + ({ revealed: "непотопленный корабль", miss: "промах", hit: "попадание", sunk: "корабль потоплен" }[state] || "выстрела ещё не было"));
}

function showSunkHull(ship) {
  const axis = ship.cells[1] - ship.cells[0] === 1 ? "across" : "down";
  for (const [part, cell] of ship.cells.entries()) {
    setTile(cell, "sunk");
    tiles[cell].dataset.hullAxis = axis;
    tiles[cell].dataset.hullPart = part === 0 ? "start" : part === ship.cells.length - 1 ? "end" : "middle";
  }
}

function renderBoard() {
  const columns = document.querySelector(".column-labels");
  const rows = document.querySelector(".row-labels");
  for (let i = 0; i < BOARD_SIZE; i++) {
    const col = document.createElement("span");
    const row = document.createElement("span");
    col.textContent = i + 1;
    row.textContent = rowLabels[i];
    columns.append(col);
    rows.append(row);
  }
  for (let i = 0; i < BOARD_SIZE ** 2; i++) {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.type = "button";
    tile.dataset.cell = i;
    tile.tabIndex = i === 0 ? 0 : -1;
    tiles.push(tile);
    setTile(i);
    board.append(tile);
  }
}

function focusCell(index, moveFocus = true) {
  tiles[focusIndex].tabIndex = -1;
  focusIndex = index;
  tiles[index].tabIndex = 0;
  if (moveFocus) tiles[index].focus();
}

function renderFleet() {
  fleetRows = round.ships.map(ship => {
    const row = document.createElement("li");
    const label = document.createElement("span");
    const hull = document.createElement("span");
    const progress = document.createElement("span");
    row.className = "fleet-row";
    label.className = "fleet-name";
    label.textContent = ship.name;
    hull.className = "fleet-hull";
    hull.setAttribute("aria-hidden", "true");
    for (let i = 0; i < ship.cells.length; i++) hull.append(document.createElement("i"));
    progress.className = "fleet-progress";
    row.append(label, hull, progress);
    return row;
  });
  fleet.replaceChildren(...fleetRows);
  updateFleet();
}

function updateFleet() {
  for (const [index, ship] of round.ships.entries()) {
    const row = fleetRows[index];
    const sunk = ship.hits === ship.cells.length;
    row.toggleAttribute("data-sunk", sunk);
    row.querySelector(".fleet-progress").textContent = sunk ? "На дне" : ship.hits + "/" + ship.cells.length;
    [...row.querySelector(".fleet-hull").children].forEach((piece, position) => {
      piece.toggleAttribute("data-hit", position < ship.hits);
    });
  }
}

function updateStats() {
  stats.remaining.textContent = round.remaining;
  stats.total.textContent = " / " + round.budget;
  stats.sunk.textContent = round.sunk;
  stats.remaining.toggleAttribute("data-low", round.remaining <= 5);
}

function announce(text, tone = "neutral") {
  status.textContent = text;
  status.dataset.tone = tone;
}

function playSound(key) {
  if (!soundEnabled) return;
  playing?.pause();
  playing = new Audio(sounds[key]);
  playing.volume = 0.45;
  playing.play().catch(() => {});
}

function startRound() {
  round = createRound(Number(difficulty.value));
  tiles.forEach((tile, index) => setTile(index));
  focusCell(0, false);
  revealLegend.hidden = true;
  renderFleet();
  updateStats();
  difficultyNote.textContent = "После первого выстрела смена сложности подействует только в следующей игре.";
  announce("Выберите клетку для первого выстрела.");
}

function takeShot(index) {
  const shot = fire(round, index);
  if (!shot) return;
  setTile(index, shot.state);
  if (shot.state === "sunk") showSunkHull(shot.ship);
  updateFleet();
  updateStats();

  if (shot.outcome === "win") {
    announce("Весь флот потоплен! Осталось " + shotCount(round.remaining) + ".", "win");
  } else if (shot.outcome === "loss") {
    tiles.forEach((tile, cell) => {
      if (!round.fired.has(cell) && round.board[cell]) setTile(cell, "revealed");
    });
    revealLegend.hidden = false;
    announce("Выстрелы закончились. На поле видно, где прятались оставшиеся корабли.", "loss");
  } else if (shot.state === "sunk") {
    announce(coordinate(index) + " · " + shot.ship.name + " — на дне!", "sunk");
  } else if (shot.state === "hit") {
    announce(coordinate(index) + " · Попадание! Цель: " + shot.ship.name + ".", "hit");
  } else {
    announce(coordinate(index) + " · Промах.", "miss");
  }

  if (shot.outcome) tiles.forEach(tile => tile.setAttribute("aria-disabled", "true"));
  playSound(shot.outcome || shot.state);
}

board.addEventListener("click", event => {
  const tile = event.target.closest("button[data-cell]");
  if (!tile) return;
  const index = Number(tile.dataset.cell);
  focusCell(index, false);
  takeShot(index);
});
board.addEventListener("keydown", event => {
  if (!event.target.matches("[data-cell]")) return;
  const index = Number(event.target.dataset.cell);
  let row = Math.floor(index / BOARD_SIZE);
  let column = index % BOARD_SIZE;
  switch (event.key) {
    case "ArrowUp": row--; break;
    case "ArrowDown": row++; break;
    case "ArrowLeft": column--; break;
    case "ArrowRight": column++; break;
    case "Home": column = 0; break;
    case "End": column = BOARD_SIZE - 1; break;
    default: return;
  }
  event.preventDefault();
  const clamp = position => Math.max(0, Math.min(BOARD_SIZE - 1, position));
  focusCell(clamp(row) * BOARD_SIZE + clamp(column));
});

difficulty.addEventListener("change", () => {
  const budget = Number(difficulty.value);
  if (round.fired.size) {
    difficultyNote.textContent = "В следующем раунде будет " + shotCount(budget) + ".";
  } else {
    round.budget = budget;
    round.remaining = budget;
    updateStats();
    announce("У вас " + shotCount(budget) + ". Выберите клетку для первого выстрела.");
  }
});
reset.addEventListener("click", () => {
  playing?.pause();
  startRound();
  focusCell(0);
});
soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundLabel.textContent = soundEnabled ? "Звук включён" : "Звук выключен";
  if (!soundEnabled) playing?.pause();
});

renderBoard();
startRound();
