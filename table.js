const Rules = require("./rules");

class Table {
  constructor() {}

  getTable(moves) {
    const table = {};

    moves.forEach((element) => {
      const obj = {};
      const rules = new Rules(moves);

      rules.getSortedArray(element);

      moves.forEach((elem) => {
        obj[elem] = rules.getWinner(elem);
      });

      table[element] = obj;
    });

    console.table(table);
  }
}

module.exports = Table;
