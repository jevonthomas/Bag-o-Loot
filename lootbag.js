"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('company.sqlite', (err) => {
});

// Add a toy to the bag o' loot, and label it with the child's name who will receive it.

//     ```bash
//     ./lootbag.js add kite suzy
//     ./lootbag.js add baseball michael
//     ```

module.exports.addToy = () => {};