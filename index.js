const moves = process.argv.slice(2);
const main = require("./main");

if (2 > moves.length) {
  console.log("You cannot pass less than 3 options, instead, try this: 1 2 3");
  return;
}

if (moves.length % 2 === 0) {
  console.log("You should pass odd number (e.g.: 1 2 3 4 5)");
  return;
}

if ([...new Set(moves)].length !== moves.length) {
  console.log("You cannot pass the same options several times");
  return;
}

main(moves);
