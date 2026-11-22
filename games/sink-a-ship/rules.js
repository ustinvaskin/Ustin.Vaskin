export const BOARD_SIZE = 8;

const fleet = [
  ["Jessi", 2],
  ["Sub", 2],
  ["Destroyer", 3],
  ["Battleship", 4],
  ["Carrier", 5],
  ["Tanker", 6]
];

function placements(length) {
  const options = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let column = 0; column < BOARD_SIZE; column++) {
      const start = row * BOARD_SIZE + column;
      if (column + length <= BOARD_SIZE) {
        options.push(Array.from({ length }, (_, offset) => start + offset));
      }
      if (row + length <= BOARD_SIZE) {
        options.push(Array.from({ length }, (_, offset) => start + offset * BOARD_SIZE));
      }
    }
  }
  return options;
}

function shuffled(options, random) {
  const copy = [...options];
  for (let end = copy.length - 1; end > 0; end--) {
    const index = Math.floor(random() * (end + 1));
    [copy[end], copy[index]] = [copy[index], copy[end]];
  }
  return copy;
}

export function createRound(budget, random = Math.random) {
  const ships = fleet.map(([name, length]) => ({ name, cells: [], hits: 0, options: shuffled(placements(length), random) }));
  const board = Array(BOARD_SIZE ** 2).fill(null);

  // Place the longest hulls first and backtrack if a shorter one doesn't fit.
  function place(index) {
    if (index < 0) return true;
    const ship = ships[index];
    for (const cells of ship.options) {
      if (cells.some(cell => board[cell])) continue;
      cells.forEach(cell => { board[cell] = ship; });
      ship.cells = cells;
      if (place(index - 1)) return true;
      cells.forEach(cell => { board[cell] = null; });
    }
    return false;
  }

  if (!place(ships.length - 1)) throw new Error("Could not place a fleet");
  ships.forEach(ship => { delete ship.options; });
  return { board, ships, budget, remaining: budget, fired: new Set(), sunk: 0, outcome: null };
}

export function fire(round, cell) {
  if (round.outcome || round.fired.has(cell)) return null;
  round.fired.add(cell);
  round.remaining--;

  const ship = round.board[cell];
  let state = "miss";
  if (ship) {
    ship.hits++;
    state = ship.hits === ship.cells.length ? "sunk" : "hit";
    if (state === "sunk") round.sunk++;
  }

  if (round.sunk === round.ships.length) round.outcome = "win";
  else if (round.remaining === 0) round.outcome = "loss";
  return { state, ship, outcome: round.outcome };
}
