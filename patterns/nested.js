export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

export function makeTriangle(size) {
  if (typeof size !== "number") return null;
  if (size <= 0) return [];

  const triangle = [];

  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 0; j < i; j++) {
      row.push("-");
    }
    triangle.push(row);
  }

  return triangle;
}

export function countLetter(words, letter) {
  if (typeof letter !== "string" || letter.length !== 1) return 0;

  let count = 0;

  for (const word of words) {
    for (const char of word) {
      if (char === letter) {
        count++;
      }
    }
  }

  return count;
}
